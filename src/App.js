import React, { Component } from "react";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Grid, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import TableComponent from "./component/TableComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [{ label: "Oreo", id: 1 }, { label: "Kacang Ijo", id: 2 }],
      suppliers: [
        { label: "Warteg Barokah", id: 1, edit: false },
        { label: "BRI Life", id: 2, edit: false }
      ],
      text: ""
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  edit = index => {
    this.setState(async () => ({
      products: await this.state.products.forEach(e => {
        if (index === e.id) {
          return (e.edit = !e.edit);
        }
      })
    }));
  };

  changeText = text => {
    this.setState({ text: text.text });
  };

  addProduct = e => {
    if (e.keyCode === 13 || e === "Enter") {
      this.setState(prevState => ({
        products: [
          ...prevState.products,
          {
            label: this.state.text,
            id: this.state.products.length + 1,
            edit: false
          }
        ],
        text: ""
      }));
    }
  };

  deleteProduct = index => {
    this.setState(prevState => ({
      products: prevState.products.filter((item, i) => i !== index),
      text: ""
    }));
  };

  updateProduct = (label, index) => e => {
    if (e.keyCode === 13) {
      this.setState(async () => ({
        products: await this.state.products.forEach(e => {
          if (e.id === index) {
            return ((e.label = label), (e.edit = false));
          }
        })
      }));
    }
  };

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Product
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container>
          <TableComponent
            edit={this.edit}
            mystate={this.state}
            deleteProduct={this.deleteProduct}
            addProduct={this.addProduct}
            changeText={this.changeText}
            updateProduct={this.updateProduct}
          />
        </Grid>
      </div>
    );
  }
}

export default App;
