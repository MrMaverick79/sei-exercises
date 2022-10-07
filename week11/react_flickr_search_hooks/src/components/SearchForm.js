
import { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom'

//HOOK BASED VERSION
function SearchForm( props ) {

  //useState returns 2 elements: curretn state value and a setter function
  //We are setting searchText as ('')
  const [searchText, setSearchText] = useState( '');

  // Insetad of passing the router history object (which contas a push() method
  //down as a propwhen rendered with a <Route> tag,
  // we "hook into" the stateful logic of the router with 
  // useNavigate() hook. Later we will also use useParams();

  const push = useNavigate(); //this is like history.push from the previous version

  function handleSubmit ( ev ){
    console.log('Form submitted', searchText);
    ev.preventDefault();
    push(`/search/${searchText}`)
  }

  function handleInput( ev ){
    console.log('input', ev.target.value);
    setSearchText( ev.target.value)
  }

  return(

    <div>
      <form onSubmit={ handleSubmit }>
        <input type="text" onChange={ handleInput } />
        <button>Search</button>
      </form>

      {/* The ThumbnailGallery componentn, whcih is a child route of this SearchForm whhould appear here */}
      < Outlet />
    </div>

  );
}

/***************************
// FORMER CLASS BASED VERSION 
class SearchForm extends React.Component {

  state = {
    searchText: ''
  };


  handleInput = (ev) => {
    // console.log('handleInput():', ev.target.value);
    this.setState({ searchText: ev.target.value });
  }; // handleInput()


  handleSubmit = (ev) => {
    ev.preventDefault();
    console.log('handleSubmit()');

    // Tell the parent component that there is a search ready
    // to perform, and tell it the query text for the search
    // this.props.onSearch( this.state.searchText );
    // We are REALLY running the method called 'performSearch' in the
    // parent component <FlickrSearch>
    this.props.history.push(`/search/${ this.state.searchText }`);
    // This is as if in Rails we had a `redirect_to search_results_path('query here')`

  }; //

  render(){

    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input type="text" onChange={ this.handleInput } />
          <button>Search</button>
        </form>
      </div>
    );

  } // render()

} // class SearchForm
**********************/

export default SearchForm;
