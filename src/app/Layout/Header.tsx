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
        backgroundColor: "#f5d478",
      }}
    >
      <Breadcrumb style={{ marginTop: "20px" }} separator=">">
        <Breadcrumb.Item>
          <Link to={RoutesEnum.EQUIPEMENTS}>
            <b> Liste des Equipements</b>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={RoutesEnum.HOME}>
            <b>Home</b>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <img
            style={{ position: "fixed", top: "20px", right: "20px" }}
            width={35}
            height={25}
            src={beeldiImage}
            alt="beeldi logo"
          />
        </Breadcrumb.Item>
      </Breadcrumb>
    </AntdHeader>
  );
}
