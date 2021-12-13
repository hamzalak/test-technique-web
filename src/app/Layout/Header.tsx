import { Breadcrumb, Layout } from "antd";
import { Link } from "react-router-dom";
import { useLoadEquipements } from "../hooks/useLoadEquipements";
import { RoutesEnum } from "../utils/routeNames";
import beeldiImage from "../../index.jpg";
const { Header: AntdHeader } = Layout;
export function Header() {
  useLoadEquipements();
  return (
    <AntdHeader
      style={{
        position: "fixed",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: "#fdfbe2",
      }}
    >
      <Breadcrumb style={{ marginTop: "20px" }} separator=">">
        <Breadcrumb.Item>
          <Link to={RoutesEnum.EQUIPEMENTS}>Liste des Equipements</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={RoutesEnum.HOME}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <img
            style={{ position: "fixed", top: "20px", right: "20px" }}
            width={35}
            height={25}
            src={beeldiImage}
          />
        </Breadcrumb.Item>
      </Breadcrumb>
    </AntdHeader>
  );
}
