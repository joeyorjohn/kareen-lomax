import React from "react";
import {
  DragDropProvider,
  DragDropSensors,
  DragEventHandler,
  createDraggable,
  DragOverlay,
} from "@thisbeyond/solid-dnd";

const Draggable = (props) => {
  const draggable = createDraggable(props.id);
  return (
    <div
      use:draggable
      class="draggable absolute"
      classList={{ "opacity-25": draggable.isActiveDraggable }}
      style={{ top: 0, left: (props.id === 1 ? 0 : 125) + "px" }}
    >
      Draggable {props.id}
    </div>
  );
};

export default function SolidDrag() {
  let transform = { x: 0, y: 0 };

  const onDragMove = ({ overlay }) => {
    if (overlay) {
      transform = { ...overlay.transform };
    }
  };
  const onDragEnd = ({ draggable }) => {
    const node = draggable.node;
    node.style.setProperty("top", node.offsetTop + transform.y + "px");
    node.style.setProperty("left", node.offsetLeft + transform.x + "px");
  };

  return (
    <DragDropProvider onDragMove={onDragMove} onDragEnd={onDragEnd}>
      <DragDropSensors />
      <div class="min-h-15 w-full h-full relative">
        <Draggable id={1} />
        <Draggable id={2} />
      </div>
      <DragOverlay>
        {(draggable) => <div class="draggable">Draggable {draggable.id}</div>}
      </DragOverlay>
    </DragDropProvider>
  );
}
