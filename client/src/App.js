//  IMPORTS
import { BrowserRouter, Switch, Route } from "react-router-dom";
//  PAGES
import Home from "./components/_Home/Home";
import ExpenseTracker from "./components/_ExpenseTracker/ExpenseTracker";
import PageNotFound from "./components/_PageNotFound/PageNotFound";
//  COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
//  CSS
import './App.css';

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Navbar />
              <Switch>
                  <Route path="/Home" exact component={Home} />
                  <Route path="/Expense-Tracker" exact component={ExpenseTracker} />
                  <Route path="/" exact component={Home} />
                  <Route path="/*" component={PageNotFound} />
              </Switch>
              <Footer />
          </div>
      </BrowserRouter>
  );
}

export default App;
