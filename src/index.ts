import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./config/db";
import { PORT } from "./config/process";

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("Database connected");
    app.listen(PORT);
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error(error);
  }
}

main();
