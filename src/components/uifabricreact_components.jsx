import React, { Component } from "react";
import Pickers from "./pickers";
import ListC from "./lists";
import MenuNav from "./menus";
import Surfaces from "./surfaces";
import {
  PrimaryButton,
  DefaultButton,
  CompoundButton,
  CommandBarButton,
  Checkbox,
  ChoiceGroup,
  ComboBox,
  Label,
  TextField,
  Link,
  Rating,
  SearchBox,
  Slider,
  Toggle
} from "office-ui-fabric-react/lib/";
import { getId } from "office-ui-fabric-react/lib/Utilities";

class UifabricComponents extends Component {
  state = {
    rating: 0
  };
  render() {
    const textFieldId = getId("anInput");
    const maxrating = 5;

    return (
      <React.Fragment>
        <MenuNav />
        <div>
          <PrimaryButton onClick={() => this.handleOnclick()} className="m-2">
            I am a button
          </PrimaryButton>
        </div>
        <div className="m-2">
          <DefaultButton>DefaultButton</DefaultButton>
        </div>

        <div>
          <CompoundButton
            primary={true}
            secondaryText="You can create a new account here."
          >
            Create account
          </CompoundButton>
        </div>
        <div>
          <CommandBarButton
            data-automation-id="test"
            iconProps={{ iconName: "Add" }}
            text="Create account"
            split={true}
            menuProps={{
              items: [
                {
                  key: "emailMessage",
                  name: "Email message",
                  icon: "Mail"
                },
                {
                  key: "calendarEvent",
                  name: "Calendar event",
                  icon: "Calendar"
                }
              ]
            }}
          />
          <CommandBarButton
            data-automation-id="test2"
            iconProps={{ iconName: "Mail" }}
            text="Send Mail"
          />
        </div>
        <h4>Checkbox</h4>
        <div className="m-2">
          <Checkbox label="standard checkbox" />
        </div>
        <div>
          <ChoiceGroup
            className="defaultChoiceGroup"
            defaultSelectedKey="B"
            options={[
              {
                key: "A",
                text: "Option A",
                "data-automation-id": "auto1"
              },

              {
                key: "C",
                text: "Option C"
              },
              {
                key: "D",
                text: "Option D",
                disabled: true
              }
            ]}
            label="Pick one"
            required={true}
          />
        </div>
        <div>
          <h4>ComboBox</h4>
          <ComboBox
            className="ms-comboBox"
            style={{ maxWidth: "300px" }}
            multiSelect
            defaultSelectedKey={["J", "G"]}
            options={[
              { key: "G", text: "Option G" },
              { key: "H", text: "Option H" },
              { key: "I", text: "Option I" },
              { key: "J", text: "Option J" }
            ]}
          />
        </div>

        <div>
          <Label>I'm a Label</Label>
          <Label disabled={true}>I'm a disabled Label</Label>
          <Label required={true}>I'm a required Label</Label>
          <Label htmlFor={textFieldId}>A Label for An Input</Label>
          <TextField
            className="TextField"
            style={{ width: "300px" }}
            id={textFieldId}
          />
        </div>
        <div>
          {" "}
          <span>When a link has an href, </span>
          <Link href="http://dev.office.com/fabric/components/link">
            it renders as an anchor tag.
          </Link>
        </div>

        <h4>Ratings</h4>
        <div className="ms-RatingButtonControlledExample">
          <Rating
            rating={this.state.rating}
            max={5}
            readOnly={true}
            allowZeroStars={true}
            getAriaLabel={this._getRatingComponentAriaLabel}
            ariaLabelFormat={"{0} of {1} stars selected"}
          />
          <PrimaryButton
            text={
              "Click to change rating to " + (maxrating - this.state.rating)
            }
            onClick={e => {
              if (this.state.rating === 0) {
                this.setState({ rating: 5 });
              } else {
                this.setState({ rating: 0 });
              }
            }}
          />
        </div>
        <div>
          <h4>Search</h4>{" "}
          <SearchBox
            styles={{ root: { width: 200 } }}
            placeholder="Search"
            onEscape={ev => {
              console.log("Custom onEscape Called");
            }}
            onClear={ev => {
              console.log("Custom onClear Called");
            }}
            onChange={(_, newValue) =>
              console.log("SearchBox onChange fired: " + newValue)
            }
            onSearch={newValue =>
              console.log("SearchBox onSearch fired: " + newValue)
            }
            onFocus={() => console.log("onFocus called")}
            onBlur={() => console.log("onBlur called")}
          />
        </div>
        <div>
          <h4>Slider</h4>

          <Slider
            label="Example with formatted value"
            max={100}
            showValue={true}
          />
        </div>
        <div>
          <h4>Slider</h4>
          <div style={{ padding: "2px" }}>
            <Toggle
              defaultChecked={true}
              label="Enabled and checked"
              onText="On"
              offText="Off"
              onFocus={() => console.log("onFocus called")}
              onBlur={() => console.log("onBlur called")}
              onChange={this._onChange}
            />
          </div>
        </div>
        <Pickers />
        <h5>test added here</h5>
        <ListC />
        <Surfaces />
      </React.Fragment>
    );
  }
  //   <Pickers />
  handleOnclick = () => {
    alert("primary button clicked");
  };
  _getRatingComponentAriaLabel(rating, maxRating) {
    return `Rating value is ${rating} of ${maxRating}`;
  }
}

export default UifabricComponents;
