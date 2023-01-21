import React from "react";
class Header extends React.Component {
  render() {
    return <header>Header {this.props.title}</header>;
  }
}

// class App extends React.Component {
//   helpText = "help text";
//   render() {
//     return (
//       <div className="name">
//         <Header title="title" />
//         <h1>{this.helpText}</h1>
//         <input placeholder={this.helpText} onClick={this.inputClick}></input>
//         <p>{this.helpText == "help text" ? "Yes" : "No"}</p>
//       </div>
//     );
//   }
//   inputClick() {
//     console.log("Click");
//   }
// }

export default Header;
