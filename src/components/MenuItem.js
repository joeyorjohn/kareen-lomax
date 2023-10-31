import React, { useState, useEffect } from "react";
import { useDroppable } from "@dnd-kit/core";

export default function MenuItem({ id, collisions }) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });

  const [imgSrc, setImgSrc] = useState(`/images/${id}.png`);
  useEffect(() => {
    console.log(isOver);
    if (isOver == true) {
      setImgSrc(`/images/${id}.gif`);
    }
    // if (isOver == false) {
    //   console.log("overfalse");
    //   setImgSrc("/images/flowerimg.pngf");
    // }
  }, [isOver]);

  useEffect(() => {
    if (collisions == id) {
      setImgSrc(`/images/${id}.gif`);
    } else {
      setImgSrc(`/images/${id}.png`);
    }
  }, [collisions]);

  return (
    <div ref={setNodeRef} className=" grayscale hover:opacity-80 ">
      <img src={imgSrc} />
    </div>
  );
}
