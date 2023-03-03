import { Routes, Route, Link, Switch} from 'react-router-dom'
import { Container} from 'react-bootstrap';
import { Component } from 'react';
import axios from 'axios';
import Match from './pages/match/Match';
import Matches from './pages/matches/Matches';
import MatchesAdd from './pages/matches/MatchesAdd';
import Navbar from './pages/Navbar/Navbar';
import Login from './pages/users/Login';
import Signup from './pages/users/SignUp';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: true,
      user: {}
     };
  };

  componentDidMount() {
    this.loginStatus()
  }

  loginStatus = () => {
    axios.get('http://localhost:3000/api/v1/logged_in', {withCredentials: true})    
      .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  };

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }

render() {
    return (
      <>
        <Container>
          <Navbar handleLogout = {this.handleLogout} loginStatus = {this.loginStatus}/>
          <Routes>
            <Route path="/" element={<Matches />} />
            <Route path="/Matches/:slug" element={<Match handleLogin = {this.handleLogin}/>}/>
            <Route path="/AddMatch" element={<MatchesAdd />} />
            <Route path="/Login" element={<Login handleLogin = {this.handleLogin}/>}/>
            <Route path="/SignUp" element={<Signup handleLogin = {this.handleLogin}/>}/>
          </Routes>
        </Container>
      </>
      // <>
      //   <Container>
      //     <Navbar/>
      //     <Routes>
      //       <Route path="/" element={<Matches />} />
      //       <Route path="/Matches/:slug" element={<Match />}/>
      //       <Route path="/AddMatch" element={<MatchesAdd />} />
      //       <Route path="/Login" element={<Login />}/>
      //       <Route path="/SignUp" element={<Signup />}/>
      //     </Routes>
      //   </Container>
      // </>
    );
  }
};
export default App;