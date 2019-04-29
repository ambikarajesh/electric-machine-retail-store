import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Layout from './hoc/Layout';
import Home from './components/Home';
import Register_Login from './components/Register_Login';
import Register from './components/Register';
const Routes = () => {
  return (
    <Layout>
        <Switch>
        <Route path='/register_login' exact component={Register_Login}/>
        <Route path='/register' exact component={Register}/>
            <Route path='/' exact component={Home}/>
        </Switch>
    </Layout>
    
  );
}
    
export default Routes;
