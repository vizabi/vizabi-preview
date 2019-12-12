var __data = {
  modelType: "ddfcsv",
  path: "./data/ddf--jheeffer--mdtest"
};

var VIZABI_MODEL = {
  model: {
    requiredEncodings: ["x","y"],
    data: {
      locale: "en",
      source: __data,
      space: {
        autoconfig: {
          concept: {
            $nin: ["age"]
          }
        }
      }
    },
    encoding: {
      "selected": {
        modelType: "selection"
      },
      "highlighted": {
        modelType: "selection"
      },
      "y": {
        data: {
          concept: "population_total"
        },
        scale: {
          domain: [0,100000000]
        }
      },
      "x": {
        data: {
          concept: {            
            autoconfig: {
              concept_type: "time"
            }
          }
        }
      },
      "color": {
        data: {
          space: ["country"],
          concept: "world_4region"
        },
        scale: {
          type: "ordinal"
        }
      },
      "label": {
        data: {
          //space: ["country"],
          modelType: "entityPropertyDataConfig",
          concept: "name"
        }
      },
      frame: {
        modelType: "frame",
        speed: 200,
        data: {
          concept: {
            autoconfig: {
              concept_type: "time"
            }
          }
        }
      }
    }
  },
  ui: {
    //ui
    "time-slider": {
      "show_value": true
    },
    "buttons": {
      "buttons": ["colors", "find", "moreoptions", "presentation", "sidebarcollapse", "fullscreen"],
    },
    "dialogs": {
      "popup": ["timedisplay", "colors", "find", "moreoptions"],
      "sidebar": ["timedisplay", "colors", "find"],
      "moreoptions": ["opacity", "speed", "colors", "presentation", "about"]
    } 
  }
}