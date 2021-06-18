import React, {useState, useRef, useEffect} from 'react'

function DragNDrop({data}) {
    const [list, setList] = useState(data);
    const [dragging,setDragging] = useState(false)

    const dragItem = useRef()
    const dragNode = useRef()

    useEffect(() => {
        setList(data);
    }, [setList, data])

    const handleDragStart = (e,item) => {
    
        dragItem.current = item
        dragNode.current = e.target
        dragNode.current.addEventListener('dragend', handleDragEnd)
        setTimeout(() => {
            setDragging(true)
        }, 0)
        
    }

    const handleDragEnter = (e, targetItem) => {
        
        if (dragNode.current != e.target) {
            
            setList(oldList => {
                let newList = JSON.parse(JSON.stringify(oldList))
                console.log(newList[targetItem])
                newList[targetItem.groupI].items.splice(targetItem.itemI, 0,newList[dragItem.current.groupI].items.splice(dragItem.current.itemI,1)[0])
                dragItem.current = targetItem
                localStorage.setItem('List', JSON.stringify(newList));
                return newList
            })
        }
    }

    const handleDragEnd = () => {
        setDragging(false)
        
        dragNode.current.removeEventListener('dragend', handleDragEnd)
        dragItem.current = null
        dragNode.current = null
        
        
    }

    const getStyles = (params) => {
        const currentItem = dragItem.current
        if (currentItem.groupI === params.groupI && currentItem.itemI === params.itemI) {
            return 'current dnd-item'
        }
        return 'dnd-item'
    }

    if (list) {
        return (                
            <div className="drag-n-drop">
            {list.map((group, groupI) => (
              <div key={group.title} onDragEnter={dragging && !group.items.length?(e) => handleDragEnter(e,{groupI, itemI: 0}):null} className="dnd-group">
                {group.items.map((item, itemI) => (
                  <div draggable key={item}  onDragStart={(e) => handleDragStart(e, {groupI, itemI})} onDragEnter={dragging?(e) => {handleDragEnter(e, {groupI, itemI})}:null} className={dragging?getStyles({groupI, itemI}):"dnd-item"}>
                    {item}
                  </div>
                ))}
              </div>
            ))}
            </div>
        )
    } else { return null}
}

export default DragNDrop