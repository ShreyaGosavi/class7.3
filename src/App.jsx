import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { meAtom, notificationsAtom } from "./store/atoms/notifications.jsx";
import { useEffect } from "react";
import axios from "axios";

// ✅ Wrapper to ensure RecoilRoot is the top-level component
function AppWrapper() {
    return (
        <RecoilRoot>
            <App />
        </RecoilRoot>
    );
}

// ✅ Actual app with Recoil hooks
function App() {
    const setNotifications = useSetRecoilState(notificationsAtom);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await axios.get("http://localhost:3000/"); // Use correct port
                setNotifications(response.data);
            } catch (error) {
                console.error("Failed to fetch notifications:", error);
            }
        };

        fetchNotifications();
        const interval = setInterval(fetchNotifications, 5000);
        return () => clearInterval(interval);
    }, [setNotifications]);

    return <TopBar />;
}

// ✅ TopBar using Recoil state
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

export default AppWrapper;
