import React from "react";
import Card from "react-bootstrap/Card";
import DeleteTask from "./DeleteTask";
import UpdateTask from "./UpdateTask";

const TaskDetails = ({ task }) => {
  return (
    <div className="task-details mx-3 my-3">
      <Card className="task-card" style={{ width: "20rem"}}>
        <Card.Body style={{display: 'flex', flexDirection: 'column', height: "10rem"}}>
          <Card.Title>{task.title}</Card.Title>
          <Card.Text>{task.description}</Card.Text>
        </Card.Body>
        <div className="buttons d-flex justify-content-center align-items-center mb-3">
            <div className="m-1">
              <DeleteTask task={task} />
            </div>
            <div className="m-1">
              <UpdateTask task={task} />
            </div>
          </div>
      </Card>
    </div>
  );
};

export default TaskDetails;
