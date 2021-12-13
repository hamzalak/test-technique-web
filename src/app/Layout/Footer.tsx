import { HeartFilled } from "@ant-design/icons";
import { Row, Layout } from "antd";

const { Footer: AntdFooter } = Layout;

export function Footer() {
  return (
    <AntdFooter
      style={{ position: "sticky", bottom: "0", background: "#f5d478" }}
    >
      <Row justify="center">
        Made by Hamza with <HeartFilled style={{ color: "red" }} />
      </Row>
    </AntdFooter>
  );
}
