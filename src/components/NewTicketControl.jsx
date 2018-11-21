import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTicketForm from './NewTicketForm';
import PropTypes from 'prop-types';

class NewTicketControl extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            formVisibleOnPage: false
        };
        this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
    }
    
    handleTroubleshootingConfirmation(){
        this.setState({formVisibleOnPage: true});
    }

    render(){
        let currentContent = null;
        if (this.state.formVisibleOnPage){
            currentContent = <NewTicketForm onNewTicketCreation={this.props.onNewTicketCreation} />;
        } else {
            currentContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
        }
        return( 
            <div>
                {currentContent}
            </div>
        );
    }
}

NewTicketControl.propTypes = {
    onNewTicketCreation: PropTypes.func
};

export default NewTicketControl;