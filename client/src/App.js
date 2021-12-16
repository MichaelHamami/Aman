import "./App.css";
import React from "react";
import { Container } from "@material-ui/core";

import { CallHistoryPage } from "./pages";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Container>
      <Routes>
        <Route path="/" exact element={<CallHistoryPage />} />
      </Routes>
    </Container>
  </BrowserRouter>
);

export default App;
