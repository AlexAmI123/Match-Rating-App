import { Routes, Route, Link, Switch} from 'react-router-dom'
import Match from './pages/match/Match';
import Matches from './pages/matches/Matches';
import MatchesAdd from './pages/matches/MatchesAdd';
import Navbar from './pages/Navbar/Navbar';
import Sessions from './pages/users/Sessions';
import New from './pages/users/New';
import { Container} from 'react-bootstrap';


function App() {
    return (
      <>
        <Container>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Matches />} />
            <Route path="/Matches/:slug" element={<Match />} />
            <Route path="/AddMatch" element={<MatchesAdd />} />
            <Route path="/Login" element={<Sessions />} />
            <Route path="/SignUp" element={<New />} />
          </Routes>
        </Container>
      </>
    );
  }
export default App;