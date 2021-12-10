import { Equipement } from "../../../model/Equipement";

export enum ActionEnum {
  "FETCH_EQUIPEMENT",
  "FETCH_ALL_EQUIPEMENTS",
}

type PayloadType = string | Record<string, Equipement>;

export type DipatchType = { type: ActionEnum; payload: PayloadType };
