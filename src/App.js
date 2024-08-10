import "./index.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
const TMDB_API = process.env.REACT_APP_TMDB_API;
console.log(TMDB_API);

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
