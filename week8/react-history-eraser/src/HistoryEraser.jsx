import React from 'react';
import Clickr from './Clickr'

class HistoryEraser extends React.Component {

    state = {
        historyStillExists: true,
    }

    checkClickCount = ( count ) => {
        console.log('in History Eraser::checkClickCount():', count);
        console.log(' value of this: ', this);
    
        if (count >= 5){
            this.setState ({historyStillExists: false})
        }
    
    
    }





    render() { 
    
        return (
            <div className="App">
                <h1>History Eraser</h1>
                { 
                this.state.historyStillExists ?
                <p>All is well!</p> : 
                <p>You fool, you erased history!</p>
                } 
            
                <Clickr phoneHome={ this.checkClickCount }/>
            
            </div>

            
        )
       
    } // render()

} // class HistoryEraser

export default HistoryEraser;