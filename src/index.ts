import { app } from "@/server";

import dotenv from "dotenv";

dotenv.config();

app.listen(process.env.PORT, () => {
  const { NODE_ENV, HOST, PORT } = process.env;
  console.log(`Server (${NODE_ENV}) running on port http://${HOST}:${PORT}`);
});
