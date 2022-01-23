import Layout, { Content, Header } from "antd/lib/layout/layout";
import AppRouter from "./components/AppRouter/AppRouter";
import "./App.css";
import React from "react";
import store from "./redux";
import AppContext from "./context";
import NavContainer from "./components/Nav/NavContainer";

function App() {
  const state = store.getState();

  const contextValue = {
    token: state.user.token,
    role: state.user.role,
    userId: state.user.id,
    isFetching: state.data.isFetching,
  };

  return (
    <div className="App">
      <AppContext.Provider value={contextValue}>
        <Layout hasSider={false}>
          <Header>
            <NavContainer />
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
