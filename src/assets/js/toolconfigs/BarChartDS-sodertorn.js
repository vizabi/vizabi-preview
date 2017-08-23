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
      "dim": null
    },
    "entities_geodomain": {
      "dim": "basomrade",
      "show": {
        "basomrade": {
          "$in": ["world"]
        }
      },
      "skipFilter": true
    },
    "entities_colorlegend": {
      "dim": "geo"
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
    "marker_order": {
      "space": ["entities_allpossible", "time"],
      "hook_order": {
        "use": "indicator",
        "which": "share_emigration_min_3_years_of_higher_education_aged_25_64"
      }
    },
    "marker": {
      "space": ["entities", "time", "entities_side", "entities_allpossible", "entities_geodomain"],
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
        "spaceRef": "entities_allpossible",
        "which": "name"
      },
      "axis_y": {
        "scaleType": "ordinal",
        "use": "property",
        "which": "basomrade",
        "spaceRef": "entities_allpossible",
        "_important": false
      },
      "axis_x": {
        "use": "indicator",
        "which": "mean_income_aged_gt_20"
      },
      "color": {
        "use": "indicator",
        "which": "share_emigration_min_3_years_of_higher_education_aged_25_64",
        "spaceRef": "entities",
        "syncModels": ["marker_colorlegend"]
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
      "dim": "basomrade"
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
    "entities_tags": {
      "dim": "tag"
    },
    "marker_tags": {
      "space": ["entities_tags"],
      "label": {
        "use": "property",
        "which": "name"
      },
      "hook_parent": {
        "use": "property",
        "which": "parent"
      }
    }
  },
  "ui": {
    "splash": true
  },
  "data": {
    reader: 'waffle',
    path: 'https://waffle-server-dev.gapminderdev.org/api/ddf/ql',
    dataset: 'open-numbers/ddf--sodertornsmodellen'
  }
}
