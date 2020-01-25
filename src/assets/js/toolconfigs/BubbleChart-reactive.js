var __data = {
  modelType: "ddfcsv",
  path: "./data/ddf--jheeffer--mdtest/"
};

var VIZABI_MODEL = {
  model: {
    markers: {
      bubble: {
        modelType: "bubble",
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
            modelType: "selection",
            data: { ref: "markers.bubble.encoding.trail.data" }
          },
          "highlighted": {
            modelType: "selection"
          },
          "order": {
            modelType: "order",
            data: {
              ref: "markers.bubble.encoding.size.data",
              direction: "desc"
            }
          },
          "size": {
            modelType: "size",
            data: {
              concept: "population_total"
            },
            scale: {
              type: "log"
            }
          },
          "y": {
            data: {
              concept: "life_expectancy",
            },
            scale: {
              //domain: [20, 40]
            }
          },
          "x": {
            data: {
              concept: "income_per_person_gdppercapita_ppp_inflation_adjusted"
            },
            scale: {
              type: "log"
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
          },
          "trail": {
            modelType: "trail",
            groupDim: "time"
          },
        }
      }
    }
  },
  ui: {
    //ui
    "buttons": {
      "buttons": ["colors", "find", "trails", "moreoptions", "presentation", "sidebarcollapse", "fullscreen"]
    },
    "dialogs": {
      "popup": ["timedisplay", "colors", "find", "moreoptions"],
      "sidebar": ["timedisplay", "colors", "find", "size"],
      "moreoptions": ["opacity", "speed", "colors", "presentation", "about"]
    },
    "chart": {}
  }
}