import { metricsQueryKeys } from "@/src/hooks/react-query/Metrics/metricsQueryKeys";
import useAddMetricsMutation from "@/src/hooks/react-query/Metrics/mutations/useAddMetricsMutation";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface AddMetricsModalProps {
  open: boolean;
  handleClose?: () => void;
}

{
  /**
   * Modal component containing form to add new metrics.
   * @component
   */
}
const AddMetricsModal = ({ open, handleClose }: AddMetricsModalProps) => {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm();
  const addMetricsMutation = useAddMetricsMutation();

  const onSubmit = (data: any) => {
    addMetricsMutation.mutate(data, {
      onSuccess: () => {
        // Invalidate and refetch related queries
        queryClient.invalidateQueries({ queryKey: metricsQueryKeys.all() });
        toast.success("Metric added succesfully");
        handleClose?.(); // Close the dialog after submission
        reset(); // Reset the form after submission
      },
    });
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
