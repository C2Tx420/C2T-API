import { interiorRouter } from "./interior/interior.route.js";

export const initRoutes = (app) => {
  app.use("/interior", interiorRouter);
};
