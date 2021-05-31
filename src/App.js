import './App.css';
import MovieAdd from './component/MovieAdd';
import MovieList from './component/MovieList';
import React, {useState} from 'react';
import {Route,Switch, BrowserRouter} from 'react-router-dom';
import MovieDec from './component/MovieDec'



function  App(){
  const[films,SetFilms]= useState([{
    id:1,
    title: "Game of thrones",
    description: "Genre : Fantasy",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61r-vt0bLZL._AC_SX522_.jpg",
    rate: "3",
    video:"https://www.youtube.com/watch?v=rlR4PJn8b8I",
  },
  {
    id:2,
    title: "Breaking bad",
    description:
      "Walter White, 50 ans, est professeur de chimie dans un lycée du Nouveau-Mexique.",
    posterUrl:
      "https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg",
    rate: "4",
    video:"https://www.youtube.com/watch?v=bzQP3xIEbOc,"
  },
  {
    id:3,
    title: "hunter x hunter",
    description:
      "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
    posterUrl:
      "https://fr.web.img5.acsta.net/pictures/19/08/01/09/52/4803203.jpg",
    rate: "5",
    video:"https://www.youtube.com/watch?v=6CBGCe9E06I",
  }]);
  const add=(newMovie)=>{
    SetFilms([...films,newMovie])
    console.log(newMovie)
  }
  return (
    <div className="App" >
      <header className="App-header">
      
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <MovieList films={films} />
            <MovieAdd add={add}/>
          </Route>
          <Route path='/description/:id'>
            <MovieDec films={films}/>
          </Route>
          

        </Switch>
      </BrowserRouter>
          
      </header>
    </div>
  );
}

export default App;
