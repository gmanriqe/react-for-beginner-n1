// Router principal de la aplicacion
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

// Componentes importados para utilizarlos
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                {/* <Navbar/> */}
                    <Switch>
                        <Route exact path="/login" component={ LoginScreen }/>
                        <Route path="/" component={ DashboardRoutes }/>
                    </Switch>
            </div>
        </Router>
    );
}
