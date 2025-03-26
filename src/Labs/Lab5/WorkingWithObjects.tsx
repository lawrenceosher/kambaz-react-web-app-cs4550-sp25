import { useState } from "react";
import { FormCheck, FormControl, FormLabel } from "react-bootstrap";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: "1",
    name: "My First Module",
    description: "This is the First Description for the First Module",
    course: "RS101",
  });

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <FormControl
        className="w-25"
        id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>
      <hr />
      <FormLabel>Update Assignment Score</FormLabel>
      <FormControl
        className="w-25"
        id="wd-assignment-score"
        type="number"
        defaultValue={assignment.score}
        onChange={(e) =>
          setAssignment({ ...assignment, score: +e.target.value })
        }
      />
      <a
        id="wd-update-assignment-score"
        className="btn btn-primary"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
      >
        Update Score
      </a>
      <hr />
      <FormLabel>Update Assignment Completion Status</FormLabel>
      <FormCheck
        className="w-25"
        id="wd-assignment-completed"
        type="checkbox"
        label="Is the Assignment Completed?"
        onChange={(e) =>
          setAssignment({ ...assignment, completed: e.target.checked })
        }
      />
      <a
        id="wd-update-assignment-completed"
        className="btn btn-primary"
        href={`${ASSIGNMENT_API_URL}/completed?isCompleted=${assignment.completed}`}
      >
        Update Assignment Completion
      </a>
      <hr />

      <h4>Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment`}
      >
        Get Assignment
      </a>
      <hr />
      <h4>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment/title`}
      >
        Get Title
      </a>
      <hr />

      <h4>Module</h4>
      <a
        id="wd-retrieve-module"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/module`}
      >
        Get Module
      </a>
      <hr />

      <h4>Module Name</h4>
      <a
        id="wd-retrieve-module-name"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/module/name`}
      >
        Get Module Name
      </a>
      <hr />
      <FormLabel>Update Module Name</FormLabel>
      <FormControl
        className="w-25"
        id="wd-module-name"
        defaultValue={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />
      <a
        id="wd-update-module-name"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/module/name/${module.name}`}
      >
        Update Module Name
      </a>
      <hr />
      <FormLabel>Update Module Description</FormLabel>
      <FormControl
        className="w-25"
        id="wd-module-description"
        defaultValue={module.description}
        onChange={(e) => setModule({ ...module, description: e.target.value })}
      />
      <a
        id="wd-update-module-description"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/module/description/${module.description}`}
      >
        Update Module Description
      </a>
      <hr />
    </div>
  );
}
