import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

function TicketList(props) {

    return(
        <div>
            {props.ticks.map((ticket, index) =>
                <Ticket 
                    names={ticket.names}
                    location={ticket.location}
                    issue={ticket.issue} 
                    key={index} />
            )}
        </div>
    );
}

TicketList.propTypes = {
    ticks: PropTypes.array
};

export default TicketList;