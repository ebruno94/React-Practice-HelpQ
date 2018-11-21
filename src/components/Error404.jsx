import React from 'react';
import PropTypes from 'prop-types';
import chicken from '../assets/img/chicken.jpg';

export default function Error404(props){
    return(
        <div>
            <style jsx>{`
                .pathname{
                    color: blue;
                }
            `}</style>
            <h1>OOPS! <em className='pathname'>{props.location.pathname}</em> does not exist!</h1>
            <img src={chicken} style={{height: '200px', width:'400px'}} alt="Chicken Attack"/>
        </div>
    );
}

Error404.propTypes = {
    location: PropTypes.object,
};