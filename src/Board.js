import { useContext, useMemo, useState } from "react";
import { Row, Col, Button } from "antd";
import "antd/dist/antd.css";
import "./styles.css";
import ColumnTasks from "./ColumnTasks";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { NOT_STARTED, IN_PROGRESS, COMPLETED } from "./definitions";
import RoutineAddModal from "./RoutineAddModal";
import { TasksContext } from "./TasksContext";

export default function Board() {
  const { tasks, setTasks } = useContext(TasksContext);
  const [routineModalVisible, setRoutineModalVisible] = useState(false);

  const groupedTasks = useMemo(() => getGroupedTasks(tasks), [tasks]);
  const startList = useMemo(() => groupedTasks[NOT_STARTED], [groupedTasks]);
  const inProgressList = useMemo(() => groupedTasks[IN_PROGRESS], [
    groupedTasks
  ]);
  const completedList = useMemo(() => groupedTasks[COMPLETED], [groupedTasks]);

  const onDrop = (droppedTo, { task: droppedTask }) => {
    if (droppedTask.progress === droppedTo) {
      return;
    }

    setTasks((tasks) => {
      const notChangedTasks = tasks.filter(
        (task) => task.id !== droppedTask.id
      );
      return [...notChangedTasks, { ...droppedTask, progress: droppedTo }];
    });
  };

  return (
    <div className="main-wrapper">
      <h2>
        Do your FCKNG routines
        <br />
        <Button
          type="primary"
          className="btn-add"
          onClick={() => setRoutineModalVisible(true)}
        >
          Add FCKNG routine
        </Button>
      </h2>

      <Row gutter={24} className="tasksHeader">
        <Col span={8}>Not Started</Col>
        <Col span={8}>In Progress</Col>
        <Col span={8}>Completed</Col>
      </Row>

      <DndProvider backend={HTML5Backend}>
        <Row gutter={24}>
          <ColumnTasks type={NOT_STARTED} onDrop={onDrop} tasks={startList} />
          <ColumnTasks
            type={IN_PROGRESS}
            onDrop={onDrop}
            tasks={inProgressList}
          />
          <ColumnTasks type={COMPLETED} onDrop={onDrop} tasks={completedList} />
        </Row>
      </DndProvider>

      {routineModalVisible && (
        <RoutineAddModal
          setTasks={setTasks}
          setVisible={setRoutineModalVisible}
        />
      )}
    </div>
  );
}

function getGroupedTasks(tasks) {
  const grouped = {};

  tasks.forEach((task) => {
    if (Array.isArray(grouped[task.progress])) {
      grouped[task.progress].push(task);
    } else {
      grouped[task.progress] = [task];
    }
  });

  return grouped;
}
