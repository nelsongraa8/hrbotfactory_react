import React, { Component } from 'react';
import './ColoresRandom.css';

export default class ColoresRandom extends Component {

  colores = [
    {
      color: 'amarillo',
    },
    {
      color: 'azul',
    },
    {
      color: 'rojo',
    },
    {
      color: 'verde',
    }
  ];

  atributoReloadRandomColores = event => this.ReloadRandomColores();

  render() {
    return(
      <>
        <ul>
          {this.arrayAleatorioSinRepetirElementos().map(color => (
            <li key={color.color}>
              {color.color}
            </li>
          ))}
        </ul>
        <button onClick={this.atributoReloadRandomColores}>Random</button>
      </>
    )
  }

  arrayAleatorioSinRepetirElementos() {
    const arrayRandom = [];
    const arrayLength = this.colores.length;

    while(arrayRandom.length < arrayLength) {
      const randomIndex = Math.floor(Math.random() * this.colores.length);

      if(!arrayRandom.includes(this.colores[randomIndex])) {
        arrayRandom.push(this.colores[randomIndex]);
      }
    }

    return arrayRandom;
  }

  ReloadRandomColores() {
    this.setState(this.colores);
  }
}
