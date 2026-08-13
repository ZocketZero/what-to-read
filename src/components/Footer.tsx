import { FC } from "react";
import { Link } from "react-router-dom";
import Github from "./Github";

const Footer: FC = () => {
  return (
    <footer>
      {/* All Books fixed button */}
      <Link to={"/books"} className="fixed bottom-5 left-5 z-10">
        <span className="btn-all-books">
          <span aria-hidden="true">📚</span>
          หนังสือทั้งหมด
        </span>
      </Link>

      {/* GitHub link */}
      <Github />
    </footer>
  );
};

export default Footer;
