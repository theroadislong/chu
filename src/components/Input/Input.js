import React from 'react';

class Input extends React.Component {
  render() {
    const { name, value, labelText, onInputChange, defaultRadio } = this.props;
    return (
      <React.Fragment>
        <input
          className="sort__input"
          type="radio"
          name={name}
          value={value}
          id={value}
          onChange={onInputChange}
          defaultChecked={defaultRadio}
        />
        <label className="sort__label" htmlFor={value}>
          {labelText}
        </label>
      </React.Fragment>
    );
  }
}

export default Input;
