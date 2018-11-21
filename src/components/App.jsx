import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';

import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ticks: [
                {
                    names: 'Thato and Haley',
                    location: '3A',
                    issue: 'Firebase won\'t save record. Halp!'
                },
                {
                    names: 'Udon and Ollie',
                    location: '5A',
                    issue: 'There\'s no more food!'
                },
                {
                    names: 'Ernie and Keke',
                    location: '7C',
                    issue: 'I need more money!'
                }
            ]
        };
        this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
    }

    handleAddingNewTicketToList(newTicket){
        let newTicksList = this.state.ticks.slice();
        newTicksList.push(newTicket);
        this.setState({ticks: newTicksList});
    }
    
    render(){
        return (
            <div>
                <style jsx>{`
                    div {
                        text-align: center;
                    }
                `}</style>
                <Header/>
                <Switch>
                    <Route exact path='/' render={() => <TicketList ticks={this.state.ticks}/>} />
                    <Route path='/newticket' render={()=> <NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
                    <Route component={Error404}/>
                </Switch>
            </div>
        );
    }
}

export default App;