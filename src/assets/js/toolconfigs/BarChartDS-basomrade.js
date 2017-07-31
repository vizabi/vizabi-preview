var VIZABI_MODEL = {
  "state": {
    "time": {
      "startOrigin": "2000",
      "endOrigin": "2014",
      "value": "2014",
      "step": 1,
      "delayThresholdX2": 0,
      "delayThresholdX4": 0,
      "immediatePlay": true,
      "delay": 1000,
      "dim": "year"
    },
    "entities": {
      "dim": "basomrade",
    },
    "entities_stack": {
      "dim": "basomrade",
      "show": {
        "municipality": {
          "$in": ["0128_salem"]
        }
      },
    },
    "entities_side": {
      "dim": "gender",
      "show": {
        "gender": {
          "$in": ["female", "male"]
        }
      },
      "skipFilter": true
    },
    "entities_geodomain": {
      "dim": false,
    },
    "entities_colorlegend": {
      "dim": "basomrade"
    },
    "marker_order": {
      "space": ["entities_stack", "time"],
      "hook_order": {
        "use": "indicator",
        "which": "higher_education_min_3_years_percent_of_population_aged_25_64"
      }
    },
    "marker": {
      "space": ["entities", "time", "entities_side", "entities_stack", "entities_geodomain"],
      "label_stack": {
        "use": "property",
        "spaceRef": "entities",
        "which": "name"
      },
      "label_side": {
        "use": "property",
        "spaceRef": "entities_side",
        "which": "name"
      },
      "label_age": {
        "use": "property",
        "spaceRef": "entities",
        "which": "name"
      },
      "axis_y": {
        "use": "property",
        "spaceRef": "entities",
        "which": "basomrade",
        "scaleType": "ordinal",
        "allow": {
          "scales": ["ordinal"]
        }
      },
      "axis_x": { 
        "use": "indicator",
        "which": "mean_income_aged_lt_20"
      },
      "color": {
        "use": "indicator",
        "which": "population_20xx_12_31",
      },
      "side": {
        "use": "property",
        "which": "gender",
        "spaceRef": "entities_side",
        "allow": {
          "scales": ["ordinal"]
        }
      }
    },
    "entities_allpossible": {
      "dim": "basomrade",
    },
    "marker_allpossible": {
      "space": ["entities_allpossible"],
      "label": {
        "use": "property",
        "which": "name"
      }
    },
    "entities_allpossibleside": {
      "dim": "gender"
    },
    "marker_allpossibleside": {
      "space": ["entities_allpossibleside"],
      "label": {
        "use": "property",
        "which": "name"
      }
    },
    "marker_colorlegend": {
      "space": ["entities_colorlegend"],
      "label": {
        "use": "property",
        "which": "name"
      },
      "hook_rank": {
        "use": "property",
        "which": "rank"
      },
      "hook_geoshape": {
        "use": "property",
        "which": "shape_lores_svg"
      }
    },
    "entities_tags": { },
    "marker_tags": {
      "space": ["entities_tags"],
      "label": {},
      "hook_parent": {}
    }
  },
  "ui": {
    "splash": true
  },
  "data": {
    reader: 'waffle',
    path: 'https://waffle-server-dev.gapminderdev.org/api/ddf/ql',
    //dataset: 'open-numbers/ddf--sodertorn--stockholm_lan_basomrade#multidimensional'
    dataset: 'angieskazka/ddf--sodertorn--stockholm_lan_basomrade'
  }
}
