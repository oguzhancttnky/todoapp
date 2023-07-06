import React from "react";
import Button from "react-bootstrap/Button";
import { useTaskContext } from "../../Hooks/useTaskContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function DeleteTask({ task }) {
  const { deleteTask } = useTaskContext();

  async function handleDelete(e) {
    deleteTask(task._id);
    window.location.reload();
  }
  return (
    <div className="delete_task">
      <Button className="delete-button" type="submit" variant="outline-dark" onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrash} />
      </Button>
    </div>
  );
}
