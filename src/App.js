import logo from './logo.svg';
import './App.css';
import ListSheduleComponent from './components/ListSheduleComponent'
import CreateSheduleComponent from './components/CreateSheduleComponent'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
       <Router>
          <HeaderComponent></HeaderComponent>
          <div className="container">
            <Switch>
              <Route  path="/" exact component={ListSheduleComponent}></Route>
              <Route path="/shedules" component={ListSheduleComponent}></Route>
              <Route path="/add-shedule/:id" component={CreateSheduleComponent}></Route>
              {/* <Route path="/add-employee" component={CreateEmployeeComponent}></Route> */}
              {/* <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route> */}
              <ListSheduleComponent></ListSheduleComponent>
            </Switch> 
          </div>
          <FooterComponent></FooterComponent>
      </Router>
    </div>
  );
}

export default App;
