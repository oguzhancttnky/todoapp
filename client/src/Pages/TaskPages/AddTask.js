import React, { useState } from "react";
import { useAuthContext } from "../../Hooks/useAuthContext";
import { useTaskContext } from "../../Hooks/useTaskContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function AddTask() {
  const { user } = useAuthContext();
  const { createTask } = useTaskContext();
  const [show, setShow] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    createTask(user._id, taskTitle, taskDescription);
    window.location.reload();
  };

  return (
    <div>
      <Button className="add_task_button" variant="outline-dark" onClick={handleShow}>
        <span>Add task</span>
      </Button>

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header className="add-task-modal" closeButton>
          <Modal.Title>Add task</Modal.Title>
        </Modal.Header>
        <Modal.Body className="add-task-modal">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Task title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                autoFocus
                required
                onChange={(e) => setTaskTitle(e.target.value)}
                maxLength={20}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Task description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                required
                onChange={(e) => setTaskDescription(e.target.value)}
                maxLength={150}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="add-task-modal">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
