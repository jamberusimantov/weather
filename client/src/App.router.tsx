import React from 'react'
import { Route, Switch } from 'react-router-dom';
import pages from './pages'


export default function AppRouter(props: any) {
    const { Error, Home, City } = pages

    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/city:query">
                <City />
            </Route>

            <Route >
                <Error />
            </Route>

        </Switch>

    )
}
