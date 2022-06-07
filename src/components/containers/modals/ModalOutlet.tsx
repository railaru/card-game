import React, { Suspense, lazy } from "react";
import { useTypedSelector } from "store";

import {
  selectIsDeckSizeModalOpened,
  selectIsMobileMenuModalOpened,
  selectIsScoreModalOpened,
} from "store/client/modals";

const ScoreModal = lazy(
  () => import("components/containers/modals/ScoreModal")
);
const MobileMenuModal = lazy(
  () => import("components/containers/modals/MobileNavModal")
);
const DeckSizeModal = lazy(
  () => import("components/containers/modals/DeckSizeModal")
);

function ModalOutlet() {
  const isScoreModalOpened = useTypedSelector(selectIsScoreModalOpened);
  const isMobileMenuModalOpened = useTypedSelector(
    selectIsMobileMenuModalOpened
  );
  const isDeckSizeModalOpened = useTypedSelector(selectIsDeckSizeModalOpened);

  return (
    <>
      {isScoreModalOpened && (
        <Suspense fallback={null}>
          <ScoreModal />
        </Suspense>
      )}
      {isMobileMenuModalOpened && (
        <Suspense fallback={null}>
          <MobileMenuModal />
        </Suspense>
      )}
      {isDeckSizeModalOpened && (
        <Suspense fallback={null}>
          <DeckSizeModal />
        </Suspense>
      )}
    </>
  );
}

export default ModalOutlet;
