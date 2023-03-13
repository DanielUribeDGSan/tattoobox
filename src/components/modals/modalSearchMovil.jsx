import React from "react";
import Drawer from "@mui/material/Drawer";

export const ModalSearchMovil = ({
  modal_id,
  children,
  toggleDrawer,
  state,
}) => {
  return (
    <>
      <Drawer
        anchor={"bottom"}
        open={state["bottom"]}
        onClose={toggleDrawer("bottom", false)}
      >
        <div className="container py-3" style={{ minHeight: "50vh" }}>
          {children}
        </div>
      </Drawer>
    </>
  );
};
