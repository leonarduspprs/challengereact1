import React from 'react';

function Username(props) {
    return (
        <div>
            <h3> username -> {props.uname}</h3>
        </div>
    )
}

Username.defaultProps = {
    uname: "User"
  };

export default Username

