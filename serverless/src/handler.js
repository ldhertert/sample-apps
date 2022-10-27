"use strict";

module.exports.func1 = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Luke's function",
        input: event,
      },
      null,
      2
    ),
  };
};
