// const name = "Gaello Armelito";
// const element = <h1>Hello, {name}</h1>;
import { FormatName } from "./components/FormatName";

const user = {
  firstName: "Benji",
  lastName: "Spencer",
};
const element = <h1>Hello, {FormatName(user)}!</h1>;

function App() {
  return <div className="App">{element}</div>;
}

export default App;
