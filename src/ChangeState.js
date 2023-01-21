import React from "react";

class ChangeState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpText: "default Text",
      userData: "",
    };
    this.inputClick = this.inputClick.bind(this);
  }
  // helpText = "help text";
  render() {
    return (
      <div>
        <h2>{this.state.userData}</h2>
        <input
          type="text"
          // value={this.state.helpText}
          onChange={(event) => this.setState({ userData: event.target.value })}
          // onClick={this.inputClick}
        />
      </div>
    );
  }
  inputClick() {
    // this.helpText = "changed";
    // this.state.helpText = "help text";
    this.setState({ helpText: "Changed" });
    console.log("Click");
  }
}
export default ChangeState;
