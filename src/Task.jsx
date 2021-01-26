import { Card, Tag, Dropdown, Menu } from "antd";
import { EllipsisOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDrag } from "react-dnd";
import { useContext } from "react";
import { TasksContext } from "./TasksContext";

const STATUSES = {
  urgent: "red",
  normal: "blue",
  default: "lime"
};

const MENU_KEY_REMOVE = "remove";

export default (task) => {
  const { id, title, status, author, description } = task;
  const { setTasks } = useContext(TasksContext);
  const [, drag] = useDrag({
    item: { task, type: "default" }
  });

  const handleMenuClick = () => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key={MENU_KEY_REMOVE} icon={<DeleteOutlined />}>
        Remove
      </Menu.Item>
    </Menu>
  );

  return (
    <div ref={drag} className="taskItem">
      <Card>
        <Tag color={getColorByStatus(status)}>{status}</Tag>
        <Dropdown.Button
          size="small"
          style={{ position: "absolute", right: "20px" }}
          overlay={menu}
          placement="bottomRight"
          icon={<EllipsisOutlined />}
        />
        <div style={{ marginTop: "10px" }}>
          <div className="taskTitle">{title}</div>
          <div className="taskDescription">{description}</div>
          <b>
            Author: <a href="#">{author}</a>
          </b>
        </div>
      </Card>
    </div>
  );
};

function getColorByStatus(status = "") {
  return STATUSES[status.toLowerCase()] ?? STATUSES["default"];
}
