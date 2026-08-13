import { FC, useEffect } from "react";
import { useState } from "react";
import BookList from "./Data/BookList.json";
import { BookInput } from "./components/interface";

import ImgShow from "./components/ImgShow";
import BigButton from "./components/BigButton";
import ToggleMode from "./components/ToggleMode";
import Footer from "./components/Footer";

const App: FC = () => {
  const [book, setBook] = useState<BookInput>({}); // keep book details
  const [count, setCount] = useState<number>(0); // keep random count

  // for random book
  const randomBook: Function = () => {
    let result: number = Math.floor(Math.random() * BookList.length);
    setBook(BookList[result]);
  };

  useEffect(() => {
    document.title = "อ่านอะไรดี";
    // load first content
    randomBook();
    setCount(10);
  }, []);

  useEffect(() => {
    // it's work when click the button
    if (count > 0) {
      setCount(count - 1); // count random when it === 0 it should stop
      setTimeout(() => {
        // delay 300 ms for random book
        randomBook();
      }, 300);
    }
  }, [book]);

  return (
    <>
      <main className="page-bg flex flex-col">
        <ToggleMode />

        {/* Hero section */}
        <section className="flex flex-col items-center justify-center flex-1 pt-16 pb-4 px-4 gap-7 text-center">

          {/* Label above button */}
          <p
            className="text-sm font-medium tracking-widest uppercase"
            style={{ color: "var(--text-3)", letterSpacing: "0.15em" }}
          >
            กดเพื่อสุ่มหนังสือ
          </p>

          {/* Main CTA */}
          <BigButton
            title="อ่านอะไรดี"
            onclick={() => {
              if (count === 0) {
                setCount(10);
                randomBook();
              }
            }}
          />

          {/* Ornamental divider */}
          <div className="ornament-divider w-full max-w-xs mx-auto">
            ✦
          </div>

          {/* Book title */}
          {book.name && (
            <a
              className="book-title"
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.google.com/search?q=${book.name}`}
              title="คลิกเพื่อค้นหาหนังสือเล่มนี้บน Google"
            >
              {book.name}
            </a>
          )}

          {/* Book cover */}
          <ImgShow
            img={book.img ?? ""}
            url={book.link ?? ""}
            name={book.name ?? ""}
          />

          {/* Author */}
          {book.writer && (
            <a
              title="คลิกเพื่อค้นหาผู้เขียนบน Google"
              className="author-link"
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.google.com/search?q=${book.writer}`}
            >
              <span style={{ color: "var(--text-3)" }}>ผู้เขียน</span>
              <span className="font-semibold">{book.writer}</span>
            </a>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
