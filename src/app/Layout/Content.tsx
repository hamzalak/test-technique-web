import { Route, Routes } from "react-router-dom";
import { EquipementDescription } from "../Equipements/EquipementDescription";
import { EquipementsTable } from "../Equipements/EquipementsTable";
import { Home } from "../Home";
import { NotFoundPage } from "../NotFoundPage";
import { RoutesEnum } from "../utils/routeNames";

export function Content() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path={RoutesEnum.EQUIPEMENTS} element={<EquipementsTable />} />
        <Route path={RoutesEnum.HOME} element={<Home />} />
        <Route
          path={RoutesEnum.SINGLEEQUIPEMENT}
          element={<EquipementDescription />}
        />
      </Routes>
    </div>
  );
}
