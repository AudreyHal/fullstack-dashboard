import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  styled,
} from "@mui/material";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import AddMetricsForm from "./AddMetricsForm";

interface AddMetricsModalProps {
  open: boolean;
  handleClose?: () => void;
}

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: `${theme.spacing(4)} ${theme.spacing(2)}`,
    width: 400,
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const AddMetricsModal = ({ open, handleClose }: AddMetricsModalProps) => {
  return (
    <StyledDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Add New Metrics
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <AddMetricsForm />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" autoFocus onClick={handleClose}>
          Create
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default AddMetricsModal;
