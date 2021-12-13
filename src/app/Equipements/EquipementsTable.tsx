import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getEquipementByOption } from "../redux/equipements/selectors";
import { ActionEnum } from "../redux/equipements/DispatchType";
import { Equipement } from "../../model/Equipement";
import { Input, Select, Table } from "antd";
import { useLoadEquipements } from "../hooks/useLoadEquipements";
import { useState } from "react";
import { GlobalTypeState } from "../redux/GlobalStateType";

const { Option } = Select;

const { Search } = Input;

export function EquipementsTable() {
  useLoadEquipements();
  const dispatch = useDispatch();
  const [option, setOption] = useState<"name" | "domain">("name");
  const [text, setText] = useState("");
  const onSearch = (searchedValue: string) => {
    setText(searchedValue);
  };
  const equipements = useSelector((state) =>
    getEquipementByOption(state as GlobalTypeState, { option, text })
  );

  const columns = [
    {
      title: "Photo",
      dataIndex: "photo",
      key: "photo",
      render: (_: any, equipement: Equipement & { equipementKey: string }) => {
        return (
          <div>
            <img
              style={{
                height: "271px",
                width: "263px",
              }}
              alt="equipement"
              src={equipement.photo}
            />
          </div>
        );
      },
    },
    {
      title: "Nom de l'équipement",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Nombe de défault",
      dataIndex: "nbFaults",
      key: "nbFaults",
    },
    {
      title: "domaine de l'équipement",
      dataIndex: "domain",
      key: "domain",
    },
    {
      title: "Consulter",
      dataIndex: "equipementKey",
      key: "equipementKey",
      render: (_: any, equipement: Equipement & { equipementKey: string }) => {
        return (
          <Link
            onClick={() =>
              dispatch({
                type: ActionEnum.FETCH_EQUIPEMENT,
                payload: equipement.equipementKey,
              })
            }
            to={equipement.equipementKey}
          >
            Voir Détails
          </Link>
        );
      },
    },
  ];

  return (
    <>
      <Input.Group
        style={{
          display: "flex",
          marginTop: "100px",
          marginBottom: "50px",
          alignItems: "center",
          justifyContent: "center",
        }}
        compact
      >
        <Select
          onChange={(value) => {
            setOption(value);
          }}
          defaultValue="name"
        >
          <Option value="name">Par Nom</Option>
          <Option value="domain">Par Domain</Option>
        </Select>
        <Search
          onSearch={onSearch}
          placeholder="Recherche"
          style={{ width: 200 }}
          allowClear
          enterButton
        />
      </Input.Group>
      {equipements && (
        <Table
          columns={columns}
          pagination={{
            onChange: (page) => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            },
          }}
          dataSource={equipements}
          bordered
        />
      )}
    </>
  );
}
