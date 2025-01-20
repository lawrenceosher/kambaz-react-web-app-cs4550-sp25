export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <div>
        <label htmlFor="wd-name">
          <strong>Assignment Name</strong>
        </label>
        <br />
        <br />
        <input id="wd-name" value="A1 - ENV + HTML" />
      </div>
      <br />
      <textarea id="wd-description" cols={50} rows={10}>
        The assignment is available online Submit a link to the landing page of
        your Web application running on Netlify
      </textarea>
      <br />
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="center" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="center" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="Percentage">Percentage</option>
              <option value="Number">Number</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="center" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="Online">Online</option>
              <option value="In-Person">In-Person</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top"></td>
          <td>
            <label>Online Entry Options</label>
            <br />

            <input type="checkbox" name="entry-options" id="wd-text-entry" />
            <label htmlFor="wd-text-entry"> Text Entry</label>
            <br />

            <input type="checkbox" name="entry-options" id="wd-website-url" />
            <label htmlFor="wd-website-url"> Website URL</label>
            <br />

            <input
              type="checkbox"
              name="entry-options"
              id="wd-media-recordings"
            />
            <label htmlFor="wd-media-recordings"> Media Recordings</label>
            <br />

            <input
              type="checkbox"
              name="entry-options"
              id="wd-student-annotation"
            />
            <label htmlFor="wd-student-annotation"> Student Annotation</label>
            <br />

            <input type="checkbox" name="entry-options" id="wd-file-upload" />
            <label htmlFor="wd-file-upload"> File Uploads</label>
            <br />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label>Assign</label>
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign To</label> <br />
            <input id="wd-assign-to" value="Everyone" />
            <br /> <br />
            <label htmlFor="wd-due-date">Due</label> <br />
            <input id="wd-due-date" type="date" value="2024-05-13" />
            <br /> <br />
            <label htmlFor="wd-available-from">Available From</label> <br />
            <input id="wd-available-from" type="date" value="2024-05-06" />
          </td>
          <td valign="bottom">
            <label htmlFor="wd-available-until">Until</label> <br />
            <input id="wd-available-until" type="date" value="2024-05-20" />
          </td>
        </tr>
        <br />
      </table>
      <hr />
      <div>
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
}
