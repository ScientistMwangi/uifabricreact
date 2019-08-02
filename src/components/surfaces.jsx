import React, { Component } from "react";
import {
  Callout,
  TooltipHost,
  DefaultButton,
  Link,
  Panel,
  PanelType,
  ChoiceGroup
} from "office-ui-fabric-react/lib";
import {
  getTheme,
  FontWeights,
  mergeStyleSets
} from "office-ui-fabric-react/lib/Styling";

class Surfaces extends Component {
  state = { isCalloutVisible: false };

  render() {
    const theme = getTheme();
    const styles = mergeStyleSets({
      buttonArea: {
        verticalAlign: "top",
        display: "inline-block",
        textAlign: "center"
      },
      callout: {
        maxWidth: 300
      },
      header: {
        padding: "18px 24px 12px"
      },
      title: [
        theme.fonts.xLarge,
        {
          margin: 0,
          color: theme.palette.neutralPrimary,
          fontWeight: FontWeights.semilight
        }
      ],
      inner: {
        height: "100%",
        padding: "0 24px 20px"
      },
      actions: {
        position: "relative",
        marginTop: 20,
        width: "100%",
        whiteSpace: "nowrap"
      },
      link: [
        theme.fonts.medium,
        {
          color: theme.palette.neutralPrimary
        }
      ]
    });

    const { isCalloutVisible } = this.state;
    //const  _menuButtonElement: HTMLElement | null;

    return (
      <React.Fragment>
        <div>
          <h4>Surfaces</h4>
          <div className={styles.buttonArea} ref={this._menuButtonElement}>
            <DefaultButton
              onClick={this._onShowMenuClicked}
              text={isCalloutVisible ? "Hide callout" : "Show callout"}
            />
          </div>
          <Callout
            className="ms-CalloutExample-callout"
            ariaLabelledBy={this._labelId}
            ariaDescribedBy={this._descriptionId}
            role="alertdialog"
            gapSpace={0}
            target={this._menuButtonElement}
            onDismiss={this._onCalloutDismiss}
            setInitialFocus={true}
            hidden={!false}
          >
            <div className="ms-CalloutExample-header">
              <p className="ms-CalloutExample-title" id={this._labelId}>
                All of your favorite people
              </p>
            </div>
            <div className="ms-CalloutExample-inner">
              <div className="ms-CalloutExample-content">
                <p className="ms-CalloutExample-subText" id={2}>
                  Message body is optional. If help documentation is available,
                  consider adding a link to learn more at the bottom.
                </p>
              </div>
              <div className="ms-CalloutExample-actions">
                <Link
                  className="ms-CalloutExample-link"
                  href="http://microsoft.com"
                  target="_blank"
                >
                  Go to microsoft
                </Link>
              </div>
            </div>
          </Callout>
        </div>{" "}
        <div>
          <div>
            <br />
            <br />
            <TooltipHost
              content="This is the tooltip"
              id={this._hostId}
              calloutProps={{ gapSpace: 0 }}
            >
              <DefaultButton aria-labelledby={this._hostId}>
                Hover Over Me
              </DefaultButton>
            </TooltipHost>
          </div>
          <br />
          <br />
          <div>
            <DefaultButton
              secondaryText="Opens the Sample Panel"
              onClick={this._showPanel}
              text="Open Panel"
            />
            <Panel
              isOpen={this.state.showPanel}
              type={PanelType.smallFixedFar}
              onDismiss={this._hidePanel}
              headerText="Panel - Small, right-aligned, fixed, with footer"
              closeButtonAriaLabel="Close"
              onRenderFooterContent={this._onRenderFooterContent}
            >
              <ChoiceGroup
                options={[
                  {
                    key: "A",
                    text: "Option A"
                  },
                  {
                    key: "B",
                    text: "Option B",
                    checked: true
                  },
                  {
                    key: "C",
                    text: "Option C",
                    disabled: true
                  },
                  {
                    key: "D",
                    text: "Option D",
                    checked: true,
                    disabled: true
                  }
                ]}
                label="Pick one"
                required={true}
              />
            </Panel>
          </div>
        </div>
      </React.Fragment>
    );
  }

  _onShowMenuClicked = () => {
    this.setState({
      isCalloutVisible: !this.state.isCalloutVisible
    });
  };

  _onCalloutDismiss = () => {
    this.setState({
      isCalloutVisible: false
    });
  };

  _showPanel = () => {
    this.setState({ showPanel: true });
  };

  _hidePanel = () => {
    this.setState({ showPanel: false });
  };
}

export default Surfaces;
