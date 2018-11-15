import * as React from 'react';
import * as RX from 'reactxp';
import { Route, Router, Switch } from "react-router";
import createHistory from "history/createBrowserHistory";


import { MainPanel } from './MainPanel';
import { SecondPanel } from './SecondPanel';
import NoAdminAccess from './NoAdminAccess';

// const styles = {
//     // Standard navigator style should be an object. So we have to disable caching here.
//     navCardStyle: RX.Styles.createViewStyle({
//         backgroundColor: '#f5fcff'
//     }, false)
// };


const history = createHistory();

export class RootViewWithRoutes extends RX.Component<RX.CommonProps, RX.Stateless> {

    componentDidMount() {
    }

    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact={true} path="/" component={MainPanel} />
                    <Route path="/secondPanel" component={SecondPanel} />
                    <Route path="/noAdminAccess" component={NoAdminAccess} />
                </Switch>
            </Router>
        );
    }
}
