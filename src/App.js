import React, { Suspense } from "react";
import logo from "./logo.svg";
import { useTranslation } from "react-i18next";
import "./App.css";

function Welcome() {
  const { t, i18n } = useTranslation(['welcome']);

  function changeToEnglish() {
    i18n.changeLanguage("en");
  }

  function changeToSpanish() {
    i18n.changeLanguage("es");
  }
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p
          dangerouslySetInnerHTML={{
            __html: t("title", { name: "Gerardo" }),
          }}
        />
        <p>Idioma actual: {i18n.language}</p>
        <button onClick={changeToEnglish}>Cambiar a inglés</button>
        <button onClick={changeToSpanish}>Cambiar a español</button>
      </header>
    </div>
  );
}

function App() {
  return (
    <Suspense fallback="Cargando traducciones...">
      <Welcome />
    </Suspense>
  );
}

export default App;
