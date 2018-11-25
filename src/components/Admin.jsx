import React from 'react';
import PropTypes from 'prop-types';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';

function Admin(props){
  let optionalSelectedTicketContent = null;
  if (props.selectedTicket != null){
    optionalSelectedTicketContent = <TicketDetail selectedTicket={props.selectedTicket}/>;
  }
  return(
    <div>
      <h1> This is the admin page! </h1>
      {optionalSelectedTicketContent}
      <TicketList 
        ticks={props.ticks} 
        currentRouterPath={props.currentRouterPath}
        onTicketSelection={props.onTicketSelection}/>
    </div>
  );
}

Admin.propTypes = {
  ticks: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onTicketSelection: PropTypes.func,
  selectedTicket: PropTypes.object
};

export default Admin;