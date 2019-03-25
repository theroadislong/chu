import React, { Component } from 'react';
import './Header.scss';
import Input from '../Input/Input';

class Header extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <header className="header">
        <section className="sort">
          <fieldset className="sort__types">
            <legend className="sort__caption">Сортировка</legend>
            <div className="sort__group">
              <Input
                name="sort-by"
                value="id"
                labelText="ID"
                onInputChange={handleChange}
                defaultRadio
              />
              <Input
                name="sort-by"
                value="name"
                labelText="Имя"
                onInputChange={handleChange}
              />
              <Input
                name="sort-by"
                value="age"
                labelText="Возраст"
                onInputChange={handleChange}
              />
            </div>
          </fieldset>
          <fieldset className="sort__types">
            <div className="sort__group">
              <Input
                name="sort-type"
                value="asc"
                labelText="По возрастанию"
                onInputChange={handleChange}
                defaultRadio
              />
              <Input
                name="sort-type"
                value="desc"
                labelText="По убыванию"
                onInputChange={handleChange}
              />
            </div>
          </fieldset>
        </section>
        <section className="sort sort--view">
          <fieldset className="sort__types">
            <legend className="sort__caption">Вид</legend>
            <div className="sort__group">
              <Input
                name="sort-view"
                value="table"
                labelText="Таблица"
                onInputChange={handleChange}
                defaultRadio
              />
              <Input
                name="sort-view"
                value="preview"
                labelText="Превью"
                onInputChange={handleChange}
              />
            </div>
          </fieldset>
        </section>
      </header>
    );
  }
}

export default Header;
