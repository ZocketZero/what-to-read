import { FC } from "react";

interface ImgShowInput {
  url: string;
  img: string;
  name: string;
}

const ImgShow: FC<ImgShowInput> = ({ url, img, name }) => {
  return (
    <div className="flex justify-center py-2">
      <a
        target="_blank"
        href={url}
        rel="noopener noreferrer"
        title={name}
        className="book-cover"
      >
        <img
          src={img}
          alt={name || "book cover"}
          loading="lazy"
        />
      </a>
    </div>
  );
}

export default ImgShow
