import './App.css';
import {Route, Switch} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/auth/login" />
          <Route path="/auth/signup" />
          <Route path="/" /> 
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
