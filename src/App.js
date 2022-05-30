import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Project from './pages/Project';
import PostDetail from './pages/PostDetail';


function App() {
  return (
    <>
        <header className="">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Project} />
            <Route exact path="/post/:id" component={PostDetail} />
            <Redirect from="*" to="/" />
        </Switch>
        </header>
    </>
  );
}

export default App;
