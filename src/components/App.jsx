import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import Admin from './Admin';

import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ticks: [],
            selectedTicket: null,
        };
        this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
        this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
    }

    handleAddingNewTicketToList(newTicket){
        let newTicksList = this.state.ticks.slice();
        newTicket.formattedWaitTime = (newTicket.timeOpen).fromNow(true);
        newTicksList.push(newTicket);
        this.setState({ticks: newTicksList});
    }
    
    handleChangingSelectedTicket(ticket){
      this.setState({selectedTicket: ticket});
    }
    
    componentDidMount() { 
      console.log('mount')
        this.waitTimeUpdateTimer = setInterval(()=>
            this.updateTicketElapsedWaitTime(),
        5000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.waitTimeUpdateTimer);
    }
    
    updateTicketElapsedWaitTime(){
      console.log('check');
      let newTicks = this.state.ticks.slice();
      newTicks.forEach((ticket) =>
          ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
      );
      this.setState({ticks: newTicks});
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
                    <Route path='/admin' render={(props)=> <Admin ticks={this.state.ticks} currentRouterPath={props.location.pathname} onTicketSelection={this.handleChangingSelectedTicket} selectedTicket={this.state.selectedTicket}/>}/>
                    <Route component={Error404}/>
                </Switch>
            </div>
        );
    }
}

export default App;