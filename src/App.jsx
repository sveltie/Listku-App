import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Dashboard, Register, PrivateRoute, Edit } from './pages';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <PrivateRoute path='/dashboard' exact>
                    <Dashboard />
                </PrivateRoute>
                <Route path='/register'>
                    <Register />
                </Route>
                <Route path='/edit/:id'>
                    <Edit />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;