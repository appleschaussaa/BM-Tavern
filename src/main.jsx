import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App
        // minwidth="xl"
            sx={{
                // minHeight: "100%",
                // minWidth: "100%",
                // m: 0,
            }}
        />
    </React.StrictMode>
);