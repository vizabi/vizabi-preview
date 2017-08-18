let VIZABI_MODEL = {
  state: {
    time: {
      dim: "year",
      startOrigin: "2014",
      value: "2014"
    },
    entities: {
      dim: "phase"
    },
    entities_from: {
      dim: "phase_from"
    },
    entities_to: {
      dim: "phase_to"
    },
    marker_links: {
      space: [
        "entities_from",
        "entities_to",
        "time"
      ],
      size: {
        use: "indicator",
        which: "amount",
        allow: {
          "scales": ["linear"]
        }
      }
    },
    marker_tags: { space: [], label: {} },
    marker: {
      space: ["entities"],
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
    buttons: ["find", "moreoptions", "presentation"],
    dialogs: {
      popup: ["timedisplay", "find", "moreoptions"],
      sidebar: ["timedisplay", "find"],
      moreoptions: ["speed", "about"]
    }
  }
};