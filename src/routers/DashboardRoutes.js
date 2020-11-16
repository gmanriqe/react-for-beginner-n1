import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom' // Del mismo React
import { Navbar } from '../components/ui/Navbar'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { DcScreen } from '../components/dc/DcScreen'

export const DashboardRoutes = () => { // DashboardRoutes es mi Funtional Components
    return (
        <>
            <Navbar/>
            <div>
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen }/>
                    <Route exact path="/heroe/:heroeId" component={ HeroScreen }/>
                    <Route exact path="/dc" component={ DcScreen }/>
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}
