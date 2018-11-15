// import { GenericModal } from "../Styles";
import * as RX from "reactxp";
import { Icon, IconProps } from "./GenericElements";
// import { media } from "./Generic.SnapPoints";

// export const ModalBodyDiv = styled.div`
//     padding: 12px 24px 24px 24px;
// `;

// export const ModalGamerPic = styled.div`
//     img {
//         height: 100px;
//         width: 100px;
//         border-radius: 50px;
//         border: 2px solid ${props => props.theme.whiteText};
//     }
// `;

// export const UniformPseudoLink = styled.span`
//     color: ${props => props.theme.blueRest} !important;
//     cursor: pointer;
//     &:hover {
//         color: ${props => props.theme.blueHover} !important;
//     }
//     &:active {
//         color: ${props => props.theme.blueActive} !important;
//     }
// `;

// export const UniformTrueLink = styled.a`
//     color: ${props => props.theme.blueRest} !important;
//     &:hover {
//         color: ${props => props.theme.blueHover} !important;
//     }
//     &:active {
//         color: ${props => props.theme.blueActive} !important;
//     }
// `;

// export const EmptyHeader = styled.div`
//     text-align: center;
//     min-height: 100px;
//     padding: 10px;
//     background-color: ${props => props.theme.backgroundThemedOverlay};
//     border-bottom: 1px solid ${props => props.theme.borderSecondary};
// `;

// export const UserSettingsModal = GenericModal.extend`
//     max-width: 480px;

//     .ant-modal-body {
//         height: 100%;
//         overflow: auto;
//         border: 3px solid ${props => props.theme.foregroundOverlayed};
//         padding: 0px;
//     }

//     .ant-modal-close-x {
//         color: ${props => props.theme.whiteText};
//     }

//     .ant-modal-footer {
//         display: none;
//     }

//     //mobile
//     ${media.small`
//         .ant-modal-body {
//             border: none;
//         }
//     `}
// `;

// export const SectionHeader = styled.h3`
//     margin-top: 24px;
// `;

// TK [tokwa]: I need to make ths a separate style, and combine it with Icon?
const LogOutIconStyle = RX.Styles.createViewStyle({
    alignContent: 'center',
    paddingTop: 0,
    paddingRight: 4,
    paddingBottom: 0,
    paddingLeft: 0
});


// I need to pass stuff down to icon
export const LogOutIcon = (props: any) => {
    let logoutIconProps: IconProps = {
        style: LogOutIconStyle,
        type: props.type,
    }

    return (
        Icon(logoutIconProps)
    );
};
// Original
// export const LogOutIcon = styled(Icon)`
//     vertical-align: middle;

//     .Icon {
//         padding: 0 4px 0 0;
//     }
// `;