import React from "react";
import { characterApi } from "store";

import { ApiProvider } from "@reduxjs/toolkit/query/react";

import CardGrid from "components/containers/CardGrid";
import Navbar from "components/containers/Navbar";
import LoadingIndicator from "components/presentationals/LoadingIndicator";

function CardGameApp() {
  const { data, isLoading } = characterApi.useGetAllQuery();

  if (isLoading) return <LoadingIndicator />;

  return (
    <>
      <Navbar />
      {data && <CardGrid />}
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
