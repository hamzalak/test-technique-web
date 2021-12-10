import { Equipement } from "../../model/Equipement";

export type GlobalTypeState = {
  equipements: { items: Record<string, Equipement>; requestedItem: Equipement };
};
