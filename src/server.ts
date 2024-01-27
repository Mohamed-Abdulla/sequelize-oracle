import app from "./app";
import syncDB from "./models";
import logger from "./logger";

const port = process.env.PORT || 5000;

console.log = logger.info.bind(logger);
console.error = logger.error.bind(logger);

const start = async (): Promise<void> => {
  try {
    await syncDB();
    app.listen(port, () => {
      console.log("Server started on port 5000");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();
