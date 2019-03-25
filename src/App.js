import React, { Component } from 'react';
import getData from './getData';
import Header from './components/Header/Header';
import Preview from './components/Preview/Preview';
import Table from './components/Table/Table';

class App extends Component {
  state = {
    data: [],
    isLoaded: false,
    sortBy: 'id',
    sortType: 'asc',
    sortView: 'table',
  };
  componentDidMount() {
    getData().then(data =>
      this.setState({
        data: data,
        isLoaded: true,
      })
    );
  }
  handleChange = event => {
    switch (event.target.name) {
      case 'sort-by':
        return this.setState({
          sortBy: event.target.value,
        });
      case 'sort-type':
        return this.setState({
          sortType: event.target.value,
        });
      case 'sort-view':
        return this.setState({
          sortView: event.target.value,
        });
      default:
        return;
    }
  };
  render() {
    const { data, sortView } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <Header handleChange={this.handleChange} />
        </div>
        <div className="container">
          {sortView === 'preview' && <Preview data={data} />}
          {sortView === 'table' && <Table data={data} />}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
