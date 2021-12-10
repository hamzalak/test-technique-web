import { useEffect, useState } from "react";
import { database } from "../../firebase";
import { Equipement } from "../../model/Equipement";

export function EquipementsTable() {
  const [equipements, setEquipements] = useState<Record<string, Equipement>>();

  useEffect(() => {
    const getEquipements = async () => {
      const ref = database.ref();
      const equipements = await ref.child("Equipments").get();
      setEquipements(equipements.val());
    };
    getEquipements();
  }, []);

  return (
    <>
      {equipements && Object.keys(equipements).map((key) => <div> {key} </div>)}
    </>
  );
}
