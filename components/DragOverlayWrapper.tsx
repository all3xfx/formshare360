import { DragOverlay, useDndMonitor } from '@dnd-kit/core'
import React from 'react'

function DragOverlayWrapper() {

    useDndMonitor({
        onDragStart: (event) => {
            console.log("Drag item", event)
        }
    })

    const node = <div>No drag</div>

  return (
<DragOverlay>
    {node}
</DragOverlay>  )
}

export default DragOverlayWrapper