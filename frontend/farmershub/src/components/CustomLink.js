import { Link } from "react-router-dom";

function CustomLink({ text, to, className }) {
  return (
    <li>
      <Link to={to} className={className}>
        {text}
      </Link>
    </li>
  );
}

export default CustomLink;
