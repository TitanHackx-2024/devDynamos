import { Link } from "react-router-dom";

function CustomLink({ text, to, className, ...options }) {
  return (
    <li>
      <Link to={to} className={className} {...options}>
        {text}
      </Link>
    </li>
  );
}

export default CustomLink;
