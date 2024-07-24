import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface SummaryCardProps {
  value?: number;
  text: string;
}

const SummaryCard = ({ value, text }: SummaryCardProps) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h3" color="text.secondary">
          {value || 0}
        </Typography>
        <Typography variant="body2">{text}</Typography>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
