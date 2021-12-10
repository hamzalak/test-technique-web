import { GlobalTypeState } from "../GlobalStateType";

export function getTheActualEquipment(state: GlobalTypeState) {
  return state["equipements"].requestedItem;
}

export function getAllEquipements(state: GlobalTypeState) {
  return state["equipements"].items;
}
