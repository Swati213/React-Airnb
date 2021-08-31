
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import SearchDisplay from './SearchDisplay';

function App() {
  return (
    
     <Router>
     <Header/>
     <Switch>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route exact path='/search'>
<SearchDisplay/>
</Route>

     </Switch>
       <Footer/>
     </Router>
    
      );
}

export default App;
