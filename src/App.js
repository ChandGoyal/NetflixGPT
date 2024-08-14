import "./index.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

console.log("API Key: ", process.env.REACT_APP_TMDB_API);
console.log("API Key: ", process.env.REACT_APP_GEMINI_API);

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
