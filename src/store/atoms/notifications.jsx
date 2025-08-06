import {atom, selector} from "recoil";
import axios from "axios";

export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: selector({
        key: "notificationsAtomSelector",
        get: async() => {
            await new Promise(resolve => setTimeout(resolve, 5000));//thread sleeps for 5 seconds
            const res = await axios.get("http://localhost:3000");
            return res.data;
        }
    })
})

export const meAtom = selector({
    key: "meAtom",
    get: ({ get }) => {
        const notifications = get(notificationsAtom);
        const { network, jobs, messaging, notifications: notificationCount } = notifications;

        return network + jobs + messaging + notificationCount;
    },
});
