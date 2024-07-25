import { format } from "date-fns/format";

// Utility for formattimg dates
export const formatDate = (date: string) => {
    return format(date, "MMM dd, HH:mm");
  };
  