// import logo from './logo.svg';
import './App.css';

//this is not needed in function only components
import React from 'react';
import TeethSales from './TeethSales';
import Home from './Home';
import Procedures from './Procedures';


class App extends React.Component {

    state = {
      currentPage: 'home'
    };


  navigateTo = (dest) => {
    console.log('Navigating to:', dest);
    this.setState({currentPage: dest});
    

  } 

  render(){


    let pageContent;
    if(this.state.currentPage ===- 'sales'){
      pageContent = <TeethSales />;

    } else if (this.state.currentPage === 'procedures') {
      pageContent = <Procedures />;
    } else{
      pageContent = <Home />;
    };

    return (
      <div className="App">
       <header>
          <h1>
            Dentistry is my passion <br />
            It's my obsession. <br />
            I need this.
          </h1>
          <nav>
            {/* The functions are written like below, becuase otherwise the function
            will rn immediately.
            To avoid this, you can wrap this into an anonomous function. This way, conClick will receive a function definition, instead of a fucntion call.
             */}
            <a href="#" onClick={ ()=> this.navigateTo('home') }>Home</a>
            {' '}|{' '}
            <a href="#" onClick={ ()=> this.navigateTo('procedures') }>Procedures</a>
            {' '}|{' '}
            <a href="#" onClick={()=> this.navigateTo('sales') }>Teeth Sales</a>
          </nav>

          <hr />

       </header>

       
       { pageContent}

        

        <footer>
          <hr />
          &copy; 2022 Teeth Pullers
        </footer>

      </div>
    );
  } //end render


} //end Class App


export default App;
