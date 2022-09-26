import axios from "axios";
import React from "react";
import SecretsForm from "./SecretsForm";
import '../App.css';

const RAILS_SECRETS_BASE_URL = 'http://localhost:3000/secrets';

//This is a 'functional' component --not a class,
//but just a functions that gets its props
// as and arg. They CANNOT HAVE THEIR OWN STATE 
// so they are for display only
function SecretItem( props ) {

    return(
        <li>
            <strong>{props.secret.content}</strong>
            <br />
            <em> Posted: {props.secret.created_at} </em>
        </li>
    
    );

}

class Secrets extends React.Component{

    state = {
        //anything that migth change or look different from one render to the next should be in state
        secrets: [],
        loading: true,
        error: null
    }

    componentDidMount(){
        //We want to load the list of Secrets from the backend as soon as the frontent loads,
        //so our AJAX request 
        //should be initiated from componentDidMount()
        console.log('ComponentDidMount()');
        this.fetchSecrets(); //below. This runs when the page is loaded, so that you don't have tro wait for the setInterval to run 


        //Poll the server every 2 seconds to get any secrets that were added to the server (form other users, for example) since the page last poll. 
        //This is the 'old school' way of checking whether the Server has been updated.
        // It requires the server to send all of the secrets each time.

        setInterval(this.fetchSecrets, 2000) //this is now running every two seconds 

    }

    fetchSecrets = async() => {
        //This method makes it easier(?) to load Ajax requests, rather than putting it in componentDidMount()
        
        try{
            const res = await axios.get(RAILS_SECRETS_BASE_URL);
            console.log('response', res.data);
            this.setState({
                //these have to go into state so that render() can see them
                secrets: res.data.reverse(), // reverse is used to show the most recent secrets first. This can be done on the back end 
                loading: false
            });

        } catch ( err ) {
            console.error('Error loading secrets', err);
            this.setState ({

                loading: false,
                error: err 

            });
            
        } //try catch
 


    } //fetchSecrets()


    //this method will be given as a prop to the child component (secretsForm) so that child can notify
    // the parent when the secrets form is submitted
    // The content of the form will be pased as an argument
    // i.e. text.
    postSecret = async( text ) => {
        //passing from child to parent?
        console.log('We are in secrets::postSecret', text);

        try{
             //note the second argument here--this is params
            const res = await axios.post
            (RAILS_SECRETS_BASE_URL, { content: text})
            console.log('POST response', res.data);
           
            this.setState({
                //here we put the new data (res.data) at the fron of the previous array (... this.state.secrets). Thus we are not pushing (because we cant) we are make a copy of 
                // the current array  with ... and prepend the freshly created secret object
                secrets: [ res.data, ...this.state.secrets]
            })


        } catch ( err ) {

            console.error('Error saving secret to backend', err);
        }
       
      
       


    } //post Secret



    render() {

        if(this.state.error != null){
            return <p>There was an error</p> //early return if there is an error
        }

        return (

             <div className="App">

                <h1>Spill Ya Guts</h1>
                {/* 
                Here we are providing trhe child with the definition of the function (as opposed to running the function). In the child, it will be known as this.props.onSubmit in the child
                                 */}
                <SecretsForm notifyParent={ this.postSecret }/>

                <hr />

                <h3>Terrible Secrets Below</h3>

                { this.state.loading 
                    ?    
                    <p>Loading secrets...</p> : 
                    <ul>
                        { this.state.secrets.map( s => <SecretItem key={s.id} secret= { s }/> ) }
                    </ul> 
                }

             </div>


        );

    }
}

export default Secrets;