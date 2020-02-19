// import React from "react";
// class About extends React.Component {
//   render = () => (
//     <div className="container mt-2">
//       <h1>About</h1>
//     </div>
//   );
// }
// export default About;

import React from "react";

function About(props) {
  return (
    <div className="container mt-2">
      <h1>About {props.match.params.number}</h1>
    </div>
  );
}

export default About;
