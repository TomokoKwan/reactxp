import * as React from 'react';
import * as RX from 'reactxp';
import { DEBUG, DEV	} from './config';
import { RootViewWithRoutes } from './views/RootViewWithRoutes';

class App {
    init() {
        RX.App.initialize(DEBUG, DEV);
        RX.UserInterface.setMainView(this._renderRootView());
    }

    private _renderRootView() {
        return (
            <RootViewWithRoutes />
        );
    }
}

export default new App();
