import { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

import Card from "../Card";

import "./styles.scss";

import { PersonageContext } from '../../providers/PersonageContext';

export default function Details() {
  let { id } = useParams();

  const { getPersonage } = useContext(PersonageContext)
  
  useEffect(() => {
    getPersonage(id);
  }, [])

  return(
    <>
      <main className="container">
        <Link to="/search" className='arrow'><i className="fa-solid fa-arrow-left arrow"></i></Link>

        <Card />
      </main>
    </>
  )
}