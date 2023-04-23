import React, { useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

function SimpleDialog({ onClose, open, title, children }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      {children}
    </Dialog>
  );
}

export default function ModalSm({ open, setOpen, title, children }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <SimpleDialog
        setOpen={setOpen}
        open={open}
        onClose={handleClose}
        title={title}
      >
        {children}
      </SimpleDialog>
    </div>
  );
}
