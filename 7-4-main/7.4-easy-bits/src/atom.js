import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 104,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});

export const notificationAtom = atom({
  key: "notificationAtom",
  default: 12,
});

export const messaginigAtom = atom({
  key: "messaginigAtom",
  default: 0,
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const networkAtomc = get(networkAtom);
    const jobsAtomc = get(jobsAtom);
    const notificationAtomc = get(notificationAtom);
    const messaginigAtomc = get(messaginigAtom);

    return networkAtomc + jobsAtomc + notificationAtomc + messaginigAtomc;
  },
});
