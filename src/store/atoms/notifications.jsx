import {atom, selector} from "recoil";

export const networkAtom = atom({
    key: 'networkAtom',
    default: 102
});

export const jobsAtom = atom({
    key: 'homeAtom',
    default: 0
});

export const messagingAtom = atom({
    key: 'messagingAtom',
    default: 1
});

export const notificationsAtom = atom({
    key: 'notificationsAtom',
    default: 12
});

export const meAtom = selector({
    key: 'meAtom',
    get:( {get} )=> {
        const network  = get(networkAtom);
        const jobs  = get(jobsAtom);
        const messaging  = get(messagingAtom);
        const notifications = get(notificationsAtom);

        return (network + jobs + messaging + notifications);
    }
})