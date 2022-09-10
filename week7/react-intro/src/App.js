import React from 'react'; //no path here--comes from node Modules
import './App.css'; //this one is a relative path
import HelloUser from './HelloUser';

class App extends React.Component{

  //Every React class component must define a render method
  //which tells the browser what to draw.
  render(){

    const bearName = 'Paddington';
    const imageUrl = "http://placebear.com/200/200"

    const imageWidth = 100
    
    //Every render method must return JSX tags
    return (
      
      <div className='App'>
        <h1>Hello from React</h1>
        <p>This is within the p tag</p>
        <p>These tags are allowed because they are all wrapped in a parent tag</p>
        <p>Hello {bearName}! </p>
        <img src={imageUrl} alt="place bear" />
        <hr /> 
        <p>Notice in the code that even the <code> { `<br/>` }</code> tag has a closing slash</p>
        {/* 
          the below is saying 'give me an instance of the 'hello user' class and give use the render method contined in there to render some HTML to be displayed.
        */}
      
        <HelloUser name="Johnny" imgWidth="300"/>
        <HelloUser imgWidth={imageWidth}name="Lei"/>
        <HelloUser imgWidth="500" name="Kay"/>
      
      </div>

        

    )

  } //end render()

} //end of class App

export default App;
