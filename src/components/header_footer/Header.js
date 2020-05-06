import React, { Component } from "react";
import { AppBar, Toolbar, IconButton, Drawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SideDrawer from "./SideDrawer";

export default class Header extends Component {
  state = {
    drawerOpen: false,
    headerShow: false,
  };
  toggleDrawer = (values) => {
    this.setState({
      drawerOpen: values,
    });
  };
  Onclose = (values) => {
    console.log(values);
    this.toggleDrawer(values);
    console.log(values);
  };
  componentDidMount() {
    console.log("CDM");
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    console.log("Scrolling");
    if (window.scrollY > 0) {
      this.setState({
        headerShow: true,
      });
    } else {
      this.setState({
        headerShow: false,
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <AppBar
          position="fixed"
          style={{
            backgroundColor: this.state.headerShow ? "#2f2f2f" : "transparent",
            boxShadow: "none ",
            padding: "10px 0px",
          }}
        >
          <Toolbar>
            <div className="header_logo">
              <div className="font_righteous header_logo_venue">The Venue</div>
              <div className="header_logo_title">Event</div>
            </div>
            <div className="IconButton">
              <IconButton
                color="inherit"
                aria-label="Menu"
                onClick={() => this.toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </div>
            <SideDrawer open={this.state.drawerOpen} onClose={this.Onclose} />
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}
