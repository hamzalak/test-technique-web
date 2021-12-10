import { useSelector } from "react-redux";
import { getTheActualEquipment } from "../redux/equipements/selectors";

export function EquipementDescription() {
  const elem = useSelector(getTheActualEquipment);

  console.log(elem);

  return <div>juhjkhg</div>;
}
