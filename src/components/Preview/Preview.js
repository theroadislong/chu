import React, { Component } from 'react';
import './Preview.scss';
import PreviewUser from '../PreviewUser/PreviewUser';

class Preview extends Component {
  render() {
    const { data } = this.props;
    const elements = data.map(element => (
      <PreviewUser {...element} key={element.id} />
    ));
    return <section className="preview">{elements}</section>;
  }
}

export default Preview;
