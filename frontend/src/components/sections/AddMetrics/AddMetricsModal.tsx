import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";

interface AddMetricsModalProps {
  open: boolean;
  handleClose?: () => void;
}

const AddMetricsModal = ({ open, handleClose }: AddMetricsModalProps) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    // reset(); // Reset the form after submission
    // handleClose(); // Close the dialog after submission
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add a New Metric</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            {...register("name", { required: true })}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Value"
            {...register("value", { required: true })}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddMetricsModal;
