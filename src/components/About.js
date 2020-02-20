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
    <div className="container mt-5">
      <div className="alert alert-info">
        {" "}
        <h3>
          Saya Leonardus Sagala, Saya baru saja selesai mengemban ilmu di Telkom
          University jurusan D3 Sistem Informasi. Saya yakin dapat
          mengaplikasikan ilmu yang sudah didapat dalam bidang pekerjaan.
          Pribadi dengan rasa ingin tahu yang tinggi. Selalu tertarik untuk
          belajar tentang sesuatu yang baru.
        </h3>
      </div>
    </div>
  );
}

export default About;
