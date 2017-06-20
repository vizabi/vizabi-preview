let VIZABI_MODEL = {
  state: {
    time: {
      dim: "year",
      startOrigin: "1800",
      value: "2014"
    },
    entities_colorlegend: {
      dim: "phase_from"
    },
    entities: {
      dim: "phase_from"
    },
    entities_to: {
      dim: "phase_to"
    },
    marker: {
      space: [
        "entities",
        "entities_to",
        "time"
      ],
      color: {
        use: "indicator",
        which: "amount",
        syncModels: ["marker_colorlegend"]
      },
      label: {
        use: "indicator",
        which: "amount",
      },
      size: {
        use: "indicator",
        which: "amount"
      }
    },
    marker_tags: { space: [], label: { }},
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
    }
  },
  locale: { id: "en" },
  ui: {
    chart: { },
    buttons: ["moreoptions"],
    dialogs: {
      popup: ["moreoptions","colors"],
      sidebar: ["colors"],
      moreoptions: ["speed", "about"]
    }
  },
  data: {
    keySize: 2,
    // reader: "ddf",
    // path: "data/ddf--sankey"
    reader: "csv",
    path: "data/ddf--sankey/test.csv"
  }
};