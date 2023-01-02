import { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import "./styles.scss";

import { PersonageContext } from '../../providers/PersonageContext';

export default function Card(props) {
  const {getRandomPersonage, personagem} = useContext(PersonageContext)

  return(
      <>
        {
          personagem.id ?
            <section className="card">
              <img src={personagem.image} alt="Foto do Personagem" style={{background: "no-repeat center center fixed"}}/>
              
              <div className='card-content'>
                <h2>{personagem.name}</h2>
                <span className='status'>
                <span className='status__icon' style={personagem.status == 'Alive' ? {backgroundColor: "#63fa42"} : (personagem.status == 'Dead' ? {backgroundColor: "#d63d2e"} : {backgroundColor: "#fdfdfd"})}></span>
                {personagem.status} - {personagem.species}
                </span>
                <span>Sex: {personagem.gender}</span>
                <span>Type: {personagem.type ? (personagem.type) : ("Unknown")}</span>
                <span>Origin: {personagem.origin.name}</span>
                <br/>
                <span>Last location: {personagem.location.name}</span>
                <span>Present episodes: {Object.keys(personagem.episode).length}</span>
              </div>
            </section>
          : <></>
        }
      </>
  )
}