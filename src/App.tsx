import { Layout } from "antd";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Content } from "./app/Layout/Content";
import { Footer } from "./app/Layout/Footer";
import { Header } from "./app/Layout/Header";

function App() {
  return (
    <Layout className="layout">
      <Router>
        <Header />
        <Content />
      </Router>
      <Footer />
    </Layout>
  );
}
export default App;
