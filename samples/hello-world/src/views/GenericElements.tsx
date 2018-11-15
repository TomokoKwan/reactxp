import * as React from "react";
// import { Button } from "antd";
import * as RX from "reactxp";

import * as gs from "./Generic.Styles";
// import * as GlobalStyles from "../containers/Styles";
import { Glyphs } from "./Generic.Icons";
import { StyleRuleSetRecursive, ViewStyle } from 'reactxp/dist/common/Types';
// import { Localize } from "./translation/Localize";
// import { telemetryService } from "../index";
// import { StretchWidthContainer } from "../components/feedtools/FeedTools.Styles";

// interface GenericErrorMessageProps {
//     errorMessage?: string;
//     showError?: boolean;
//     style?: React.CSSProperties;
// }

// interface GenericModalFooterProps extends GenericErrorMessageProps {
//     onOk: () => void;
//     onCancel: () => void;
//     okText?: JSX.Element;
//     disableOK?: boolean;
// }

// interface GenericEmptyStateProps {
//     icon?: Glyphs;
//     message: string;
//     subTitle?: string;
//     gutters?: any;
//     style?: React.CSSProperties;
// }

export interface IconProps {
    type: Glyphs;
    className?: string;
    onClick?: React.MouseEventHandler<any>;
    style?: StyleRuleSetRecursive<ViewStyle>;
}

// interface IconFromCodeProps {
//     className?: string;
//     onClick?: React.MouseEventHandler<any>;
//     style?: React.CSSProperties;
//     value: string;
// }

// TK TODO:  no class name... props.className not applied
export const Icon = (props: IconProps) => {
    return (
        <RX.View style={props.style} onPress={props.onClick}>
            <RX.Text style={gs.XboxIcon}>{props.type}</RX.Text>
                {/* <gs.XboxIcon className="Icon">{props.type}</gs.XboxIcon> */}
        </RX.View>
    );
};

// export const IconFromCode = (props: IconFromCodeProps) => {
//     return (
//         <span className={props.className} style={props.style} onClick={props.onClick}>
//             <gs.XboxIcon>{props.value}</gs.XboxIcon>
//         </span>
//     );
// };

// export const GenericDisplayMode = (isVisible: boolean | undefined) => {
//     return isVisible ? "block" : "none";
// };

// export const GenericLoading = (props: any) => {
//     return (
//         <StretchWidthContainer style={{textAlign: "center"}}>
//             <gs.InfiniteSpinnerSpan className="fa fa-spinner fa-pulse fa-fw" />
//         </StretchWidthContainer>
//     );
// };

// export const GenericLoadingFlexDiv = (props: any) => {
//     return (
//         <div style={{flex: "auto", textAlign: "center"}}>
//             <gs.InfiniteSpinnerSpan className="fa fa-spinner fa-pulse fa-fw" />
//         </div>
//     );
// };

// export const GenericErrorMessage: React.SFC<GenericErrorMessageProps> = props => {
//     return (
//         <gs.ErrorDiv style={{ display: GenericDisplayMode(props.showError) }}>
//             <div style={props.style}>
//                 <Icon type={Glyphs.Warning}/>
//                 <span style={{verticalAlign: "top"}}>{props.errorMessage}</span>
//             </div>
//         </gs.ErrorDiv>
//     );
// };

// export class GenericModalFooter extends React.Component<GenericModalFooterProps> {
//     constructor(props: any) {
//         super(props);
//     }

//     render() {
//         let okText = this.props.okText ? this.props.okText : Localize("generic.submit");

//         return [(
//             <Button key="back" onClick={this.props.onCancel}>
//                 {Localize("generic.cancel")}
//             </Button>
//         ), (
//             <Button key="submit" type="primary" onClick={this.props.onOk} disabled={this.props.disableOK}>
//                 {okText}
//             </Button>
//         ),
//         <GenericErrorMessage key="error" {...this.props} />
//         ];
//     }
// }

// export const GenericEmptyState = (props: GenericEmptyStateProps) => {
//     let actualIcon = props.icon ? props.icon : Glyphs.NoContent;
//     return (
//         <GlobalStyles.EmptyStateContainer className="GenericEmptyState text-center" style={props.style}>
//             <div style={{padding: "15px"}}>
//                 <div><GlobalStyles.EmptyStateTitle><Icon type={actualIcon} /></GlobalStyles.EmptyStateTitle></div>
//                 <div><GlobalStyles.EmptyStateTitle>{props.message}</GlobalStyles.EmptyStateTitle></div>
//                 <div><GlobalStyles.EmptyStateSubTitle>{props.subTitle}</GlobalStyles.EmptyStateSubTitle></div>
//             </div>
//         </GlobalStyles.EmptyStateContainer>
//     );
// };

// export const GenericEmptyPage = () => {
//     return (
//         <gs.EmptyPageContainer>{Localize("generic.emptyPage")}</gs.EmptyPageContainer>
//     );
// };

// interface GenericVideoControlsProps {
//     downloadUri?: string;
//     posterUrl?: string;
//     maxWidth?: number;
//     maxHeight?: number;
//     onload?: () => void;
// }

// export class GenericVideoPlayer extends React.Component<GenericVideoControlsProps, { videoActivated: boolean }> {
//     constructor(props: any) {
//         super(props);
//         this.state = {
//             videoActivated: false
//         };
//     }

//     activateVideo = (e: any) => {
//         if (this.props.downloadUri) {
//             telemetryService.trackEvent("VideoActivated", { "downloadUri": this.props.downloadUri });
//             this.setState({
//                 videoActivated: true
//             });
//             e.stopPropagation();
//         }
//     }

//     render() {
//         let maxWidth, maxHeight = "inherit";
//         if (this.props.maxWidth ) {
//             maxWidth = this.props.maxWidth + "px";
//             maxHeight = Math.floor(this.props.maxWidth / 1.777) + "px";
//         } else if (this.props.maxHeight ) {
//             maxHeight = this.props.maxHeight + "px";
//             maxWidth = Math.floor(this.props.maxHeight * 1.777) + "px";
//         }

//         return (
//             <gs.VideoWrapper className="GenericVideoPlayer" style={{maxWidth, maxHeight}}>
//                 {!this.state.videoActivated && <gs.VideoPoster src={this.props.posterUrl}/>}
//                 {this.state.videoActivated &&
//                     <gs.VideoElement
//                         onClick={(e) => e.stopPropagation()}
//                         autoPlay={true}
//                         controls={this.state.videoActivated}
//                         controlsList="nodownload"
//                         poster={this.props.posterUrl || "/video-thumbnail-unavailable.png"}
//                         preload="metadata"
//                         src={this.props.downloadUri}
//                     />
//                 }
//                 <gs.CenteredRoundButton className={`${this.state.videoActivated ? "hidden" : ""}`} onClick={this.activateVideo} type="button">
//                     <Icon type={Glyphs.Arrow2RightSolid} />
//                 </gs.CenteredRoundButton>
//             </gs.VideoWrapper>
//         );
//     }

