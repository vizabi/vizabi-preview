var VIZABI_MODEL = {
    state: {
        time: {
            dim: "year"
        },
        entities: {
            dim: "governorate"
        },
        entities_gender: {
            dim: "gender"
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
        marker: {
            space: [
                "entities",
                "entities_gender",
                "entities_loctype",
                "entities_education_level",
                "entities_age_group",
                "time"
            ],
          axis_x: {which: "wealth_index_mean", use: "indicator"},
          axis_y: {which: "early_marriage_rate", use: "indicator"},
          size: {which: "total_population", use: "indicator"},
          hook_entities_gender: {which: "name", use: "property", spaceRef: "entities_gender"},
          hook_entities_loctype: {which: "name", use: "property", spaceRef: "entities_loctype"},
          hook_entities_education_level: {which: "name", use: "property", spaceRef: "entities_education_level"},
          hook_entities_age_group: {which: "name", use: "property", spaceRef: "entities_age_group"}
        }
    },
    "ui": {
        "dialogs": {"dialog": {"find": {enablePicker: true} } }
    },
    data: {
      reader: "ddf",
      path: "data/private/preliminary"
    }
};