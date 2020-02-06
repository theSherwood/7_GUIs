import App from "./App";
import S from "s-js";

S.root(() => {
  document.querySelector("#root").append(App());
});
