import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messaginigAtom,
  networkAtom,
  notificationAtom,
  totalNotificationSelector,
} from "./atom";
import { useMemo } from "react";

function App() {
  return (
    <>
      <RecoilRoot>
        <Main />
      </RecoilRoot>
    </>
  );
}

function Main() {
  const networkNotificationCount = useRecoilValue(networkAtom); //useRecoilValue   give current value
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const [messagingAtomCount, setMessagingAtomCount] =
    useRecoilState(messaginigAtom); // just like useState()

  // const totalNotificationCount = useMemo(() => {
  //   return (
  //     networkNotificationCount +
  //     jobsAtomCount +
  //     notificationAtomCount +
  //     messagingAtomCount
  //   );
  // }, [
  //   networkNotificationCount,
  //   jobsAtomCount,
  //   notificationAtomCount,
  //   messagingAtomCount,
  // ]);                                         // using    useMemo      to memoize     it is good    but we can use   selectors from Recoil

  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>
      <button>
        My network (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notification({notificationAtomCount})</button>
      <button>Me ({totalNotificationCount})</button>
    </>
  );
}
export default App;
