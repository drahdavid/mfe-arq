import React from "react";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import {
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
  productionPrefix: "container",
});

export default () => {
  return (
    <div>
      <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
          <Header />
          <MarketingApp />
        </StylesProvider>
      </BrowserRouter>
    </div>
  );
};
