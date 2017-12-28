var VIZABI_MODEL = {
  "state": {
    "time": {
      "startOrigin": "1993",
      "endOrigin": "2014",
      "value": "2014",
      "dim": "year"
    },
    "entities": {
      "dim": "basomrade",
      "show": {"size": "big"}
    },
    "entities_gender": {
      "dim": "gender"      
    },
    "entities_colorlegend": {
      "dim": "municipality"
    },
    "entities_tags": {
      "dim": "tag"
    },
    "entities_allpossible": {
      "dim": "basomrade",
      "show": {"size": "big"}
    },
    "marker_allpossible": {
      "space": ["entities_allpossible"],
      "label": {
        "use": "property",
        "which": "name"
      }
    },
    "marker": {
      "space": ["entities", "entities_gender", "time"],
      "label": {
        "use": "property",
        "which": "name"
      },
      "label_gender": {
        "use": "property",
        "which": "name"
      },
      "axis_x": {
        "use": "indicator",
        "which": "mean_income_aged_gt_20"
      },
      "color": {
        "use": "property",
        "which": "municipality",
        "scaleType": "ordinal",
        "syncModels": ["marker_colorlegend"]
      }
    },
    "marker_colorlegend": {
      "space": ["entities_colorlegend"],
      "opacityRegular": 0.8,
      "opacityHighlightDim": 0.3,
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
  "data": {
    reader: 'waffle',
    path: 'https://waffle-server-dev.gapminderdev.org/api/ddf/ql',
    dataset: 'open-numbers/ddf--sodertornsmodellen'
  },
  "ui": {
    "datawarning": {
      "doubtDomain": [1800, 1950, 2015],
      "doubtRange": [1.0, 0.8, 0.6]
    },
    "splash": true
  }
}
