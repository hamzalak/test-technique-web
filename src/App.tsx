import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { EquipementDescription } from "./app/Equipements/EquipementDescription";
import { EquipementsTable } from "./app/Equipements/EquipementsTable";
import { Home } from "./app/Home";
import { ActionEnum } from "./app/redux/equipements/DispatchType";
import { database } from "./firebase";
import { Equipement } from "./model/Equipement";

function App() {
  const dispatch = useDispatch();
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
    <Router>
      <div>
        <Link
          onClick={() =>
            dispatch({
              type: ActionEnum.FETCH_ALL_EQUIPEMENTS,
              payload: equipements,
            })
          }
          to="/equipements"
        >
          Liste des Equipements
        </Link>
        <br />
        <Link to="/home">Home</Link>
        <br />
      </div>
      <Routes>
        <Route path="/equipements" element={<EquipementsTable />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/equipements/:equipementId"
          element={<EquipementDescription />}
        />
      </Routes>
    </Router>
  );
}
export default App;
