var __data = {
  modelType: "ddfbw",
  service: "https://big-waffle.gapminder.org",
  dataset: "surveys",
  name: "surveys"
};

var VIZABI_MODEL = {
  model: {
    markers: {
      marker_result: {
        data: {
          locale: "en",
          source: __data,
          space: ["question", "survey"],
          filter: {
            "dimensions":
              { "question": { "question.q_type": "abc" } }
          }
        },
        encoding: {
          "result": {
            data: {
              concept: "result"
            }
          }
        }
      }
    }
  },
  ui: {
  }
}