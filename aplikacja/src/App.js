import './App.css';
import Banner from './component/Banner.tsx';
import Card from './component/Card.tsx';
import Contain from './component/Contain.tsx';
import Footer from './component/Footer.tsx';

import Sign from './component/Sign.tsx';
import Regist from './component/Regist.tsx';
import Detail from './component/Detail.tsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
          <div>
            <Switch>
            <Route path="/details">
                 <Details />
                </Route>
            <Route path="/signup">
                 <Signup />
               </Route>
              <Route path="/add">
                <Add />
              </Route>
              <Route path="/signin">
                <Signin />
              </Route>
              <Route path="/">
                <Home />
              </Route>
           </Switch>
          </div>
        </Router>
  );
}

function Home() {
  return  <div className="App" >
                <Banner/>
                     <Contain/>
                     <Contain/>
                 <Footer/>
             </div>;
}

function Add() {
  return <div className="App" >
                  <Banner/>
                     <h2>Add</h2>
               </div>;
}

function Signin() {
    return <div className="App" >
                    <Banner/>
                    <h2>Logowanie</h2>
                    <Sign/>
                 </div>;
}

function Signup() {
    return <div className="App" >
                    <Banner/>
                       <h2>Rejestracja</h2>
                    <Regist/>
                 </div>;
}

function Details() {
    return <div className="App" >
                    <Banner/>
                        <Detail/>
                       <h2>Details</h2>
                 </div>;
}

export default App;
