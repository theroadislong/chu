import React, { Component } from 'react';
import './Table.scss';
import TableRow from '../TableRow/TableRow';

class Table extends Component {
  render() {
    const { data } = this.props;
    const elements = data.map(element => (
      <TableRow {...element} key={element.id} />
    ));
    return <section className="table">{elements}</section>;
  }
}

export default Table;
