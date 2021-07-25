import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './view/pages/Home';
import Login from './view/pages/Login';
import AddProdutos from './view/pages/AddProdutos';
import AddClientes from './view/pages/AddClientes';
import ViewClientes from './view/pages/ViewClientes';
import ViewProdutos from './view/pages/ViewProdutos';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/addProdutos" component={AddProdutos} />
                <Route path="/addClientes" component={AddClientes} />
                <Route path="/viewClientes" component={ViewClientes} />
                <Route path="/viewProdutos" component={ViewProdutos} />
            </Switch>
        </BrowserRouter>
    )
}