import { Routes, Route, Link, Switch} from 'react-router-dom'
import Match from './pages/match/Match';
import Matches from './pages/matches/Matches';
import { Container, Navbar } from 'react-bootstrap';

  
function App() {
    return (
      <>
        <Container>
          <Routes>
            <Route path="/" element={<Matches />} />
            <Route path="/Matches/:slug" element={<Match />} />
          </Routes>
        </Container>
      </>
    );
  }
export default App;