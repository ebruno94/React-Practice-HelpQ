import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid'; 

function NewTicketForm(props) {
    let _names = null;
    let _location = null;
    let _issue = null;

    let handleNewTicketFormSubmissions = (e) => {
        e.preventDefault();
        props.onNewTicketCreation({
            names: _names.value,
            location: _location.value,
            issue: _issue.value,
            id: v4()
        });

        _names.value = '';
        _location.value = '';
        _issue.value = '';
    };
    
    return (
        <div>
            <h1>Fill this shit out!</h1>
            <form onSubmit={handleNewTicketFormSubmissions}>
                <input 
                    type='text' 
                    id='names'
                    placeholder='Pair names'
                    ref={(i) => {_names = i;}}/>
                <br/>
                <input 
                    type='text' 
                    id='location'
                    placeholder='location'
                    ref={(i) => {_location = i;}}/>
                <br/>
                <textarea 
                    type='text' 
                    id='issue'
                    placeholder='Describe your issue'
                    ref={(t) => {_issue = t;}}/>
                <br/>
                <button type='submit'>Help!</button>
            </form>
        </div>
    );
}

NewTicketForm.propTypes = {
    onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;