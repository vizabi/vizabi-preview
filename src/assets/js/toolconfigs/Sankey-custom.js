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
    marker_tags: { space: [], label: {} },
    "marker_colorlegend": {
      "space": ["entities_colorlegend"],
      "label": {
        "use": "property",
        "which": "name"
      }
    }
  },
  locale: { id: "en" },
  ui: {
    chart: {},
    buttons: ["moreoptions"],
    dialogs: {
      popup: ["timedisplay", "moreoptions", "colors"],
      sidebar: ["timedisplay", "colors"],
      moreoptions: ["speed", "about"]
    }
  },
  data: {
    // reader: "ddf",
    // path: "data/ddf--sankey",
    keySize: 2,
    reader: "csv",
    path: "data/ddf--sankey/test3.csv"
  }
};