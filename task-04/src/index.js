import React from "react";
import ReactDOM from "react-dom/client";
import ContextProvider from "./Context.jsx";

import App from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<ContextProvider>
<App />
</ContextProvider>
);
