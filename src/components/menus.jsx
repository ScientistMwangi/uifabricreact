import React, { Component } from "react";
import {
  Breadcrumb,
  IBreadcrumbItem,
  DefaultButton,
  ContextualMenuItemType,
  Nav
} from "office-ui-fabric-react";
class MenuNav extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div style={{ display: "inline-block" }}>
          <h4>Menus and Nav Bars</h4>
          <Breadcrumb
            items={[
              {
                text: "Files",
                key: "Files",
                onClick: this._onBreadcrumbItemClicked
              },
              {
                text: "This is folder 1",
                key: "f1",
                onClick: this._onBreadcrumbItemClicked
              },
              {
                text: "This is folder 2",
                key: "f2",
                onClick: this._onBreadcrumbItemClicked
              },
              {
                text: "This is folder 3",
                key: "f3",
                onClick: this._onBreadcrumbItemClicked
              },
              {
                text: "This is folder 4",
                key: "f4",
                onClick: this._onBreadcrumbItemClicked
              },
              {
                text: "This is folder 5",
                key: "f5",
                onClick: this._onBreadcrumbItemClicked,
                isCurrentItem: true
              }
            ]}
            // Returning undefined to OnReduceData tells the breadcrumb not to shrink
            onReduceData={this._returnUndefined}
            maxDisplayedItems={3}
            ariaLabel={"Breadcrumb with static width"}
            overflowAriaLabel={"More items"}
          />
        </div>

        <div>
          <DefaultButton
            text="Click for ContextualMenu"
            menuProps={{
              shouldFocusOnMount: true,
              subMenuHoverDelay: this.state.hoverDelay,
              items: [
                {
                  key: "newItem",
                  subMenuProps: {
                    items: [
                      {
                        key: "emailMessage",
                        text: "Email message",
                        title: "Create an email"
                      },
                      {
                        key: "calendarEvent",
                        text: "Calendar event",
                        title: "Create a calendar event"
                      }
                    ]
                  },
                  href: "https://bing.com",
                  text: "New",
                  target: "_blank"
                },
                {
                  key: "share",
                  subMenuProps: {
                    items: [
                      {
                        key: "sharetotwitter",
                        text: "Share to Twitter"
                      },
                      {
                        key: "sharetofacebook",
                        text: "Share to Facebook"
                      },
                      {
                        key: "sharetoemail",
                        text: "Share to Email",
                        subMenuProps: {
                          items: [
                            {
                              key: "sharetooutlook_1",
                              text: "Share to Outlook",
                              title: "Share to Outlook"
                            },
                            {
                              key: "sharetogmail_1",
                              text: "Share to Gmail",
                              title: "Share to Gmail"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  text: "Share"
                },
                {
                  key: "shareSplit",
                  split: true,
                  "aria-roledescription": "split button",
                  subMenuProps: {
                    items: [
                      {
                        key: "sharetotwittersplit",
                        text: "Share to Twitter"
                      },
                      {
                        key: "sharetofacebooksplit",
                        text: "Share to Facebook"
                      },
                      {
                        key: "sharetoemailsplit",
                        text: "Share to Email",
                        subMenuProps: {
                          items: [
                            {
                              key: "sharetooutlooksplit_1",
                              text: "Share to Outlook",
                              title: "Share to Outlook"
                            },
                            {
                              key: "sharetogmailsplit_1",
                              text: "Share to Gmail",
                              title: "Share to Gmail"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  text: "Share w/ Split"
                }
              ]
            }}
          />
          <div>
            <h4>Nav Bar</h4>
            <Nav
              onLinkClick={this._onLinkClick()}
              selectedKey="key3"
              expandButtonAriaLabel="Expand or collapse"
              styles={{
                root: {
                  width: 208,
                  height: 350,
                  boxSizing: "border-box",
                  border: "1px solid #eee",
                  overflowY: "auto"
                }
              }}
              groups={[
                {
                  links: [
                    {
                      name: "Home",
                      url: "http://example.com",
                      links: [
                        {
                          name: "Activity",
                          url: "http://msn.com",
                          key: "key1",
                          target: "_blank"
                        },
                        {
                          name: "MSN",
                          url: "http://msn.com",
                          disabled: true,
                          key: "key2",
                          target: "_blank"
                        }
                      ],
                      isExpanded: true
                    },
                    {
                      name: "Documents",
                      url: "http://example.com",
                      key: "key3",
                      isExpanded: true,
                      target: "_blank"
                    },
                    {
                      name: "Pages",
                      url: "http://msn.com",
                      key: "key4",
                      target: "_blank"
                    },
                    {
                      name: "Notebook",
                      url: "http://msn.com",
                      key: "key5",
                      disabled: true
                    },
                    {
                      name: "Communication and Media",
                      url: "http://msn.com",
                      key: "key6",
                      target: "_blank"
                    },
                    {
                      name: "News",
                      url: "http://cnn.com",
                      icon: "News",
                      key: "key7",
                      target: "_blank"
                    }
                  ]
                }
              ]}
            />
          </div>
          <br />
          <br />
          <br />
        </div>
      </React.Fragment>
    );
  }

  _onBreadcrumbItemClicked = (ev, item) => {
    console.log(`Breadcrumb item with key "${item.key}" has been clicked.`);
  };

  _returnUndefined() {
    return undefined;
  }
  _onLinkClick = () => {
    //alert("Clicked");
  };
}

export default MenuNav;
