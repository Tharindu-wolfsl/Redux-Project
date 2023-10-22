// import { createStore } from "redux";
import reducer from "./reducers";

import { configureStore } from "@reduxjs/toolkit";
// import { devToolsEnhancer } from "redux-devtools-extension";

//without redux tool-kit
// export default function configStore() {
//   const store = createStore(
//     reducer,
//     devToolsEnhancer({trace: true})
//   );
//   return store;
// };

// redux tool-kit
export default function() {
  return configureStore({reducer});
}


