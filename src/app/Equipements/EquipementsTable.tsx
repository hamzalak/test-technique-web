import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllEquipements } from "../redux/equipements/selectors";
import { ActionEnum } from "../redux/equipements/DispatchType";

export function EquipementsTable() {
  const equipements = useSelector(getAllEquipements);
  const dispatch = useDispatch();

  return (
    <>
      {equipements &&
        Object.keys(equipements).map((key) => (
          <div key={key}>
            {key} ,,,,,
            {
              <Link
                onClick={() =>
                  dispatch({ type: ActionEnum.FETCH_EQUIPEMENT, payload: key })
                }
                to={key}
              >
                Voir Détails
              </Link>
            }
          </div>
        ))}
    </>
  );
}
