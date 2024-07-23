import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const SummaryCard = () => {
  return (
    <Card>
    <CardContent>
      <Typography variant="h3" color="text.secondary">
        {1000}
      </Typography>
      <Typography variant="body2">
        {"Daily Average"}
      </Typography>
    </CardContent>
  </Card>
  );
};

export default SummaryCard;
