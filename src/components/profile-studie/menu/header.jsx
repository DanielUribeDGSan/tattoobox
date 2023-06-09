import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

export const Header = () => {
  return (
    <div className="tp-profile-header mt-4 p-3">
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            data-bs-toggle="modal"
            data-bs-target="#uploadTattooModal"
            sx={{ color: "var(--tp-common-black)" }}
            primary="Subir tatuaje"
            secondary="Comparte tu trabajo"
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            sx={{ color: "var(--tp-common-black)" }}
            primary="Work"
            secondary="Jan 7, 2014"
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            sx={{ color: "var(--tp-common-black)" }}
            primary="Vacation"
            secondary="July 20, 2014"
          />
        </ListItem>
      </List>
    </div>
  );
};
