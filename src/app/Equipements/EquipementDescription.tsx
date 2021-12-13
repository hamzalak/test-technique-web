import { Badge, Button, Card, Col, Descriptions, Divider, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useLoadEquipements } from "../hooks/useLoadEquipements";
import { ActionEnum } from "../redux/equipements/DispatchType";
import { getTheActualEquipment } from "../redux/equipements/selectors";
import { CheckpointsTable } from "../Checkpoints/CheckpointsTable";
import { ToolTwoTone } from "@ant-design/icons";
import { database } from "../../firebase";
import { Checkpoint } from "../../model/Checkpoint";

export function EquipementDescription() {
  const equipement = useSelector(getTheActualEquipment);

  const [checkpointVisible, setCheckponitVisible] = useState(false);

  const onCloseCheckpoints = () => setCheckponitVisible(false);

  const onOpenCheckpoints = () => setCheckponitVisible(true);

  const [checkPoints, setCheckpoints] = useState<Checkpoint[]>();

  useLoadEquipements();

  const dispatch = useDispatch();

  const { equipementId } = useParams() as { equipementId: string };

  useEffect(() => {
    const fetcheAllCheckpoints = async () => {
      try {
        const checkpointsSnapshot = await database
          .ref("Checkpoints")
          .orderByChild("equipmentKey")
          .equalTo(equipementId)
          .once("value");
        const data = [] as Checkpoint[];
        checkpointsSnapshot.forEach((childSnapshot) => {
          data.push(childSnapshot.val());
        });
        setCheckpoints(data);
      } catch (e) {
        // Error happened
      }
    };
    fetcheAllCheckpoints();
  }, [equipementId]);

  useEffect(() => {
    if (!equipement || !equipement?.name) {
      dispatch({
        type: ActionEnum.FETCH_EQUIPEMENT,
        payload: equipementId,
      });
    }
  });

  const {
    name,
    building,
    niveau,
    local,
    domain,
    brand,
    serialNumber,
    quantity,
    notes,
    status,
    photo,
  } = equipement || {};

  const statusColor = status === "En Marche" ? "processing" : "success";

  const TiltleComponent = () => (
    <div>
      {" "}
      <ToolTwoTone /> Détails{" "}
    </div>
  );

  return (
    <>
      <Divider
        style={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button onClick={onOpenCheckpoints}>Afficher Les Checkpoints</Button>
        <CheckpointsTable
          visible={checkpointVisible}
          onClose={onCloseCheckpoints}
          checkpoints={checkPoints}
        />
      </Divider>
      <Row>
        <Col span={12}>
          <Card hoverable cover={<img alt="example" src={photo} />}>
            <Meta title={name} />
          </Card>
        </Col>
        <Col span={12} style={{ paddingLeft: "10px" }}>
          <Descriptions title={<TiltleComponent />} bordered>
            <Descriptions.Item label="Nom">{name}</Descriptions.Item>
            <Descriptions.Item label="Batiment">{building}</Descriptions.Item>
            <Descriptions.Item label="Niveau">{niveau}</Descriptions.Item>
            <Descriptions.Item label="Local">{local}</Descriptions.Item>
            <Descriptions.Item label="Domaine" span={2}>
              {domain}
            </Descriptions.Item>
            <Descriptions.Item label="Status" span={3}>
              <Badge status={statusColor} text={status} />
            </Descriptions.Item>
            <Descriptions.Item label="Marque">{brand}</Descriptions.Item>
            <Descriptions.Item label="Numéro de série">
              {serialNumber}
            </Descriptions.Item>
            <Descriptions.Item label="Quantité">{quantity}</Descriptions.Item>
            <Descriptions.Item label="Notes">{notes}</Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
}
