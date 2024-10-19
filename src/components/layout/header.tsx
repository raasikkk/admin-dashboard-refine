import { Layout, Space } from "antd";
import CurrentUser from "./current-user";

const Header = () => {
  const headerStyles: React.CSSProperties = {
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "0 24px",
    position: "sticky",
    top: 0,
    zIndex: 999,
  };

  return (
    <Layout.Header style={headerStyles}>
      <Space align="center" size="small">
        <CurrentUser />
      </Space>
    </Layout.Header>
  );
};

export default Header;
