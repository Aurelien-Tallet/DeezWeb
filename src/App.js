import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.scss';
import Description from './components/Description/Description';
import Favoris from './components/Favoris/Favoris';
import Search from './components/Search/Search';
import heart from './assets/icon/heart.svg'

function App() {

  return (
    <div className="App">
      <Router>
        <nav>
          <h1 className="title"><Link to="/">deezweb</Link></h1>
          <h2><Link to="/favoris"><img src={heart} /> favoris</Link></h2>
        </nav>
        <Switch>
          <Route exact path='/' component={() => <Search />}></Route>
          <Route path='/favoris' component={() => <Favoris />}></Route>
          <Route path='/album' component={() => <Description type="album" />}></Route>
          <Route path='/artist' component={() => <Description type="artist" />}></Route>
          <Route path='/track' component={() => <Description type="track" />}></Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
