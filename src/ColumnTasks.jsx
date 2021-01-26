import Task from "./Task";
import { Col, Empty } from "antd";
import { useDrop } from "react-dnd";
import { useCallback } from "react";

export default ({ type, tasks, onDrop }) => {
  const handleDrop = useCallback((item) => onDrop(type, item), [type, onDrop]);

  const [, drop] = useDrop({
    accept: ["default"],
    drop: handleDrop
  });

  return (
    <Col span={8}>
      <div ref={drop} style={{ height: "100%" }}>
        {printTasks(tasks)}
      </div>
    </Col>
  );
};

function printTasks(tasks = []) {
  return tasks.length > 0 ? (
    tasks.map((item, index) => <Task key={index} {...item} />)
  ) : (
    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
  );
}
