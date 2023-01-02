import { useEffect, useContext } from 'react';

import "./styles.scss";

import Card from "../Card";

import { PersonageContext } from '../../providers/PersonageContext';

export default function Home() {

  const {getRandomPersonage} = useContext(PersonageContext)
  
  useEffect(() => {
    getRandomPersonage()
  }, []);
  
  return(
    <>
    <h1></h1>
      <main className="container">
        <Card />
        <div className='container-button'>
          <button type='button' onClick={() => getRandomPersonage()} className="btnGerarPersonagem">Generate character<i className="fa-solid fa-user-plus"></i></button>
        </div>
      </main>
      <footer className='footer'>
        <a href='https://github.com/devrafamenegon' target="_blank"><i className="fa-brands fa-github fa-2x"></i></a>
        <a href='https://github.com/RaulLiberato' target="_blank"><i className="fa-brands fa-github fa-2x"></i></a>
      </footer>
    </>
  )
}