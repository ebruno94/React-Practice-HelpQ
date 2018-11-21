import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
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

            <h3>{props.location} - {props.names}</h3>
            <p><em>{props.issue}</em></p>
            <hr/>
        </div>
    );
}

Ticket.propTypes = {
    names: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    issue: PropTypes.string
};

export default Ticket;