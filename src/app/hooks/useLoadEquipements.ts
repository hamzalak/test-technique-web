import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { database } from "../../firebase";
import { Equipement } from "../../model/Equipement";
import { ActionEnum } from "../redux/equipements/DispatchType";

export function useLoadEquipements() {
  const [equipements, setEquipements] = useState<Record<string, Equipement>>();
  const dispatch = useDispatch();

  useEffect(() => {
    const getEquipements = async () => {
      const ref = database.ref();

      try {
        const equipements = await ref.child("Equipments").get();
        setEquipements(equipements.val());
        dispatch({
          type: ActionEnum.FETCH_ALL_EQUIPEMENTS,
          payload: equipements.val() || [],
        });
      } catch (e) {
        //Erreur à notifier
      }
    };
    getEquipements();
  }, []);

  return [equipements, setEquipements] as const;
}
