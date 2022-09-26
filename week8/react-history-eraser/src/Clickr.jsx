import React from 'react';

class Clickr extends React.Component {

        state = {
            clickCounter: 0,
        };


    handleClick = () => {

         const newCounterValue = this.state.clickCounter +1;
        //nope: 
        // this.state.clickCounter++
        // You are not allowed to change state directly. It won't trgigger a rerender
        // In contrast this.setState will: 
        this.setState({ clickCounter: newCounterValue })

        //because this.setState() is asynchronous, it takes tiume to perform its state updtae.
        //This meand you can't rely on stored datat to be updtated in time 
        // to use it in a line within  the sam function (as in a console.log)
        // You could, instead, use a variable within the function.

        // We need to pass in the state to the parent (History Eraser) to check 
        //whether rthe click threshold has been passed
        //
        this.props.phoneHome( newCounterValue);
        
    } //end of handleClick

    render(){


        return(
            <div>
                <button onClick={ this.handleClick }>Erase History</button>

            </div>
        )

    }

} //end Clickr


export default Clickr