
import './App.css';
import Footer from './Componenet/Layouts/Footer';
import Header from './Componenet/Layouts/Header';
import Stage1 from './Componenet/Dashboard/Stage1';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CompaniesPage from "./Componenet/CompaniesPage";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Stage1} />
        <Route path="/companies" component={CompaniesPage} />
        <Route path="/dataRequest:id" component={Stage1} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
