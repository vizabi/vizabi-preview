var __data = {
  modelType: "ddfbw",
  service: 'https://big-waffle.gapminder.org', 
  dataset: 'unhcr',
  name: "unhcr"

  //modelType: "ddfcsv",
  //path: "./data/ddf--unhcr--population_statistics"
};

var VIZABI_MODEL = {
  model: {
    markers: {
        marker_destination: {
        data: {
            locale: "en",
            source: __data,
            space: ["geo", "year"]
        },
        encoding: {
            "selected": {
            modelType: "selection"
            },
            "highlighted": {
            modelType: "selection"
            },
            "size": {
            data: {
                concept: "population_arrived"
            }
            },
            "lat": {
            data: {
                space: ["geo"],
                concept: "latitude"
            }
            },
            "lon": {
            data: {
                space: ["geo"],
                concept: "longitude"
            }
            },
            "color": {
            data: {
                space: ["geo"],
                concept: "world_4region"
            },
            scale: {
                type: "ordinal"
            }
            },
            "label": {
            data: {
                space: ["geo"],
                concept: "name"
            }
            },
            "frame": {
            modelType: "frame",
            speed: 200,
            value: 2005,
            data: {
                concept: "year"
            }
            }
        }
        },
        marker_origin: {
        data: {
            locale: "en",
            source: __data,
            space: ["geo", "year"]
        },
        encoding: {
            "selected": {
            modelType: "selection"
            },
            "highlighted": {
            modelType: "selection"
            },
            "size": {
            data: {
                concept: "population_left"
            }
            },
            "lat": {
            data: {
                space: ["geo"],
                concept: "latitude"
            }
            },
            "lon": {
            data: {
                space: ["geo"],
                concept: "longitude"
            }
            },
            "color": {
            data: {
                space: ["geo"],
                concept: "world_4region"
            },
            scale: {
                type: "ordinal"
            }
            },
            "label": {
            data: {
                space: ["geo"],
                concept: "name"
            }
            },
            "frame": {
            modelType: "frame",
            speed: 200,
            value: 2005,
            data: {
                concept: "year"
            }
            }
        }
        }
    }
  },
  ui: {}
};
