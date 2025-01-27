import { FormControl, FormSelect } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <FormControl
        id="wd-username"
        placeholder="username"
        className="mb-2"
        defaultValue="alice"
      />

      <FormControl
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2"
        defaultValue="123"
      />

      <FormControl
        id="wd-firstname"
        placeholder="First Name"
        className="mb-2"
        defaultValue="Alice"
      />

      <FormControl
        id="wd-lastname"
        placeholder="Last Name"
        className="mb-2"
        defaultValue="Wonderland"
      />

      <FormControl
        id="wd-dob"
        type="date"
        className="mb-2"
        defaultValue="2000-01-01"
      />

      <FormControl
        id="wd-email"
        type="email"
        className="mb-2"
        defaultValue="alice@wonderland"
      />

      <FormSelect defaultValue="FACULTY" id="wd-role" className="mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </FormSelect>

      <Link to="/Kambaz/Account/Signin" className="btn btn-danger w-100 mb-2">
        Sign out
      </Link>
    </div>
  );
}
