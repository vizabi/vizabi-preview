var timeLogger = {
  _styles: {
    background: "#262626",
    color: "#ccff00",
  },
  _values: {},

  add: function (key) {
    if (!this._values[key]) {
      this._values[key] = {
        time: this._now(),
        isSnapped: false
      };
    }

  },

  update: function (key) {
    const value = this._values[key];
    if (value) {
      value.time = this._now();
    }
  },

  reset: function (key) {
    const value = this._values[key];
    if (value) {
      value.isSnapped = false;
    }
  },

  snapOnce: function (key) {
    const value = this._values[key];
    if (value && !value.isSnapped) {
      value.isSnapped = true;
      this._log(key);
    }
  },

  snap: function (key) {
    this._values[key] && this._log(key);
  },

  remove: function (key) {
    delete this._values[key];
  },

  _now: function () {
    return performance.now();
  },

  _log: function (key) {
    var time = ((this._now() - this._values[key].time) / 1000).toFixed(4);
    var message = key + " load time: " + time + " seconds";
    console.log("%c • %c" + message + " ", this._getStylesString({ color: "red" }), this._getStylesString());
  },

  _getStylesString: function (styles) {
    return Object.keys(styles = Object.assign({}, this._styles, styles))
      .reduce(function (result, key) {
        return result + key + ":" + styles[key] + ";";
      }, "");
  }
};