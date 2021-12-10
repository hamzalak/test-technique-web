import { Equipement } from "../../../model/Equipement";
import { GlobalTypeState } from "../GlobalStateType";

const intialEquipement: Equipement = {
  name: " ",
  building: " ",
  domain: " ",
  niveau: " ",
  local: " ",
  photo: " ",
  brand: " ",
  model: " ",
  serialNumber: "",
  quantity: 0,
  status: "Fonctionnel",
  notes: " ",
  nbFaults: 0,
};

export const equipementsinitialState: GlobalTypeState["equipements"] = {
  items: { str: intialEquipement },
  requestedItem: intialEquipement,
};
