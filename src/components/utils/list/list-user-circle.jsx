import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export const ListUserCircle = ({ name = "", userName = "", urlImgae = "" }) => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar alt={name} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          sx={{
            color: "var(--tp-common-black)",
            span: {
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            },
          }}
          primary={name}
          secondary={
            <>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {userName}
              </Typography>
              {/* {" — I'll be in your neighborhood doing errands this…"} */}
            </>
          }
        />
      </ListItem>
    </List>
  );
};
