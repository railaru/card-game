import React, { Suspense, lazy } from "react";
import { useTypedSelector } from "store";

import { selectIsScoreModalOpened } from "store/client/modals";

const ScoreModal = lazy(
  () => import("components/containers/modals/ScoreModal")
);

function ModalOutlet() {
  const isScoreModalOpened = useTypedSelector(selectIsScoreModalOpened);

  return (
    <>
      {isScoreModalOpened && (
        <Suspense fallback={null}>
          <ScoreModal />
        </Suspense>
      )}
    </>
  );
}

export default ModalOutlet;
