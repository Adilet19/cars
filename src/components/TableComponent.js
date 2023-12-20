// TableComponent.js
import React, { Component } from 'react'
import './TableComponent.css';

export class TableComponent extends Component {
  render() {
    return (
      <table className= 'table'>
        <thead>
          <tr>
            <th>Партнеры</th>
            <th>Пакеты</th>
            <th>Города</th>
          </tr>
        </thead>

        {/* Тело таблицы */}
        <tbody>
          <tr>
            <td>Yandex</td>
            <td>3+1</td>
            <td>Алматы</td>
          </tr>
          <tr>
            <td>AnyTime</td>
            <td>6+2</td>
            <td>Астана</td>
          </tr>
          <tr>
            <td>Prokat</td>
            <td>10+2</td>
            <td>Шымкент</td>
          </tr>
        </tbody>

        {/* Подвал таблицы */}
        <tfoot>
          <tr>
            <td colSpan="3">Выбирайте нас!</td>
          </tr>
          <tr>
          <td rowSpan="2">Хороший сервис</td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

export default TableComponent;
