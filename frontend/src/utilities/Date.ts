import { format } from "date-fns/format";

export const formatDate = (date: string) => {
    return format(date, "MMM dd, HH:mm");
  };
  