import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import CreateProfile from './components/profile-form/CreateProfile';
import AddExperience from './components/profile-form/AddExperience';
import AddEducation from './components/profile-form/AddEducation';
import EditProfile from './components/profile-form/EditProfile';
import Profiles from './components/profiles/Profiles';

// Redux
import { Provider } from 'react-redux';
import store from './Store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <section className='container'>
          <Alert />
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/profiles' component={Profiles} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute
              exact
              path='/create-profile'
              component={CreateProfile}
            />
            <PrivateRoute exact path='/edit-profile' component={EditProfile} />
            <PrivateRoute
              exact
              path='/add-experience'
              component={AddExperience}
            />
            <PrivateRoute
              exact
              path='/add-education'
              component={AddEducation}
            />
          </Switch>
        </section>
      </Router>
    </Provider>
  );
};
export default App;
