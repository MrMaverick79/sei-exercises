import React from "react";


class SecretsForm extends React.Component{

    state= {
        secretText: ""
    };

    handleInput = (ev) => {
        this.setState({secretText: ev.target.value})
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        console.log('Form submitted with: ', this.state.secretText);

        //Tell the parent that the form was submitted,
        //and exactly what the submitted secret text was
        //then the parent can POST the data to the Rails backend
        //via another AJAX request
        //handleSubmit()

        //thishas been delivered as a prop form line 94 in the parent component(Secrets). 'onSubmit' is actually postSecret
        this.props.notifyParent( this.state.secretText )
    }

    render(){

        return(
            //the onSubmit is used instead of an onClick, so the user can press enter.
            <form onSubmit={ this.handleSubmit }>
                <strong>Unburden Yourself:</strong>
                <br />
                 <input type="text" onChange={this.handleInput} />
                 <button>Submit Secret</button>
            </form>

        );


    }

} //SecretsForm

export default SecretsForm