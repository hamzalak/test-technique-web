import { GlobalTypeState } from "../GlobalStateType";

export function getTheActualEquipment(state: GlobalTypeState) {
  return state["equipements"].requestedItem;
}

export function getAllEquipementsAsArray(state: GlobalTypeState) {
  const equipements = state["equipements"].items;
  return Object.keys(equipements).map((key) => ({
    equipementKey: key,
    ...equipements[key],
  }));
}

export function getEquipementByOption(
  state: GlobalTypeState,
  textAnOption: { option: "name" | "domain"; text: string }
) {
  const equipements = state["equipements"].items;
  const { text, option } = textAnOption;

  if (!text) return getAllEquipementsAsArray(state);

  return Object.keys(equipements).reduce((prev, act) => {
    if (
      equipements[act][option]
        .toLocaleLowerCase()
        .includes(text.toLocaleLowerCase())
    ) {
      return [
        ...prev,
        {
          equipementKey: act,
          ...equipements[act],
        },
      ];
    }
    return prev;
  }, [] as any);
}

export function getAllEquipements(state: GlobalTypeState) {
  return state["equipements"].items;
}
