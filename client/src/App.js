import Layout, { Content, Header } from "antd/lib/layout/layout";
import AppRouter from "./components/AppRouter/AppRouter";
import Nav from "./components/Nav/Nav";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout hasSider={false}>
        <Header>
          <Nav />
        </Header>
        <Content className="content-wrapper">
          <AppRouter />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
