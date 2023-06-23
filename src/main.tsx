import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { ConversionRate } from "modules/CurrencyConversions/index.ts";

const store = new ConversionRate();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App conversionRate={store} />
);
