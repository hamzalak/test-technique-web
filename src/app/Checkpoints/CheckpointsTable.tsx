import { HomeTwoTone } from "@ant-design/icons";
import { Drawer, DrawerProps, List } from "antd";
import { Checkpoint } from "../../model/Checkpoint";
import { OptionalCheckpointDescription } from "./OptionalCheckpointDescription";

const alternativePhoto =
  "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png";

export function CheckpointsTable({
  visible,
  onClose,
  checkpoints,
}: DrawerProps & { checkpoints: Checkpoint[] | undefined }) {
  return (
    <Drawer
      title={"Checkpoints"}
      headerStyle={{ backgroundColor: "#f5d478" }}
      placement={"left"}
      width={750}
      closable={false}
      onClose={onClose}
      visible={visible}
      key={"left"}
    >
      <List
        itemLayout="vertical"
        size="large"
        dataSource={checkpoints}
        renderItem={(item) => (
          <List.Item
            key={item.name}
            extra={
              <img
                width={272}
                alt="logo"
                src={item.photo || alternativePhoto}
              />
            }
          >
            <List.Item.Meta
              avatar={<HomeTwoTone />}
              title={
                <OptionalCheckpointDescription
                  text={item.fault}
                  option={"Nom du défault"}
                />
              }
              description={
                <OptionalCheckpointDescription
                  text={item.recommandatio}
                  option={"Recommandation"}
                />
              }
            />
            {item.name}
          </List.Item>
        )}
      />
    </Drawer>
  );
}
