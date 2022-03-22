import Chart from "./components/BarChart";
import TreeDataContextProvider from "./contexts/TreeDataContextProvider";

const App =() => {
  return (
    <div className="App">
      <TreeDataContextProvider>
        <Chart />
      </TreeDataContextProvider>
    </div>
  );
}

export default App;
