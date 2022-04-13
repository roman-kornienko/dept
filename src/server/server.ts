import { createServer } from "miragejs";
import cases from "./data/cases.json";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/cases", () => {
      return cases;
    });
  },
});
