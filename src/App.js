import "antd/dist/antd.css";
import "./styles.css";
import Board from "./Board";
import { TasksProvider } from "./TasksContext";

export default function App() {
  return (
    <div className="App">
      <TasksProvider>
        <Board />
      </TasksProvider>
    </div>
  );
}
