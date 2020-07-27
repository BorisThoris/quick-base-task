import React, { useState } from "react";
import PropTypes from "prop-types";

import "./genericButton.css";

function GenericButton({
  text,
  buttonFunc,
  noLoading,
  noFlex,
  grayButton,
  disabled,
}) {
  const [isLoading, setIsLoading] = useState(false);

  function promiseWrap() {
    return new Promise((resolve) => {
      setTimeout(() => {
        buttonFunc();
        resolve("done");
      });
    });
  }

  const executeFunc = async () => {
    setIsLoading(true);
    if (noLoading) buttonFunc();
    else await promiseWrap();
    setIsLoading(false);
  };

  return (
    <button
      style={noFlex ? { flex: 0 } : {}}
      className={grayButton ? "genericButton grayButton" : "genericButton"}
      onClick={executeFunc}
      disabled={isLoading || disabled}
    >
      {isLoading ? "Loading..." : text || "Missing Text"}
    </button>
  );
}

GenericButton.propTypes = {
  text: PropTypes.string.isRequired,
  buttonFunc: PropTypes.func.isRequired,
  grayButton: PropTypes.bool,
  noLoading: PropTypes.bool,
  noFlex: PropTypes.bool,
  disable: PropTypes.bool,
};

export default GenericButton;
