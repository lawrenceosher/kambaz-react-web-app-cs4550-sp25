import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
  return (
    <div id="wd-people-table">
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tony</span>
              <span className="wd-last-name">Stark</span>
            </td>
            <td className="wd-login-id">001234561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-01</td>
            <td className="wd-total-activity">10:21:32</td>
          </tr>

          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">James</span>
              <span className="wd-last-name">Rhodes</span>
            </td>
            <td className="wd-login-id">001234562S</td>
            <td className="wd-section">S102</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-02</td>
            <td className="wd-total-activity">15:26:37</td>
          </tr>

          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Pepper</span>
              <span className="wd-last-name">Potts</span>
            </td>
            <td className="wd-login-id">001234563T</td>
            <td className="wd-section">S102</td>
            <td className="wd-role">TA</td>
            <td className="wd-last-activity">2020-10-03</td>
            <td className="wd-total-activity">20:31:42</td>
          </tr>

          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Obadiah</span>
              <span className="wd-last-name">Stane</span>
            </td>
            <td className="wd-login-id">001234567S</td>
            <td className="wd-section">S103</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-05</td>
            <td className="wd-total-activity">25:36:47</td>
          </tr>

          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Phil</span>
              <span className="wd-last-name">Coulson</span>
            </td>
            <td className="wd-login-id">001234569T</td>
            <td className="wd-section">S102</td>
            <td className="wd-role">TA</td>
            <td className="wd-last-activity">2020-10-07</td>
            <td className="wd-total-activity">40:46:47</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
