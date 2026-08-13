import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Atropos from "atropos/react";
import BookList from "./Data/BookList.json";
import ImgShow from "./components/ImgShow";
import { FC } from "react";
import { BookInput } from "./components/interface";
import ToggleMode from "./components/ToggleMode";

const SingleBook: FC = () => {
  const { bookname } = useParams();

  let theBook: BookInput = BookList.filter((book) => book.name == bookname)[0];
  if (Object.keys(theBook).length < 1) {
    return <Navigate to={"/"} />;
  }
  document.title = theBook.name ?? "ไม่พบหนังสือ";

  return (
    <main className="page-bg flex flex-col items-center justify-center min-h-screen">
      <ToggleMode />
      <div className="flex flex-col items-center justify-center flex-1 px-4 gap-5 text-center">
        <h1 className="book-title text-2xl sm:text-3xl max-w-xs sm:max-w-sm">
          {theBook.name}
        </h1>
        <Atropos shadowScale={1} activeOffset={40}>
          <ImgShow
            name={theBook.name ?? "ไม่พบชื่อหนังสือ"}
            img={theBook.img ?? ""}
            url={theBook.link ?? ""}
          />
        </Atropos>
      </div>
    </main>
  );
}

export default SingleBook