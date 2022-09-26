import React from 'react';
import './App.css';

//These are our own components
import Home from './Home';
import Procedures from './Procedures';
import TeethSales from './TeethSales';
import ProcedureSearch from './ProcedureSearch';
import ProcedureSearchResults from './ProcedureSearchResults';

//as there is no default export from the router packag.
//Thus we have to import using their corrent name,
// However, we can rename them with 'as'
import {Route, HashRouter as Router, Link} from 'react-router-dom';


class App extends React.Component {

    render(){

        return (
            <div className="App">
                
             <Router>
                <header>
                    <h1>
                    Dentistry is my passion <br />
                    It's my obsession. <br />
                    I need this.
                    </h1>
                    <nav>
                      
                     <Link to = "/">Home</Link>
                     {' '} |{' '}
                     <Link to = '/sales'>Sales</Link>
                     {' '} |{' '}
                     <Link to  = '/procedures'>Procedures</Link>

                    {/* 
                    
                        // We need the router to render this ProcedureSearch componenent
                        // so we can use the prop 'history' and in particular its 
                        // push() method to trigger a new router visit
                        //from JS code

                        //To make sure the component is always visible
                        // ie not dependent on a specific path, we can just leave out the 
                        //"path= " prop
                    */}


                     <Route component={ ProcedureSearch } />
                    </nav>
                            
                    <hr />
        
                </header>
        
                
                {/* 
                    // This is like the Rails.rb file:
                    // get '/sales' => 'sales#teeth'
                    //But here it is also part of the React route list.
                    //So  ehre it is all mixed upo within the layout of the HTML.
                */}
                    <Route exact path="/"  component={ Home }/>
                    <Route exact path="/sales"  component={ TeethSales }/>
                    <Route exact path="/procedures"  component={  Procedures }/>
                    <Route exact path="/procedures/search/:query" component={ProcedureSearchResults} />
                
        
                
        
                <footer>
                    <hr />
                    &copy; 2022 Teeth Pullers
                </footer>
              </Router>
            </div>
          );

    }


} 

export default App