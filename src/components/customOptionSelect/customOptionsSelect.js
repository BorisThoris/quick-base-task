import React from "react";
import PropTypes from "prop-types";
import "./customOptionSelect.css";

const QuickBaseForm = ({
  options,
  propertyToDisplay,
  isString,
  onSelectFunc,
  placeHolderOption,
  switchConfirmation,
  lastSelected,
}) => {
  const getOptions = (passedOptions) => {
    return passedOptions
      ? passedOptions.map((option, index) => getOption(option, index))
      : [];
  };

  const getOption = (option, index) => {
    return (
      <option key={index} value={index}>
        {option[propertyToDisplay] ||
          (isString && option) ||
          "Coult Not Display Value"}
      </option>
    );
  };

  const onSelectChange = (e) => {
    if (switchConfirmation) {
      switchConfirmation(() => {
        !isNaN(e.target.value)
          ? onSelectFunc(e.target.value)
          : onSelectFunc(null);
      });
    } else {
      onSelectFunc(e.target.value);
    }
  };

  return (
    <select
      className="inputAndSelectSizer selectContainer"
      onChange={onSelectFunc ? onSelectChange : null}
      disabled={!(options.length > 0)}
      value={lastSelected || undefined}
    >
      {/* {placeHolderOption}  */}

      {/* displays options */}
      {options.length > 0 ? getOptions(options) : <option>No options</option>}
    </select>
  );
};

QuickBaseForm.propTypes = {
  options: PropTypes.array.isRequired,
  propertyToDisplay: PropTypes.string,
  isString: PropTypes.bool,
  onSelectFunc: PropTypes.func,
  placeHolderOption: PropTypes.element,
  switchConfirmation: PropTypes.func,
  lastSelected: PropTypes.number,
};

export default QuickBaseForm;
