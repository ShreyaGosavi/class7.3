import {RecoilRoot, useRecoilValue} from "recoil";
import {
    jobsAtom, meAtom,
    messagingAtom,
    networkAtom,
    notificationsAtom
} from "./store/atoms/notifications.jsx";

function App(){
    return (
        <RecoilRoot>
            <TopBar/>
        </RecoilRoot>
    )
}

function TopBar(){
    const jobs = useRecoilValue(jobsAtom);
    const messaging = useRecoilValue(messagingAtom);
    const notification = useRecoilValue(notificationsAtom);
    const network = useRecoilValue(networkAtom);
    const me = useRecoilValue(meAtom);
    return (
        <>
            <button>Home</button>
            <button>My Network ({network >= 100 ? "99+" : network})</button>
            <button>Jobs ({jobs >= 100 ? "99+" : jobs})</button>
            <button>Messaging ({messaging >= 100 ? "99+" : messaging})</button>
            <button>Notifications ({notification >= 100 ? "99+" : notification})</button>
            <button>Me {me >= 100 ? "99+" : me}</button>
        </>
    )
}

export default App;