import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Everything that we have in App.jsx goes into that div root,App.jsx and index.html are connected by main.jsx
// PROPS basically(properties);so the way components pass data to each other,that is data been passed from one components to another
//  and each container (components) can have its own local data that is native data that that is called states
// So there is data that comes from elsewhere which is called props and data that actually stays in the components
//  and can not be accessed by any one else ,its only for that particular components
// EXAMPLES OF UI buttons ,forms,tables,anything can click on.The whole idea why we need react is to create UI.
// HOT DEPLOYMENT; i soon i change the code the UI reflects it.
// Repositry;its a folder that upload your code to
// GIT; It a software that allows you to upload/download/delete/share/solve conflict/sync your code to the cloud automatically without doing it manually
// Dot before git suggesting its a hidden file.Its a configuration file meaning your project is configure to upload to the cloud.
// what is cloud?Anywhere on the internet other than your laptop