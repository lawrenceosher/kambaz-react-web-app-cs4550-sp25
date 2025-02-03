import {
  Button,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
} from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="w-75">
      <Form>
        <FormGroup controlId="wd-name" className="mb-3">
          <FormLabel>Assignment Name</FormLabel>
          <FormControl type="text" value="A1 - ENV + HTML" />
        </FormGroup>

        <FormControl
          id="wd-description"
          as="textarea"
          rows={10}
          cols={50}
          className="mb-3"
        >
          The assignment is available online Submit a link to the landing page
          of your Web application running on Netlify
        </FormControl>

        <FormGroup
          controlId="wd-points"
          className="d-flex mb-3 align-items-center"
        >
          <FormLabel className="w-25 m-2 text-end">Points</FormLabel>
          <FormControl type="number" value={100} className="w-75" />
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
              <FormControl type="date" defaultValue="2024-05-13" />
            </FormGroup>

            <div className="d-flex">
              <FormGroup
                controlId="wd-available-from"
                className="w-50 mb-3 me-2"
              >
                <FormLabel className="fw-bold">Available From</FormLabel>
                <FormControl type="date" defaultValue="2024-05-06" />
              </FormGroup>

              <FormGroup controlId="wd-available-until" className="w-50 mb-3">
                <FormLabel className="fw-bold">Until</FormLabel>
                <FormControl type="date" defaultValue="2024-05-20" />
              </FormGroup>
            </div>
          </div>
        </div>
      </Form>
      <hr />

      <div className="float-end">
        <Button className="me-1 btn-secondary">Cancel</Button>
        <Button className="btn-danger">Save</Button>
      </div>
    </div>
  );
}
