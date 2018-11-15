import * as React from "react";
import * as RX from "reactxp";
// import { connect } from "react-redux";
// import { withCookies, Cookies } from "react-cookie";
// import { AuthActions, ReduxState, clubsRedux } from "@xbox/social-redux";
// import { Localize } from "../common/translation/Localize";
import { Glyphs } from "./Generic.Icons";
import { LogOutIcon } from "./UserSettingsModal.Styles";
// import AuthValidator from "./AuthValidator";

// const CenteredDiv = styled.div`
//     display: flex;    // <== don't need in RX.Styles.
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;
// `;


const styles = {
    centeredDiv: RX.Styles.createViewStyle({
        height: 100,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }),
}

type INoAccessProps = NoAccessProps & NoAccessDispatchProps;

interface NoAccessProps {
    // cookies: Cookies;
}

interface NoAccessDispatchProps {
    // signOut: (cookies: Cookies) => void;
}

class NoAdminAccess extends RX.Component<INoAccessProps> {

    constructor(props: INoAccessProps) {
        super(props);
    }

    onSignOut = () => {
        console.log("Pressed signed out");
        // this.props.signOut(this.props.cookies);
    }

    render() {
        return (
            <RX.View style={styles.centeredDiv}>
                <h1>Access is Denied</h1>
                <h2>Accees is Denied message</h2>
                {/* <RX.Button type="danger" onClick={this.onSignOut}> */}
                <RX.Button onPress={this.onSignOut}>
                    <LogOutIcon type={Glyphs.SignOut} onClick={this.onSignOut} />Sign out
                </RX.Button>
            </RX.View>
        );
    }
}

export default NoAdminAccess;

// const mapStateToProps = (state: ReduxState): any => {
//     return {
//     };
// };

// const mapDispatchToProps = (dispatch: any): NoAccessDispatchProps => {
//     return {
//         signOut: (cookies: Cookies) => {
//             dispatch(clubsRedux.actions.clearState());
//             dispatch(AuthActions.signOut(cookies));
//         }
//     };
// };

// export default AuthValidator(withCookies(connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(NoAdminAccess) as any));
