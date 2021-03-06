import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Ticket(props){
  const ticketInfo = 
    <div>
      <style jsx>{`
          h3:hover { 
              color: blue;
          }

          div:hover { 
              background-color: yellow;
              color: blue;
          }
      `}</style>
      <h3>{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime} ago</h4>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
    
    if (props.currentRouterPath === '/admin'){
      return (
        <div onClick={()=> {props.onTicketSelection({names: props.names, location: props.location, issue: props.issue, formattedWaitTime: props.formattedWaitTime}); }}>
          {ticketInfo}
        </div>
      )
    }
    return(
        <div>
            <style jsx>{`
                h3:hover { 
                    color: blue;
                }

                div:hover { 
                    background-color: yellow;
                    color: blue;
                }
            `}</style>
            {ticketInfo}
        </div>
    );
}

Ticket.propTypes = {
    names: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    issue: PropTypes.string,
    formattedWaitTime: PropTypes.string.isRequired,
    currentRouterPath: PropTypes.string,
    onTicketSelection: PropTypes.func
};

export default Ticket;