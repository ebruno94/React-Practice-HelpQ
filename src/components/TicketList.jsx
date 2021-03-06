import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

function TicketList(props) {
    return(
        <div>
            {props.ticks.map((ticket) =>
                <Ticket 
                    names={ticket.names}
                    location={ticket.location}
                    issue={ticket.issue} 
                    formattedWaitTime={ticket.formattedWaitTime}
                    currentRouterPath={props.currentRouterPath}
                    key={ticket.id} 
                    onTicketSelection={props.onTicketSelection}/>
            )}
        </div>
    );
}

TicketList.propTypes = {
    ticks: PropTypes.array,
    currentRouterPath: PropTypes.string,
    onTicketSelection: PropTypes.func
};

export default TicketList;