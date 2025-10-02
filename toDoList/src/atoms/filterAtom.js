import { atom } from "recoil";

export const filterAtom = atom({
  key: "filterState",
  default: "all",
});
