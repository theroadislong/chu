import React from 'react';
import './TableRow.scss';

class TableRow extends React.Component {
  render() {
    const { name, phone, image, age } = this.props;
    return (
      <div className="table__row user">
        <div className="user__info">
          <img className="user__img" alt="text" src={`./images/${image}.svg`} />
          <span className="user__name">{name}</span>
        </div>
        <span className="user__age">{age} лет</span>
        <a className="user__phone" href={`tel:+${phone}`}>
          {phone}
        </a>
        <input type="checkbox" />
      </div>
    );
  }
}

export default TableRow;
