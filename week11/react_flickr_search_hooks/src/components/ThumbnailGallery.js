
import { useParams } from 'react-router-dom'
import {useFLickrSearchResults} from '../customHooks/flickr'

import { useSelector, useDispatch } from 'react-redux'


//Hook version

function ThumbnailGallery ( props ){

  //Redux global
  const counter = useSelector( state => state.counter);
  

  const dispatch = useDispatch();

  const params = useParams(); //a hook from react-router-dom. It is a reactive Hook function. It is reactive--i.e. it will be forced tro re-run (which is a re-render)
  const {loading, results, error} = useFLickrSearchResults( params.searchText)

  if( error ){
    return <p>Error loading from API.</p>
  }

  return (

      <div className="thumbnails">
         <p>Redux store counter: { counter} </p>
        <button onClick={ ()=> dispatch({type: 'clickCounter/incrementedBy', payload: 5}) }>Increment by 5</button>
        <h3>
          Results for "{ params.searchText }":
        </h3>

       
       
      {
        loading
        ?
        <p>Loading results...</p>
        :
        results.map( photo => <FlickrImage photo={photo} size="q" /> )
      }
    </div>
  )
} //end ThumbnailGallery




 
 //Object destructuring in function parameter list.
 //The two args below are part of an aobject, and so they announce to the function what keys to 'unpack'
const FlickrImage = ({ photo, size }) => {
  // const {photo, size} = props;

  //REDUX
  const dispatch = useDispatch();

  function  handleClick(){
    dispatch({ type: 'favouritePhotos/added', payload: photo} ); 
  }

  return (
    <img
      key={photo.id}
       src={`https://live.staticflickr.com/${ photo.server }/${ photo.id }_${photo.secret}_${ size }.jpg`}
       alt={ photo.title } 
       onClick={handleClick}
    />
  );

}; // generateImageURL()

/*******************
//Non-hook version
class ThumbnailGallery extends React.Component {


  state = {
    resultPhotos: [],
    loading: false,  // controls whether or not to show loading message
    error: null  // whether or not to show an error message
  }


  // As soon as this component is mounted on the DOM
  // (by the router), it knows it will have a search
  // query in the path (which it can acces via the
  // router params), and it should do an AJAX request
  // to the Flickr API immediately
  componentDidMount(){
    this.performSearch( this.props.match.params.searchText );
  } // componentDidMount()

  componentDidUpdate(prevProps, prevState){
    
    //This lifecycle method runs when either PROPS or STATE have updtated. We can use this to run something when this happens.

    //IF you don't check what is changed, you might end up in an infinite loop because the setState in the Ajax request will get us back into this funciton.
    //To avoid this, check whether it's the particulare props or stae you are responding to
    // that has changed before you do your ajax search.
    if(prevProps.match.params.searchText !== this.props.match.params.searchText){
      this.performSearch(this.props.match.params.searchText )
    };
    //The pro searchText is called a DEPENDENCY

  } //componentDidUpdate


  performSearch = async (query) => {
    console.log('FlickrSearch::performSearch()', query);

    // If we don't do this, we never see the loading message
    this.setState({ loading: true });

    // When you refactor to use unique Route components,
    // you will need to use componentDidMount() in your
    // FlickrSearchResults component - similar to the
    // Creepy Dentist <ProcedureSearchResults> component

    // componentDidUpdate() -- look into this and the args it gives you
    // to work out how to do a new search from a search results route
    // (assuming the search form is visible on every route)
    // BEWARE OF INFINITE LOOPS - turn off the axios.get() and
    // do a console.log instead while testing this!!!

    const flickrParams = {
      method: 'flickr.photos.search',
      api_key: FLICKR_API_KEY,
      format: 'json',
      nojsoncallback: 1,
      text: query // should come from user input
    };

    // axios.get( FLICKR_BASE_URL, { params: flickrParams } )
    //  .then( res => {
    //     console.log('response', res.data);
    //  })
    //  .catch( err => {
    //    console.log('Error in search AJAX: ', err);
    //  });

    try {
      const res = await axios.get( FLICKR_BASE_URL, {params: flickrParams} );
      console.log('response', res.data);
      this.setState({
        resultPhotos: res.data.photos.photo,
        loading: false  // stop showing loading message
      });
    } catch( err ){
       console.log('Error in search AJAX: ', err);
       this.setState({ error: err, loading: false });
    }


  }; // performSearch()




  render(){

    // Handle the special case where there is an error
    if( this.state.error !== null ){
      // early return; never reach the later 'return'
      return <p>Sorry, there was an error loading your results. Try again.</p>;
    }


    return (
      <div className="thumbnails">

        <h3>
          Results for "{ this.props.match.params.searchText }":
        </h3>

      {
        this.state.loading
        ?
        <p>Loading results...</p>
        :
        this.state.resultPhotos.map( photo => <FlickrImage photo={photo} size="q" /> )
      }
      </div>
    );

  } // render()

} // class ThumbnailGallery
******************/

export default ThumbnailGallery;
