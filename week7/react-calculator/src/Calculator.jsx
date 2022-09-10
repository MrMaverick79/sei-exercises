import React from 'react'


class Calculator extends React.Component{

    //The old way of getting state
    //We need the equivalent of Ruby's "def initialize":

    // constructor(props){ //run the constructor of the parent class
    //     super(props)
    //     this.state={
    //         firstNum : 0,
    //         secondNum: 0
    //     }
    // }

    //Newer syntax:
    //Here we define an instance variable "this.state", which may change as our app is interracted with.
    //In particular any variables that we might need ot change on the page
    // This needs to be done outside of the render()
    state = {

        firstNum: 0,
        secondNum: 0

    };

    //this.setState takes keys and values that update the values in state
    //We must use the arrow functuion to define
    // methods used as event handlers, otheriwse they get the wrong 'this'
    //setState will rerun your render method, which will cause and updatetd
    //state variables to be updated in the DOM

    updateFirstNum = ( ev ) => {
        this.setState( { firstNum: parseInt(ev.target.value)})
        
    }; //updateFirstNum

    updateSecondNum = ( ev ) => {
        this.setState( { secondNum: parseInt(ev.target.value)})
        
    }

    render(){
        
        const{firstNum, secondNum} = this.state
        return (

            

            <div className="app">
            
                <h1>CalculoReact</h1>

                <input type="text" placeholder='first number' style={{'marginLeft': '10px'}} onChange={this.updateFirstNum}/>

                <input type="text" placeholder='second number' style={{'marginLeft': '10px'}}onChange={this.updateSecondNum}/>
                
                <br />

                <p>Answers go here:</p>
                <p>
                    First num: {this.state.firstNum}
                </p>
                <p> Second num: {this.state.secondNum}</p>

                <p>{firstNum} * {secondNum} = {firstNum * secondNum} </p>
                <p>{firstNum} + {secondNum} = {firstNum + secondNum} </p>
                <p>{firstNum} - {secondNum} = {firstNum - secondNum} </p>
                <p>{firstNum} / {secondNum} = {firstNum / secondNum} </p>
                
            </div>
        )
    
    }



    

};//class calculator

export default Calculator