import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

/* Charge automatiquement la version la plus récente de l'application :
   le fichier Mobinawa_vNN.jsx dont le numéro NN est le plus grand.
   Pour publier une nouvelle version, il suffit de déposer le nouveau
   fichier Mobinawa_vNN.jsx dans le dépôt, sans rien renommer. */
const versions = import.meta.glob("./Mobinawa_v*.jsx");
const numero = (chemin) => parseInt(chemin.match(/_v(\d+)\.jsx$/)[1], 10);
const derniere = Object.keys(versions).sort((a, b) => numero(a) - numero(b)).pop();
const MobinawaApp = lazy(versions[derniere]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={null}>
    <MobinawaApp />
  </Suspense>
);
