import { Container, Grid } from '@material-ui/core';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Resume from './pages/Resume/Resume';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';

// React router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <Container className="top-60">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Profile />
          </Grid>
          <Grid item xs>
            <Router>
              <Header />
              <div className="main-content container-shadow">
                <Switch>
                  <Route path='/Resume'>
                    <Resume />
                  </Route>
                  <Route path='/portfolio'>
                    <Portfolio />
                  </Route>
                  <Route path='/Contact'>
                    <Contact />
                  </Route>
                  <Route path='/'>
                    <Home />
                  </Route>
                </Switch>
              </div>
            </Router>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
