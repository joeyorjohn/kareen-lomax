"use client";

import React, { useState } from "react";

import Image from "next/image";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import Draggable from "./Draggable";
import Droppable from "./Droppable";

export default function DragArea() {
  //   const [activeId, setActiveId] = React.useState();

  //   const sensors = useSensors(
  //     useSensor(MouseSensor, { activationConstraint: { distance: 5 } }),
  //     useSensor(TouchSensor, {
  //       activationConstraint: { delay: 50, tolerance: 10 },
  //     }),
  //     useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  //   );

  //   const handleDragStart = React.useCallback(
  //     ({ active }) => setActiveId(active.id),
  //     []
  //   );

  //   const handleDragEnd = React.useCallback((event) => {
  //     const { active, over } = event;

  //     if (over && active.id !== over.id) {
  //       setPhotos((items) => {
  //         const oldIndex = items.findIndex((item) => item.id === active.id);
  //         const newIndex = items.findIndex((item) => item.id === over.id);

  //         return arrayMove(items, oldIndex, newIndex);
  //       });
  //     }

  //     setActiveId(undefined);
  //   }, []);

  //   const sensors = useSensors(
  //     useSensor(PointerSensor),
  //     useSensor(KeyboardSensor, {
  //       coordinateGetter: sortableKeyboardCoordinates,
  //     })
  //   );
  //   useDndMonitor({
  //     onDragStart(event) {
  //       console.log("test");
  //     },
  //     onDragMove(event) {
  //       console.log("test");
  //     },
  //     onDragOver(event) {
  //       console.log("test");
  //     },
  //     onDragEnd(event) {
  //       console.log("test");
  //     },
  //     onDragCancel(event) {
  //       console.log("test");
  //     },
  //   });

  //   const containers = ["A", "B", "C"];
  //   const [parent, setParent] = useState(null);
  //   const draggableMarkup = (
  //     <Draggable id="draggable" data={{ hello: 1 }}>
  //       Drag me
  //     </Draggable>
  //   );

  const startingPostion = { x: 0, y: 0 };

  const [position, setPosition] = useState(startingPostion);

  return (
    <div className="flex ">
      <DndContext onDragEnd={handleDragEnd}>
        {parent === null ? draggableMarkup : null}

        <Draggable position={position} />

        <div className="bg-red-300 text-xl">
          {/* {containers.map((id) => (
            // We updated the Droppable component so it would accept an `id`
            // prop and pass it to `useDroppable`
            <Droppable key={id} id={id}>
              {parent === id ? draggableMarkup : "Drop here"}
            </Droppable>
          ))} */}
        </div>
        {/* <Draggable /> */}
        <Droppable />
      </DndContext>
    </div>
  );
  function handleDragEnd(event) {
    console.log("deagend");
    const updatedPosition = position;
    position.x += event.delta.x;
    position.y += event.delta.y;
    console.log(updatedPosition);
    console.log("setposition");

    setPosition(updatedPosition);
    console.log(position);

    // const { over } = event;
    // console.log({ event });

    // // If the item is dropped over a container, set it as the parent
    // // otherwise reset the parent to `null`
    // setParent(over ? over.id : null);
  }
}
