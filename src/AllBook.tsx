import BookList from "./Data/BookList.json";
import ImgShow from "./components/ImgShow";
import { Link } from "react-router-dom";

import BigButton from "./components/BigButton";
import { FC, useEffect } from "react";
import ToggleMode from "./components/ToggleMode";

const ShowAllBook: FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-2 px-4 pb-20">
      {BookList.map((book, id) => {
        return (
          <div key={id} className="book-card">
            {/* Cover */}
            <ImgShow img={book.img} url={book.link ?? ""} name={book.name} />

            {/* Title */}
            <Link
              className="book-title text-sm sm:text-base mt-1 line-clamp-2"
              to={`/${book.name}`}
              title="คลิกเพื่อดูรายละเอียด"
            >
              {book.name}
            </Link>

            {/* Author */}
            <a
              title="คลิกเพื่อค้นหาผู้เขียนบน Google"
              className="author-link text-xs sm:text-sm"
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.google.com/search?q=${book.writer}`}
            >
              <span style={{ color: "var(--text-3)" }}>by</span>
              <span className="font-semibold">{book.writer}</span>
            </a>
          </div>
        );
      })}
    </div>
  );
};

const AllBook: FC = () => {
  useEffect(() => {
    document.title = "หนังสือทั้งหมด";
  }, []);

  return (
    <main className="page-bg">
      <ToggleMode />

      {/* Header */}
      <header className="sticky top-0 z-20 flex items-center justify-center gap-3 flex-wrap px-4 py-2"
        style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <h1 className="page-header-badge">
          📖 รายการหนังสือทั้งหมด
        </h1>
        <Link to={"/"}>
          <BigButton title="อ่านอะไรดี" onclick={() => {}} small />
        </Link>
      </header>

      <ShowAllBook />
    </main>
  );
};

export default AllBook;
