
import React from 'react';
import '../App.css';

import { useSelector , useDispatch} from 'react-redux';


import {HashRouter as Router, Route, Routes} from 'react-router-dom';

import SearchForm from './SearchForm';
import ThumbnailGallery from './ThumbnailGallery';

// Flickr URLs were here -------------->>>>>>>>>


function FlickrSearch (){
  
    // state and performSearch were here  ------->>>>>>>
    
    //REDUX --grabbing one part of the state (counter)
    const counter = useSelector( state => state.counter) 
    const favourites = useSelector(state => state.favouritePhotos)

    //Redux --> we "dispatch an action"
    // to trigger code in the reducer and updtae
    //the state of our global data store
    const dispatch = useDispatch()
    
  
  function handleClick(){
    //this must use the same labelling as the actions in the reducer switch
    dispatch ({ type: 'clickCounter/incremented'})
  }

      // this.state.error check was here -------------->
      // Note the Route component={ Search Form}. wiothou a path/ exact path -> it will always display
      return (
        <div className="App">
          <h1>Flickr Search</h1>
          <nav>
            Global counter: { counter }
          </nav>
          <br/>
          <button onClick= { handleClick }>Add count</button>
          <hr/>
          <div>
            <h5> Favourites </h5>
          <ul>
              { favourites.map (f => <li key={f.id}>photo: {f.id}</li>)}

          </ul>

        </div>

          <Router>
            <Routes>
  
              <Route path="" element= { <SearchForm /> } >
                <Route path="/search/:searchText" element={ <ThumbnailGallery /> } />
              </Route>
            </Routes>
          </Router>
  
          {
            /*
  
          <SearchForm onSearch={ this.performSearch } />
  
          <ThumbnailGallery
            loading={ this.state.loading }
            photos={ this.state.resultPhotos }
          />
  
  
          */
        }
  
  
        </div>
      );



} //end FlickSearch()

export default FlickrSearch;
