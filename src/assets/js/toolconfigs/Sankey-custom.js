let VIZABI_MODEL = {
  state: {
    time: {
      dim: "year",
      startOrigin: "2014",
      value: "2014"
    },
    // entities_colorlegend: {
    //   dim: "phase_from",
    // },
    entities_colorlegend: {
      dim: "phase"
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
        // scaleType: "ordinal",
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
    marker_nodes: {
      space: ["entities_colorlegend"],
      color: {
        use: "property",
        which: "color",
        scaleType: "ordinal"
      }
    },
    marker_labels: {
      space: ["entities_colorlegend"],
      label: {
        use: "property",
        which: "name",
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
    reader: "ddf",
    path: "data/ddf--sankey",
    // keySize: 2,
    // reader: "csv",
    // path: "data/ddf--sankey/test3.csv"
  }
};