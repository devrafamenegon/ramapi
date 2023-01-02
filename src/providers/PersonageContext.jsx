import axios from "axios";
import React, { useState } from "react";

export const PersonageContext = React.createContext({});

export function PersonageProvider({ children }) {
  const [personagem, setPersonagem] = useState([]);

  async function getRandomPersonage() {
    let id = Math.floor(Math.random() * 826);
    
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        setPersonagem(response.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }

  async function getPersonage(id) {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        setPersonagem(response.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }

  return (
    <PersonageContext.Provider value={{getRandomPersonage, getPersonage, personagem}}>
      {children}
    </PersonageContext.Provider>
  );
};
