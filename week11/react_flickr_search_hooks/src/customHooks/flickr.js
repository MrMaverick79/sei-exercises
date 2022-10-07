
//cutsome Hooks fotr loading API data from Flickr
import { useState, useEffect } from "react";
import axios from "axios";

const FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084';
const FLICKR_BASE_URL = 'https://api.flickr.com/services/rest';


function useFLickrSearchResults ( queryText ) {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState( null);
  const [results, setResults] = useState([])

  useEffect( async()=> {

         
    try{

      const flickrParams = {
        method: 'flickr.photos.search',
        api_key: FLICKR_API_KEY,
        format: 'json',
        nojsoncallback: 1,
        text: queryText // should come from user input
      };

      const res = await axios.get( FLICKR_BASE_URL, {params: flickrParams})

      console.log('Data', res.data);

      //now we change the state
      setLoading( false );
      setResults( res.data.photos.photo )

    } catch (err){
      console.log('There has been an error getting the images', err);
      setLoading ( false );
      setError( err )
    }


}, [queryText]); //note empty array--this is now component did mount

    //return to the code the 3 pieces of the Hooks state
    return{ loading, results, error } //keys same as variables


}//end useFLickrSearchResults


export { useFLickrSearchResults }