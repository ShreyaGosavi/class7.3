import {atom, selector} from "recoil";

export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: {
        network: 0,
        jobs: 0,
        messaging: 0,
        notifications: 0,
    }
})

export const meAtom = selector({
    key: "meAtom",
    get: ({ get }) => {
        const notifications = get(notificationsAtom);
        const { network, jobs, messaging, notifications: notificationCount } = notifications;

        return network + jobs + messaging + notificationCount;
    },
});
