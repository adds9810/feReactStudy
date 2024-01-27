import { atom } from "recoil";

export const todoFilterState = atom({
  key: "main/todoFilterState",
  default: "All",
});
