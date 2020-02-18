import React from 'react';
import Greetings from './Greetings';

function Bio(props) {
    return (
        <div> 
            <h2>Biodata: </h2>
            <h3><Greetings name="leonardus" age="15" gender= "Pure Male"/></h3>

        </div>
    )
}


export default Bio

