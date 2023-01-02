import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import "./styles.scss";

export default function Search() {
  const [searchPersonagens, setSearchPersonagens] = useState([]);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  
  async function searchPersonage(input, page){
    setCurrentPage(page);
    axios.get(`https://rickandmortyapi.com/api/character/?name=${input}&page=${page}`)
    .then((response) => {
      setSearchPersonagens(response.data.results);
      setPages(response.data.info.pages);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    searchPersonage("", 1);
  }, [])

  function renderPagination(separatedPage) {
    let input = document.getElementById('toolbar').value;;

    return (
      <li
        key={separatedPage}
        className='index-pagination' 
        onClick={() => searchPersonage(input, separatedPage)}
        style={separatedPage == currentPage ? {backgroundColor: "var(--azudalogo)"} : {}}
        >{separatedPage},
      </li>
    );
  }

  let pagesHtml = [];

  for(let i = 1; i <= pages; i++){
    pagesHtml.push(i);
  }

  return (
    <>
      <div className="container-toolbar">
        <input type="text" id="toolbar" placeholder="Search for the desired character" onChange={() => searchPersonage(event.target.value, 1)}/>
      </div>

      <ul className='container-pagination'>
        {
          pagesHtml.map((p) => {
            return (
              
              renderPagination(p)
            )
          })
        }
      </ul>
      
      <div className='container-lista'>
        {
          searchPersonagens.map((personagem) => {
            return (
              <div key={personagem.id} className="card-personagem">
                <img src={personagem.image}></img>
                <div className='card-content'>
                  <h2>{personagem.name}</h2>
                  <Link className="link" to={`/details/${personagem.id}`}><span>See more details <i className="fa-solid fa-arrow-right"></i></span></Link>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}