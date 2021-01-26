import React from "react";
import { Modal, Form, Input, Button, Select } from "antd";

export default ({ setVisible, setTasks }) => {
  const initialValues = { status: "Normal" };

  const onFinish = (routine) => {
    setTasks((tasks) => [
      ...tasks,
      {
        ...routine,
        author: "Default Author",
        id: getRandomId(),
        progress: "not_started"
      }
    ]);
    setVisible(false);
  };

  const onCancel = () => {
    setVisible(false);
  };

  return (
    <Modal
      title="New FCKNG routine"
      onCancel={onCancel}
      visible={true}
      footer={null}
    >
      <Form
        name="basic"
        layout="vertical"
        initialValues={initialValues}
        onFinish={onFinish}
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input title!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <Input.TextArea rows={3} />
        </Form.Item>

        <Form.Item label="Status" name="status">
          <Select>
            <Select.Option value="Urgent">Urgent</Select.Option>
            <Select.Option value="Normal">Normal</Select.Option>
            <Select.Option value="Lime">Lime :)</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button onClick={onCancel}>Cancel</Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

function getRandomId() {
  return Math.round(100 + Math.random() * (100000 - 100));
}
