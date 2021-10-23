import { ReactElement } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
// import { Switch, Route } from 'react-router-dom'
// import { Route } from 'react-router-dom'

// import HomePage from 'pages/Home'
// import LpTowerPage from 'pages/LpTower'
import MiawPaperPage from 'pages/MiawPaper'
import SayMiawPage from 'pages/SayMiaw'
// import SendMiawPage from 'pages/SendMiaw'
import MintPage from 'pages/Mint'

import { RoutePath } from 'types'

const SwitchPages = (): ReactElement => {
  return (
    <Switch>
    <Redirect exact from="/" to={RoutePath.mint} />
    {/* <Redirect exact from="" to={RoutePath.mint} /> */}
    <Route path={RoutePath.mint} component={MintPage} />
    <Route path={RoutePath.lpTower} component={SayMiawPage} />
    <Route path={RoutePath.say_miaw} component={SayMiawPage} />
    <Route path={RoutePath.miaw_paper} component={MiawPaperPage} />
    </Switch>
    // <Switch>
    //   <Redirect exact from="/" to={RoutePath.mint} />
    //   <Redirect exact from="" to={RoutePath.mint} />
    //   <Route path={RoutePath.mint} component={MintPage} />
    //   <Route path={RoutePath.home} component={HomePage} />
    //   <Route path={RoutePath.lpTower} component={LpTowerPage} />
    //   <Route path={RoutePath.miaw_paper} component={MiawPaperPage} />
    //   <Route path={RoutePath.say_miaw} component={SayMiawPage} />
    //   <Route path={RoutePath.send} component={SendMiawPage} />
    // </Switch>
  )
}
export default SwitchPages
