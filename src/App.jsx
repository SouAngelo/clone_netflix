import React, { useEffect, useState } from 'react';
import ListMovies from './components/listMovies';
import categories from './services/categories';
import Header from './components/banner';
import NavBar from './components/navbar/index'

function App() {

  
  return (
    <div className="App">
      <NavBar/>

      <Header/>

    {categories.map((category) => {
      return(
        <ListMovies
        key={category.name}
        title={category.title}
        path={category.path}
        isLarge={category.isLarge}
        />
      )
    })}
    </div>
  );
}

export default App;
