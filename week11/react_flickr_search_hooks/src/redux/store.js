import { createStore } from 'redux';

//1. Click counter
// 2. Photo favourites/bookmarks list

const initialState = {
    counter: 0,
    favouritePhotos: [],
    //more key value pairs here
}

//A reducer is a pure function--a function which is completely detemrinistic or predicatble
//becasue give a specific input, it always returns the same outputs.
// i.e. It has no side effects --it doesn't change global variables, it doens't save to the DB
// or make a network request (or even a console.log)

function reducer(state=initialState, action) {
    //takes the current state and the name of the action to perform (and optionally a payload)
    //and it updates the state. 
    // it returns the entire new state object as updated by the action. 


    //We use a switch statement instead of 
    // an if-else-if to examine the action type
    // and conditionally run the matching code.
    switch ( action.type ){

        //Redux suggests this format for action.type:
        case "clickCounter/incremented":

            // NB: treat Redux state as immutable--make copies and add / delete
            //on the copy, instead of changing the original. i.e. the same as with React component's state.

            return{
                ...state, //use the spread operator to copy the key-value pairs from the existing state
                //The spread operator is how we achieve immutibility
                counter: state.counter + 1,
            };

        case 'clickCounter/decremented':

            return{
                ...state, //use the spread operator to copy the key-value pairs from the existing state
                //The spread operator is how we achieve immutibility
                counter: state.counter -1,
            };

        case 'clickCounter/incrementedBy':

            return{
                ...state,
                counter: state.counter + action.payload

            }

            case 'favouritePhotos/added':
                return {
                    ...state, 
                    favouritePhotos: [...state.favouritePhotos, action.payload]
                }

            

        //You DEFINITELY want a default, otherwise the ENTIRE state will be returned as undefined.
        default: 
            console.log('No match found in store.js', action);
            return state;

    } //switch





} //reducer()

//Single named export, inlined with variable declaration
//When we import it from elsewhere:
// import { store } from './PATH'
export const store = createStore(
    reducer,
    //optional second argument: intial state value,
    //(maybe from localStorage.getItem()
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
);

store.subscribe(()=> {

    const state = store.getState();
    //save to db, or local storage etc
    // this is the place to trigger other methods.
    //this needs to be outside the reducer.
})