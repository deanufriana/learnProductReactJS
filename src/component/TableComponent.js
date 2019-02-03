import React, { Component } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TextField,
  Button,
  Grid
} from "@material-ui/core";
import TableRowComponent from "./TableRowComponent";

export default class TableComponent extends Component {
  render() {
    return (
      <Grid container>
        <Grid item>
          <Table style={{ marginLeft: 20, marginBottom: 10 }}>
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>product</TableCell>
                <TableCell>aksi</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.mystate.products.map((item, i) => (
                <TableRowComponent key={i}
                  i={i}
                  mystate={this.props.mystate}
                  {...this.props}
                  item={item}
                />
              ))}
            </TableBody>
          </Table>

          <Grid container style={{ marginLeft: 20 }} spacing={16}>
            <Grid item style={{ marginBottom: 30 }}>
              <TextField
                onKeyDown={this.props.addProduct}
                placeholder="Write Product"
                onChange={text =>
                  this.props.changeText({ text: text.target.value })
                }
                value={this.props.mystate.text}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => this.props.addProduct("Enter")}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
