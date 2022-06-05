import React from "react";
import { characterApi } from "store";

import { ApiProvider } from "@reduxjs/toolkit/query/react";

import CardGrid from "components/containers/CardGrid";
import Navbar from "components/containers/Navbar";

function CardGameApp() {
  return (
    <>
      <Navbar />
      <CardGrid />
    </>
  );
}

function App() {
  return (
    <ApiProvider api={characterApi}>
      <CardGameApp />
    </ApiProvider>
  );
}

export default App;
