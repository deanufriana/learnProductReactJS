import React, { Component } from "react";
import { TableCell, TextField, TableRow, Button } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";

export default class TableRowComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      text: ""
    };
  }

  label = item => {
    if (item.edit) {
      return (
        <TextField
          defaultValue={item.label}
          onChange={text => this.setState({ text: text.target.value })}
          onKeyDown={this.props.updateProduct(this.state.text, this.props.item.id)}
        />
      );
    } else {
      return item.label;
    }
  };

  render() {
    return (
      <TableRow>
        <TableCell>{this.props.item.id}</TableCell>
        <TableCell> {this.label(this.props.item)} </TableCell>
        <TableCell>
          <Button
            color="secondary"
            variant="contained"
            size="small"
            onClick={() => this.props.deleteProduct(this.props.i)}
          >
            <Delete fontSize="small" />
            Delete
          </Button>
          <Button
            style={{
              backgroundColor: "green",
              color: "white",
              marginLeft: 20
            }}
            variant="contained"
            size="small"
            onClick={() => this.props.edit(this.props.item.id)}
          >
            <Edit fontSize="small" />
            Edit
          </Button>
        </TableCell>
      </TableRow>
    );
  }
}
