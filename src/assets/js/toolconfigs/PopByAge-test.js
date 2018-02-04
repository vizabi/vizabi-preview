var VIZABI_MODEL = {
  "state": {
    "time": {
      "step": 1,
      "value": 2017,
      "delayThresholdX2": 0,
      "delayThresholdX4": 0,
      "immediatePlay": true,
      "delay": 200,
      "dim": "year"
    },
    
    
    
    
    
    
    
    "entities": {
      "dim": "region",
      "filter": {
      },
      "show": {region: {"$in": ["west_bank"]}}
    },
    
        entities_loctype: {
            dim: "locality_type"
        },
        entities_education_level: {
            dim: "education"
        },
        entities_age_group: {
            dim: "age_group"
        },
    
    "entities_geodomain": {
      "dim": "region",
      "filter": {
      },
      "show": {region: {"$in": ["west_bank"]}}
    },
    "entities_colorlegend": {
      "dim": "region"
    },
    "entities_age": {
      "dim": "age",
      "show": {
        "age": {
          "$nin": ["not_stated","all_ages"]
        }
      },
      "grouping": 1
    },
    "entities_side": {
      "show": {gender: {"$in": ["male"]}},
      "dim": "gender",
      "skipFilter": true
    },
    "marker": {
      "space": [
        "entities", 
        "time", 
        "entities_loctype",
        "entities_education_level",
        "entities_age_group",
        "entities_side", 
        "entities_age", 
        "entities_geodomain"
      ],
      "label_stack": {
        "use": "property",
        "spaceRef": "entities",
        "which": "name"
      },
      
          hook_entities_loctype: {which: "name", use: "property", spaceRef: "entities_loctype"},
          hook_entities_education_level: {which: "name", use: "property", spaceRef: "entities_education_level"},
          hook_entities_age_group: {which: "name", use: "property", spaceRef: "entities_age_group"},
      
      
      
      
      
      "label_side": {
        "use": "property",
        "spaceRef": "entities_side",
        "which": "name"
      },
      "axis_y": {
        "use": "property",
        "which": "age",
        "spaceRef": "entities_age",
        "domainMax": 100,
        "domainMin": 0,
        "_important": false
      },
      "axis_x": {
        "use": "indicator",
        "which": "total_population"
      },
      "color": {
        "use": "property",
        "which": "region",
        "scaleType": "ordinal",
        "spaceRef": "entities",
        "allow": {
          "scales": ["ordinal"]
        },
        "palette": {
          "world": "#ffb600"
        },
        "syncModels": ["marker_colorlegend"]
      },
      "side": {
        "use": "constant",
        "which": "_default",
        "spaceRef": "entities_side",
        "allow": {
          "scales": ["ordinal"]
        }
      }
    },
    
    "entities_allpossibleside": {
      "show": {},
      "dim": "gender",
      "skipFilter": false
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
    "splash": false
  }
}
