// import React, { useState } from "react";
// import Account from "./components/Account";
// export default function App() {
//   const [state, setState] = useState({
//     username: "",
//     email: "",
//     password: "",
//     cellNumber: "",
//     gender: "",
//     source: "",
//     relegin: "",
//     profileImg: "",
//     age: ""
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setState((prevProps) => ({
//       ...prevProps,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(state);
//   };

//   return (
//     <>
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <div className="form-control">
//           <label>Email</label>
//           <input
//             type="text"
//             name="email"
//             value={state.email}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-control">
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={state.password}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-control">
//           <label></label>
//           <button type="submit">Login</button>
//         </div>
//       </form>

//     </div>
//     {/* <Account /> */}
//     </>
//   );
// }

import React from 'react'
import Account from './components/Account'

function App() {
  return (
    <>
    <div className="container">
      <Account />
    </div>
    
    </>
  )
}

export default App