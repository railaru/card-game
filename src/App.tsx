import React from "react";
import { Provider } from "react-redux";
import { store, useTypedSelector } from "store";

import { characterApi } from "store/api/characters";
import { GAME_STATUS, getCurrentGameStatus } from "store/client/game";

import CardGrid from "components/containers/CardGrid";
import GameFinishScreen from "components/containers/GameFinishScreen";
import Navbar from "components/containers/Navbar";
import ModalOutlet from "components/containers/modals/ModalOutlet";
import LoadingIndicator from "components/presentationals/LoadingIndicator";

function CardGameApp() {
  const { data, isLoading } = characterApi.useGetAllQuery();
  const currentGameStatus = useTypedSelector(getCurrentGameStatus);

  if (isLoading) return <LoadingIndicator />;

  return (
    <>
      <ModalOutlet />
      <Navbar />
      {data && (
        <>
          {currentGameStatus === GAME_STATUS.FINISHED ? (
            <GameFinishScreen />
          ) : (
            <CardGrid />
          )}
        </>
      )}
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <CardGameApp />
    </Provider>
  );
}

export default App;
