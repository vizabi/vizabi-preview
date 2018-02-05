let VIZABI_MODEL = {
  state: {
    time: {
      value: "2017",
    },
    entities: {
      dim: "governorate"
    },
    entities_from: {
      dim: "governorate_from"
    },
    entities_to: {
      dim: "governorate_to"
    },
    entities_age: {
      dim: "age_group",
      show: {age_group: {$in: ["all_ages"]}}
    },
    entities_education: {
      dim: "educational_level_10",
      show: {educational_level_10: {$in: ["all_educational_levels_10"]}}
    },
    entities_gender: {
      dim: "gender",
      show: {gender: {$in: ["both_sexes"]}}
    },
    entities_reason: {
      dim: "reason_for_migrating",
      show: {reason_for_migrating: {$in: ["any_reason"]}}
    },
    marker: {
      limit: 1000,
      space: [
        "entities_from",
        "entities_to",
        "entities_age",
        "entities_education",
        "entities_gender",
        "entities_reason",
        "time"
      ],
      hook_entities_from: {which: "name", use: "property", spaceRef: "entities_from"},
      hook_entities_to: {which: "name", use: "property", spaceRef: "entities_to"},
      hook_entities_age: {which: "name", use: "property", spaceRef: "entities_age"},
      hook_entities_education: {which: "name", use: "property", spaceRef: "entities_education"},
      hook_entities_gender: {which: "name", use: "property", spaceRef: "entities_gender"},
      hook_entities_reason: {which: "name", use: "property", spaceRef: "entities_reason"},
      
      
      size: {
        use: "indicator",
        which: "amount"
      }
    },
    marker_nodes: {
      color: {
        use: "property",
        which: "color",
        scaleType: "ordinal"
      }
    }
  },
  ui: {splash: false}
};
