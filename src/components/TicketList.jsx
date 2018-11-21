import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

function TicketList(props) {
    console.log(props.ticks);
    return(
        <div>
            {props.ticks.map((ticket) =>
                <Ticket 
                    names={ticket.names}
                    location={ticket.location}
                    issue={ticket.issue} 
                    key={ticket.id} />
            )}
        </div>
    );
}

TicketList.propTypes = {
    ticks: PropTypes.array
};

export default TicketList;