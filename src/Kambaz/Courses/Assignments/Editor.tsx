/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
} from "react-bootstrap";

import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { useState } from "react";
import * as assignmentsClient from "./client";

export default function AssignmentEditor() {
  const { aid } = useParams();
  const { cid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const selectedAssignment = assignments.find((a: any) => a._id === aid);

  const [assignment, setAssignment] = useState<any>(
    selectedAssignment || {
      title: "New Assignment",
      description: "New Assignment Description",
      points: 100,
      availableFromDate: new Date(),
      availableUntilDate: new Date(),
      dueDate: new Date(),
    }
  );

  const submitNewAssignment = async () => {
    if (!cid) return;
    const newAssignment = await assignmentsClient.createAssignmentForCourse(
      cid,
      { ...assignment, course: cid }
    );
    dispatch(addAssignment(newAssignment));
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  const updateExistingAssignment = async () => {
    await assignmentsClient.updateAssignment({ ...assignment });
    dispatch(updateAssignment({ ...assignment }));
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  function formatDateForFormInput(isoDateString: string) {
    const myDate = new Date(isoDateString);

    // Code taken from GeeksForGeeks: https://www.geeksforgeeks.org/how-to-format-javascript-date-as-yyyy-mm-dd/
    const year = myDate.getFullYear();
    const month = String(myDate.getMonth() + 1).padStart(2, "0");
    const day = String(myDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  return (
    <div id="wd-assignments-editor" className="w-75">
      <Form>
        <FormGroup controlId="wd-name" className="mb-3">
          <FormLabel>Assignment Name</FormLabel>
          <FormControl
            type="text"
            defaultValue={assignment.title}
            onChange={(e) =>
              setAssignment({ ...assignment, title: e.target.value })
            }
          />
        </FormGroup>

        <FormControl
          id="wd-description"
          as="textarea"
          rows={10}
          cols={50}
          className="mb-3"
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
          defaultValue={assignment.description}
        />

        <FormGroup
          controlId="wd-points"
          className="d-flex mb-3 align-items-center"
        >
          <FormLabel className="w-25 m-2 text-end">Points</FormLabel>
          <FormControl
            type="number"
            defaultValue={assignment.points}
            className="w-75"
            onChange={(e) =>
              setAssignment({ ...assignment, points: e.target.value })
            }
          />
        </FormGroup>

        <FormGroup
          controlId="wd-assignment-group"
          className="d-flex mb-3 align-items-center"
        >
          <FormLabel className="w-25 m-2 text-end">Assignment Group</FormLabel>
          <FormSelect className="w-75">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
          </FormSelect>
        </FormGroup>

        <FormGroup
          controlId="wd-display-grade-as"
          className="d-flex mb-3 align-items-center"
        >
          <FormLabel className="w-25 m-2 text-end">Display Grade as</FormLabel>
          <FormSelect className="w-75">
            <option value="Percentage">Percentage</option>
            <option value="Number">Number</option>
          </FormSelect>
        </FormGroup>

        <FormGroup controlId="wd-submission-type" className="d-flex mb-3">
          <FormLabel className="w-25 m-2 text-end align-top">
            Submission Type
          </FormLabel>
          <div className="w-75 border border-1 p-3">
            <FormSelect className="mb-4">
              <option value="Online">Online</option>
              <option value="In-Person">In-Person</option>
            </FormSelect>

            <FormGroup controlId="wd-entry-options">
              <FormLabel className="fw-bold">Online Entry Options</FormLabel>
              <FormCheck
                type="checkbox"
                label="Text Entry"
                id="wd-text-entry"
                className="my-2"
              />
              <FormCheck
                type="checkbox"
                label="Website URL"
                id="wd-website-url"
                checked
                className="my-2"
              />
              <FormCheck
                type="checkbox"
                label="Media Recordings"
                id="wd-media-recordings"
                className="my-2"
              />
              <FormCheck
                type="checkbox"
                label="Student Annotation"
                id="wd-student-annotation"
                className="my-2"
              />
              <FormCheck
                type="checkbox"
                label="File Upload"
                id="wd-file-upload"
                className="mt-2"
              />
            </FormGroup>
          </div>
        </FormGroup>

        <div className="d-flex mb-3">
          <FormLabel className="w-25 m-2 text-end align-top">Assign</FormLabel>
          <div className="w-75 border border-1 p-3">
            <FormGroup controlId="wd-assign-to" className="mb-3">
              <FormLabel className="fw-bold">Assign To</FormLabel>
              <FormControl type="text" value="Everyone" />
            </FormGroup>

            <FormGroup controlId="wd-due-date" className="mb-3">
              <FormLabel className="fw-bold">Due</FormLabel>
              <FormControl
                type="date"
                defaultValue={formatDateForFormInput(assignment.dueDate)}
                onChange={(e) =>
                  // Had to add an additional day to the date because it was always one day behind the clicked value when submitting a new assignment or editing
                  // Code taken from StackOverflow for adding 1 day: https://stackoverflow.com/questions/13762930/how-to-add-24-hours-to-datetime-object-of-javascript
                  setAssignment({
                    ...assignment,
                    dueDate: new Date(
                      new Date(e.target.value).getTime() + 60 * 60 * 24 * 1000
                    ).toISOString(),
                  })
                }
              />
            </FormGroup>

            <div className="d-flex">
              <FormGroup
                controlId="wd-available-from"
                className="w-50 mb-3 me-2"
              >
                <FormLabel className="fw-bold">Available From</FormLabel>
                <FormControl
                  type="date"
                  defaultValue={formatDateForFormInput(
                    assignment.availableFromDate
                  )}
                  onChange={(e) =>
                    setAssignment({
                      ...assignment,
                      availableFromDate: new Date(
                        new Date(e.target.value).getTime() + 60 * 60 * 24 * 1000
                      ).toISOString(),
                    })
                  }
                />
              </FormGroup>

              <FormGroup controlId="wd-available-until" className="w-50 mb-3">
                <FormLabel className="fw-bold">Until</FormLabel>
                <FormControl
                  type="date"
                  defaultValue={formatDateForFormInput(
                    assignment.availableUntilDate
                  )}
                  onChange={(e) =>
                    setAssignment({
                      ...assignment,
                      availableUntilDate: new Date(
                        new Date(e.target.value).getTime() + 60 * 60 * 24 * 1000
                      ).toISOString(),
                    })
                  }
                />
              </FormGroup>
            </div>
          </div>
        </div>
      </Form>
      <hr />

      <div className="float-end">
        <Link
          to={`/Kambaz/Courses/${cid}/Assignments`}
          className="me-1 btn btn-secondary"
        >
          Cancel
        </Link>
        <Button
          variant="danger"
          onClick={
            aid === "newAssignment"
              ? submitNewAssignment
              : updateExistingAssignment
          }
        >
          Save
        </Button>
      </div>
    </div>
  );
}
