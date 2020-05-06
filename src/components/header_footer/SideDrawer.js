import React from "react";
import { Drawer, List, ListItem } from "@material-ui/core";
const SideDrawer = (props) => {
  return (
    <div>
      <Drawer
        anchor="right"
        open={props.open}
        onClose={() => props.onClose(false)}
      >
        <List component="nav">
          <ListItem button onClick={() => console.log("Featured")}>
            Event Starts in
          </ListItem>
          <ListItem button onClick={() => console.log("Venue Info")}>
            Venue Info
          </ListItem>
          <ListItem button onClick={() => console.log("Hightlights")}>
            Hightlights
          </ListItem>
          <ListItem button onClick={() => console.log("Pricing")}>
            Pricing
          </ListItem>
          <ListItem button onClick={() => console.log("Location")}>
            Location
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default SideDrawer;
