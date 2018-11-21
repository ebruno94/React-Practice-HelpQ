import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div>
            <style jsx>{`
                div {
                    background-color: darkorange;
                    text-align: center;
                    padding: 25px;
                    color: white;
                    border: 2px solid black;
                    border-radius: 25px;
                    box-shadow: 0px 5px black;
                    margin-bottom: 25px;
                }

                h1{
                    font-family: monospace;
                }
            `}</style>
            <h1>Help Queue</h1>
            <Link to='/'>Home</Link> | <Link to='/newticket'>New Ticket</Link>
        </div>
    );
}

export default Header;