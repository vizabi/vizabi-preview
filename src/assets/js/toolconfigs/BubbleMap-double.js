var __data = {
    modelType: "ddfbw",
    service: 'https://big-waffle.gapminder.org',
    dataset: 'unhcr-only-refugees',
    name: "unhcr-only-refugees"

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
                            type: "ordinal",
                            domain: ["europe", "asia", "africa", "americas"],
                            range: ["#ffe700", "#ff5872", "#00d5e9", "#7feb00"]
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
                },
                requiredEncodings: ["lat", "lon", "size"]
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
                            type: "ordinal",
                            domain: ["europe", "asia", "africa", "americas"],
                            range: ["#ffe700", "#ff5872", "#00d5e9", "#7feb00"]
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
                },
                requiredEncodings: ["lat", "lon", "size"]
            }
        }
    },
    ui: {
        FRAME: "year",
        ORIGIN: "origin",
        DESTINATION: "destination",
        ENCODING: "size",
        GEO: "geo",
        ORIGIN_MEASURE: "population_left",
        DESTINATION_MEASURE: "population_arrived",
        GEO_MEASURE: "population_moved",
        TITLE_FROM: "Refugees from:",
        TITLE_TO: "Refugees to:"
    }
};
