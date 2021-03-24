import React from "react";
import Image from "next/image";

const images = [
  { title: "music", src: "/music.jpeg" },
  { title: "music2", src: "/music2.png" },
  { title: "music3", src: "/music3.jpg" },
  { title: "music4", src: "/music4.png" },
];

export default function Gallery({ handleBackground }) {
  const imagesMapped = images.map((img) => {
    return (
      <Image
        onClick={handleBackground}
        src={img.src}
        alt="Picture of the author"
        width={50}
        height={50}
      />
    );
  });

  return (
    <div className="photoContainer">
      <div className="photoContent">
        <p>Or use a free stock photo</p>
        {imagesMapped}
      </div>
    </div>
  );
}
