import React from 'react';
import Auth from '../util/Auth';
import { Redirect } from 'react-router';
import Voting from './voting'


class VotingPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isAuthenticated: Auth.isAuthenticated()
        }
    }


    signout = e => {
        Auth.signout();
        this.setState({isAuthenticated: false });
    }

    render(){

        return !this.state.isAuthenticated? <Redirect to='/' />:(
            <div>
                Voting page
                <button onClick={this.signout}> Sign out</button>
                <Voting/>
            </div>
        )
    }
}


export default VotingPage;