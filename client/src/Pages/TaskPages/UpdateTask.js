import React, { useState } from "react";
import { useTaskContext } from "../../Hooks/useTaskContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export default function UpdateTask({ task }) {
  const { updateTask } = useTaskContext();
  const [description, setDescription] = useState(task.description);
  const [title, setTitle] = useState(task.title);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleUpdate(e) {
    updateTask(task._id, title, description);
    handleClose();
    window.location.reload();
  }

  return (
    <div className="update_task">
      <Button className="update-button" variant="outline-dark" onClick={handleShow}>
        <FontAwesomeIcon icon={faPen} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="update-task-modal" closeButton>
          <Modal.Title>Update task</Modal.Title>
        </Modal.Header>
        <Modal.Body className="update-task-modal">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Task title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                placeholder={task.title}
                autoFocus
                required
                onChange={(e) => setTitle(e.target.value)}
                maxLength={25}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Task description</Form.Label>
              <Form.Control
                as="textarea"
                value={description}
                placeholder={task.description}
                rows={3}
                required
                onChange={(e) => setDescription(e.target.value)}
                maxLength={150}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="update-task-modal">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
