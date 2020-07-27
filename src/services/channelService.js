var PipelineService = {
  getPipeline: function (channels) {
    return {
      pipelineLabel: "Default Pipeline Name",
      favorite: false,
      tags: ["development", "sales"],
      channels: channels,
      default: "",
    };
  },
  savePipeline: async function (pipelineJson) {
    console.clear();
    console.log(pipelineJson);
    return await fetch("http://www.mocky.io/v2/566061f21200008e3aabd919", {
      method: "POST",
      body: pipelineJson,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("Request Response");
        console.log(response);
        return true;
      })
      .catch(() => {
        return false;
      });
  },
};

export default PipelineService;
