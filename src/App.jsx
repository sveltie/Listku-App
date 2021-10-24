import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Dashboard, Register, PrivateRoute, Edit, Error } from './pages';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>

                {/* HOME PAGE */}
                <Route path='/' exact>
                    <Home />
                </Route>
                
                {/* DASHBOARD PAGE */}
                <PrivateRoute path='/dashboard' exact>
                    <Dashboard />
                </PrivateRoute>

                {/* REGISTER PAGE */}
                <Route path='/register'>
                    <Register />
                </Route>

                {/* EDIT PANEL PAGE */}
                <Route path='/edit/:id'>
                    <Edit />
                </Route>

                {/* ERROR PAGE */}
                <Route path='*'>
                    <Error />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;