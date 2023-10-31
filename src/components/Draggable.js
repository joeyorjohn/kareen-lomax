import React from "react";
import { useDraggable } from "@dnd-kit/core";

export default function Draggable({ position }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        position: "",
      }
    : undefined;

  return (
    <div className="z-20 absolute flex w-full ">
      <div
        ref={setNodeRef}
        style={{ ...style, left: position.x, top: position.y }}
        {...listeners}
        {...attributes}
        className=" relative mx-auto w-52  touch-none	"
      >
        <div className=" text-xl  w-52 pl-4">
          <img src="/images/watering_can.gif" alt="Watering Can" />
        </div>
      </div>
    </div>
  );
}
