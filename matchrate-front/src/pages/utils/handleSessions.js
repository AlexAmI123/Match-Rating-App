// import { Component } from "react";
// import axios from "axios";

// class handleSessions extends Component{
//     constructor(props) {
//         super(props);
//         this.state = { 
//           isLoggedIn: true,
//           user: {}
//          };
//       };

//     componentDidMount() {
//         this.loginStatus()
//     }

//     loginStatus = () => {
//         axios.get('http://localhost:3000/api/v1/logged_in', {withCredentials: true})    
//         .then(response => {
//             if (response.data.logged_in) {
//                 this.handleLogin(response)
//             } else {
//                 this.handleLogout()
//             }
//         })
//         .catch(error => console.log('api errors:', error))
//     };

//     handleLogin = (data) => {
//         this.setState({
//             isLoggedIn: true,
//             user: data.user
//         })
//     }

//     handleLogout = () => {
//         this.setState({
//             isLoggedIn: false,
//             user: {}
//         })
//     }
// }
// export {handleLogin, handleLogout, loginStatus}
// //export default handleSessions