//ADAPTED CODE FROM: http://blog.vjeux.com/2011/javascript/urlon-url-object-notation.html

var URLI = {};

//grabs width, height, tabs open, and updates the url
function updateURL(force) {

  function update() {

    var lang, model;
    if(typeof VIZ !== 'undefined') {
      minUI = VizabiSharedComponents.LegacyUtils.diffObject(VIZABI_UI, 
        VizabiSharedComponents.Utils.getDefaultStateTree(VIZABI_MODEL.ui, VIZ));
      VizabiSharedComponents.Utils.clearEmpties(minUI);
      minModel = VizabiSharedComponents.LegacyUtils.diffObject(VIZABI_MDL, VIZABI_MODEL.model);
      VizabiSharedComponents.Utils.clearEmpties(minModel);
    }

    if(model) {
      lang = model.locale.id || document.getElementById('vzbp-btn-lang').getAttribute('data-next_lang');
    }
    if(!lang) {
      lang = 'en';
      document.getElementById('vzbp-btn-lang').setAttribute('data-next_lang', 'se');
    }
    var url = {
      width: parseInt(placeholder.style.width, 10),
      height: parseInt(placeholder.style.height, 10),
      fullscreen: hasClass(placeholder, 'fullscreen'),
      bodyC: document.body.getAttribute("class")
    };

    forEachElement(".collapsible-section", function(el, i) {
      var open = hasClass(el, "open");
      var id = el.getAttribute('id');
      url[id] = open;
    });

    url_string = URLON.stringify(url).replace(/=#/g, "=%23");
    forEachElement("#vzbp-nav a", function(el, i) {
      var href = el.getAttribute("href") + "#";
      href = href.substring(0, href.indexOf('#'));
      href += "#" + url_string;
      el.setAttribute("href", href);
    });

    if((minUI && Object.keys(minUI).length > 0) ||
      (minModel && Object.keys(minModel).length > 0)) {
      url.ui = minUI;
      url.model = minModel;
      url_string = URLON.stringify(url).replace(/=#/g, "=%23");
    }

    window.history.replaceState('Object', 'Title', "#" + url_string);
  }

  //optimize for timeslider
  if (force) {
    update();
  } else {
    throttle(update, 1000);
  }

}

function parseURL() {
  var loc = window.location.toString();
  var hash = null;
  if(loc.indexOf('#') >= 0) {
    hash = loc.substring(loc.indexOf('#') + 1);
  }

  if(hash) {
    parsedUrl = URLON.parse(hash.replace(/=%2523/g, "=%23").replace(/=%23/g, "=#"));

    URLI.model = parsedUrl.model || {};
    URLI.ui = parsedUrl.ui || {};

    if(parsedUrl.width && parsedUrl.height && placeholder && setDivSize) {
      setDivSize(placeholder, container, parsedUrl.width, parsedUrl.height);
      if(parsedUrl.fullscreen) {
        setFullscreen();
      }
    }

    forEachElement(".collapsible-section", function(el, i) {
      var id = el.getAttribute('id');
      if(parsedUrl[id]) {
        addClass(el, 'open');
      } else {
        removeClass(el, 'open');
      }
    });

    if(parsedUrl.bodyC) {
      document.body.setAttribute('class', parsedUrl.bodyC);
    }
  }
}

function resetURL() {
  var href = location.href + "#";
  location.href = href.substring(0, href.indexOf('#'));
}
