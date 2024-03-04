import React, { Component } from 'react'
import './TableStyle.css';

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
        <tbody>
          <tr>
            <td>Яндекс</td>
            <td>3+1</td>
            <td>Алматы</td>
          </tr>
          <tr>
            <td>Энитайм</td>
            <td>6+2</td>
            <td>Астана</td>
          </tr>
          <tr>
            <td>Прокат</td>
            <td>10+2</td>
            <td>Шымкент</td>
          </tr>
        </tbody>
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
