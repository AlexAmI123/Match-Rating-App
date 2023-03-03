import { Routes, Route} from 'react-router-dom'
import { Container} from 'react-bootstrap';
import { Component } from 'react';
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
          <Navbar isLoggedIn = {this.state.isLoggedIn} handleLogout = {this.handleLogout} loginStatus = {this.state.isLoggedIn}/>
          <Routes>
            <Route path="/" element={<Matches />} />
            <Route path="/Matches/:slug" element={<Match handleLogin = {this.handleLogin} isLoggedIn = {this.state.isLoggedIn}/>}/>
            <Route path="/AddMatch" element={<MatchesAdd />} />
            <Route path="/Login" element={<Login handleLogin = {this.handleLogin}/>}/>
            <Route path="/SignUp" element={<Signup handleLogin = {this.handleLogin}/>}/>
          </Routes>
        </Container>
      </>
    );
  }
};
export default App;