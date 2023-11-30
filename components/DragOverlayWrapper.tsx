import { Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import React, { useState } from "react";
import { SidebarBtnElementDragOverlay } from "./SidebarBtnElement";
import { ElementsType, FormElements } from "./FormElements";

function DragOverlayWrapper() {
  const [draggedItem, setDraggableItem] = useState<Active | null>(null);

  useDndMonitor({
    onDragStart: (event) => {
      setDraggableItem(event.active);
    },
    onDragCancel: () => {
      setDraggableItem(null);
    },
    onDragEnd: () => {
      setDraggableItem(null);
    },
  });

  if (!draggedItem) return null;

  let node = <div>No drag</div>;
  const isSidebarBtnELement = draggedItem.data?.current?.isDesignerBtnElement;

  if (isSidebarBtnELement) {
    const type = draggedItem.data?.current?.type as ElementsType;
    node = <SidebarBtnElementDragOverlay formElement={FormElements[type]} />;
  }

  return <DragOverlay>{node}</DragOverlay>;
}

export default DragOverlayWrapper;
