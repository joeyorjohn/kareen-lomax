import React, { useState, useEffect } from "react";
import { useDroppable } from "@dnd-kit/core";

export default function Droppable({ id, collisions }) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });

  const [imgSrc, setImgSrc] = useState("/images/flowerimg.png");
  useEffect(() => {
    console.log(isOver);
    if (isOver == true) {
      setImgSrc("/images/flower.gif");
    }
    // if (isOver == false) {
    //   console.log("overfalse");
    //   setImgSrc("/images/flowerimg.pngf");
    // }
  }, [isOver]);

  useEffect(() => {
    if (collisions == id) {
      setImgSrc("/images/flower.gif");
    } else {
      setImgSrc("/images/flowerimg.png");
    }
  }, [collisions]);

  return (
    <div ref={setNodeRef} className=" grayscale-50">
      <img src={imgSrc} />
    </div>
  );
}
