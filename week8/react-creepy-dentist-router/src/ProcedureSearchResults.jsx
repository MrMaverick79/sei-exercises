import React from "react";

class ProcedureSearchResults extends React.Component {


    //React lifecycle methods
    componentDidMount(){
        //here React will run it at the appropriate time.
        //"Mounting" means adding to the DOM
        //This is thge place to load API data
        console.log('ComponentDidMount: ', this.props.match.params.query);

    }
    //this is for detatching event handler from the DOM, which are only relevant to this component.
    // You might also 'unsubscriobe' from any notifications or streaming data the component migh have started listening to.
    //i.e any cleanup  you need to do
    componentWillUnmount(){

        console.log('ComponentWillUnmount():');

    }
    
    shouldComponentUpdate(prevProps, prevState) {  
        //this runs after after a prop or state is updated but before the  rerender 
        //This allows you to return false from this to stop certain renders or loops from occurring.
        console.log('shouldcomponentUpdate()');
        return true


        
    }

    //this runs after the prop or state is updtated, to see if props have changed (i.e. search query props.) So, do you need to trigger another axios request?
    componentDidUpdate(prevProps, prevState) {
            console.log('componentDidUpdate', prevProps, );
    }

    render(){

        //Where to do our axious.get() ??? 

        //Definitely not inside redner() -- this function
        //runs every time the state updtaes, which would 
        //include every axios.get(). 

        //Also, axios.get would also need to run this.SetSstae(), leading to an infinte loop.
        // NB: setState() always runs render

        return(

            <div>
                <h3>Results for "{this.props.match.params.query}"</h3>
            </div>

        )

    }

}

export default ProcedureSearchResults