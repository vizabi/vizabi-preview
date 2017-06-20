let VIZABI_MODEL = {
  state: {
    time: {
      dim: "year",
      startOrigin: "1800",
      value: "2014"
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
      space: [
        "entities",
        "entities_from",
        "entities_to",
        "time"
      ],
      size: {
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
    path: "data/ddf--sankey/test.csv"
  }
};