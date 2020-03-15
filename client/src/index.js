import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//components
import Homepage from './components/homepage';
import Votingpage from './components/votingpage';
import Register from './components/register'



class App extends Component{

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/app" component={Votingpage} />
                    <Route path="/register" component={Register} />
                </Switch>
            </BrowserRouter>
        )
    }
}




ReactDOM.render(<App />, document.getElementById('root'));











/*

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);

*/