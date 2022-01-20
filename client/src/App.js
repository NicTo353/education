import Layout, { Content, Header } from "antd/lib/layout/layout";
import AppRouter from "./components/AppRouter/AppRouter";
import Nav from "./components/Nav/Nav";
import "./App.css";
import React, { useEffect } from "react";
import store, { dispatch } from "./redux";
import { thunks } from "./redux/thunks";
import AppContext from "./context";

function App() {
  useEffect(() => {
    dispatch(thunks.updateAll());
  }, []);

  const state = store.getState();

  const contextValue = {
    token: state.user.token,
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
