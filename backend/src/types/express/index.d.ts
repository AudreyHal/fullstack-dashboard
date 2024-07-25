

export {}

// extends Express.js default Request type
declare global {
  namespace Express {
    export interface Request {
      user?: any; 
    }
}
}