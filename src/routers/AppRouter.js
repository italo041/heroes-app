import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { AuthContext } from "../auth/AuthContext";


export const AppRouter = () => {

  const { user: { logged } } = useContext(AuthContext);

  return (
    <Router basename="/heroes-app">
      <div>  
        <Switch> 
            <PublicRoute  ba
              exact path="/login" 
              component={ LoginScreen } 
              isAuthenticated={ logged }
            />
            <PrivateRoute 
                path="/" 
                component={ DashboardRoutes }
                isAuthenticated={ logged }
             />
        </Switch>
      </div>
    </Router>
  );
};
