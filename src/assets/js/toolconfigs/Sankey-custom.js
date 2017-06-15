let VIZABI_MODEL = {
  state: {
    time: {
      dim: "year",
      startOrigin: "2014",
      endOrigin: "2014",
    },
    entities: {
      dim: null
    },
    entities_from: {
      dim: "phase_from"
    },
    entities_to: {
      dim: "phase_to"
    },
    marker: {
      space: ["entities_from", "entities_to", "time"],
      hook_size: {
        use: "indicator",
        which: "amount"
      }
    }
  },
  locale: { id: "en" },
  ui: {},
  data: {
    keySize: 2,
    // reader: "ddf",
    // path: "data/ddf--sankey"
    reader: "csv",
    path: "data/ddf--sankey/ddf--datapoints--amount--by--phase_from--phase_to--year.csv"
  }
};