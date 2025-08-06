import { RecoilRoot, useRecoilValue } from "recoil";
import { meAtom, notificationsAtom } from "./store/atoms/notifications.jsx";


function App() {
    return (
        <RecoilRoot>
            <TopBar/>
        </RecoilRoot>
    )

}


function TopBar() {
    const notifications = useRecoilValue(notificationsAtom);
    const me = useRecoilValue(meAtom);

    return (
        <>
            <button>Home</button>
            <button>
                My Network ({notifications.network >= 100 ? "99+" : notifications.network})
            </button>
            <button>
                Jobs ({notifications.jobs >= 100 ? "99+" : notifications.jobs})
            </button>
            <button>
                Messaging ({notifications.messaging >= 100 ? "99+" : notifications.messaging})
            </button>
            <button>
                Notifications ({notifications.notifications >= 100 ? "99+" : notifications.notifications})
            </button>
            <button>Me ({me >= 100 ? "99+" : me})</button>
        </>
    );
}

export default App;
