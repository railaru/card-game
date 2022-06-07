import React, { Suspense, lazy } from "react";
import { useTypedSelector } from "store";

import {
  selectIsMobileMenuModalOpened,
  selectIsScoreModalOpened,
} from "store/client/modals";

const ScoreModal = lazy(
  () => import("components/containers/modals/ScoreModal")
);
const MobileMenuModal = lazy(
  () => import("components/containers/modals/MobileNavModal")
);

function ModalOutlet() {
  const isScoreModalOpened = useTypedSelector(selectIsScoreModalOpened);
  const isMobileMenuModalOpened = useTypedSelector(
    selectIsMobileMenuModalOpened
  );

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
    </>
  );
}

export default ModalOutlet;
