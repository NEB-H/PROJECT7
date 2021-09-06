//IMPORT DE CERTAINS elements de la bibliotheque react pour creer une navigation
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Singup from "./pages/Singup";
function App() {
  return (
  //NAVIGATION +chemmin plus component
  <BrowserRouter>
  <Switch>
    {/* Chemin '/' strict comprend contenant  */}
    <Route path="/" exact component={Login} />
    <Route path="/Singup" exact component={Singup} />
    {/* autre routes*/}
    <Route component={NotFound} />
  </Switch>
</BrowserRouter>
  );
}

export default App;
