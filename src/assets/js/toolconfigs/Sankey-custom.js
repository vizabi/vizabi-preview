let VIZABI_MODEL = {
  state: {
    time: {
      dim: "year",
      startOrigin: "2014",
      value: "2014"
    },
    entities_all: {
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
      axis: {
        use: "indicator",
        which: "amount",
        allow: { scales: ["linear", "log"] },
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
    marker_entities: {
      space: ["entities_all"],
      label: {
        use: "property",
        which: "name",
      },
      color: {
        use: "property",
        which: "color",
        scaleType: "ordinal"
      }
    },
  },
  locale: { id: "en" },
  ui: {
    splash: true,
    chart: {},
    buttons: ["moreoptions"],
    dialogs: {
      popup: ["timedisplay", "moreoptions"],
      sidebar: ["timedisplay"],
      moreoptions: ["speed", "about"]
    }
  }
};