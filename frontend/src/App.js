//IMPORT DE CERTAINS elements de la bibliotheque react pour creer une navigation
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "./styles/index.scss";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Singup from "./pages/Singup";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
function App() {
  return (
  //NAVIGATION +chemmin plus component
  <BrowserRouter>
  <Switch>
    {/* Chemin '/' strict comprend contenant  */}
    <Route path="/" exact component={Login} />
    <Route path="/Singup" exact component={Singup} />
    <Route path="/Home" exact component={Home} />
    <Route path="/CreatePost" exact component={CreatePost} />
    <Route path="/Post" exact component={Post} />
    {/* autre routes*/}
    <Route component={NotFound} />
  </Switch>
</BrowserRouter>
  );
}

export default App;
