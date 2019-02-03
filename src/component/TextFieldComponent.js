import React, { Component } from "react";
import { TextField } from "@material-ui/core";

export default class TextFieldComponent extends Component {

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <TextField
        label={this.props.name}
        select
        value={this.props[this.props.name]}
        onChange={this.handleChange(this.props.name)}
        SelectProps={{
          native: true
        }}
      >
        {this.props.mystate.map((item, i) => (
          <option key={item.id} value={item.id}>
            {item.label}
          </option>
        ))}
      </TextField>
    );
  }
}
