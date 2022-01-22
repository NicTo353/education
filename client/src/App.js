import Layout, { Content, Header } from "antd/lib/layout/layout";
import AppRouter from "./components/AppRouter/AppRouter";
import Nav from "./components/Nav/Nav";
import "./App.css";
import React from "react";
import store from "./redux";
import AppContext from "./context";

function App() {
  const state = store.getState();

  const contextValue = {
    token: state.user.token,
    role: state.user.role,
    isFetching: state.data.isFetching,
  };

  return (
    <div className="App">
      <AppContext.Provider value={contextValue}>
        <Layout hasSider={false}>
          <Header>
            <Nav />
          </Header>
          <Content className="content-wrapper">
            <AppRouter />
          </Content>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}

export default App;
