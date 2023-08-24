import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { worker } from "@uidotdev/react-query-api";

import { QueryClient, QueryClientProvider } from "react-query";

const newQueryClient = new QueryClient();

new Promise((res) => setTimeout(res, 100))
    .then(() =>
        worker.start({
            quiet: true,
            onUnhandledRequest: "bypass",
        })
    )
    .then(() => {
        ReactDOM.render(
            <React.StrictMode>
                <QueryClientProvider client={newQueryClient}>
                    <BrowserRouter>
                        <div className="container">
                            <App />
                        </div>
                    </BrowserRouter>
                </QueryClientProvider>
            </React.StrictMode>,
            document.getElementById("root")
        );
    });

//https://react-query-issue-tracker.ui.dev/
