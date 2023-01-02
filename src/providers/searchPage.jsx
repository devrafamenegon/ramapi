import React from "react";

export const SearchPage = React.createContext({})

export const SearchPageProvider = (props) => {

    const user = "Marquinhos Bastos"

    return(
        <SearchPage.Provider value ={user}>
            {props.children}
        </SearchPage.Provider>
    )
}