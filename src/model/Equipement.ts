type StatusEquipement = "En Marche" | "Fonctionnel";

export interface Equipement {
  name: string;
  building: string;
  domain: string;
  niveau: string;
  local: string;
  photo: string;
  brand: string;
  model: string;
  serialNumber: string;
  quantity: number;
  status: StatusEquipement;
  notes: string;
  nbFaults: number;
}
