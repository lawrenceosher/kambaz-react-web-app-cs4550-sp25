import { Link } from "react-router-dom";
export default function TOC() {
  return (
    <ul>
      <li>
        <Link to="/Labs" id="wd-a">
          Labs
        </Link>
      </li>
      <li>
        <Link to="/Labs/Lab1" id="wd-a1">
          Lab 1
        </Link>
      </li>
      <li>
        <Link to="/Labs/Lab2" id="wd-a2">
          Lab 2
        </Link>
      </li>
      <li>
        <Link to="/Labs/Lab3" id="wd-a3">
          Lab 3
        </Link>
      </li>
      <li>
        <Link to="/Kambaz" id="wd-kambaz">
          Kambaz
        </Link>
      </li>
      <li>
        <a
          href="https://github.com/lawrenceosher/kambaz-react-web-app-cs4550-sp25"
          id="wd-github"
        >
          Lawrence's GitHub Repository
        </a>
      </li>
    </ul>
  );
}
