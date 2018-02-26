var VIZABI_MODEL = {
  state: {
    time: {
      dim: "year",
      startOrigin: "2017",
      value: "2017"
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
        "entities_to",
        "entities_from",
        "time"
      ],
      size: {
        use: "indicator",
        which: "amount__region4",
        allow: {
          "scales": ["linear"]
        }
      }
    },
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
      },
      hook_rank: {
        use: "property",
        which: "rank",
        scaleType: "ordinal"
      }
    },
  },
  ui: {
    chart: {
      nodeSortingByHook: true //set to true and use "hook_rank" to sort the nodes, set to false or ommit for automatic sorting
    }
  }
};