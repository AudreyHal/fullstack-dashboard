export type LoginInputType = {
  username: string;
  password: string;
};

export type MetricsInputType = {
  name: string;
  value: string;
};

export type AveragesDataResponseType = {
  day: number;
  month: number;
  year: number;
};

export type ErrorResponse = {
  response: {
    data: {
      message: string;
    };
  };
};
