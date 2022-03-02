import React,{useState,useEffect, useCallback,useMemo} from 'react'
import './theme.scss'
import { DragDropContext, Droppable ,Draggable} from 'react-beautiful-dnd'
function App() {
  const [arr,setArr] = useState(['red','green','blue'])


    const reorder = (result) =>{
      if (!result.destination) return;
      if(result.destination.index === result.source.index) return;
      const items = Array.from(arr);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      setArr(items)
    }


  return(
    <div className="App">
      <DragDropContext onDragEnd={(e)=>reorder(e)}>
        <Droppable droppableId={`draggable__list`} direction="vertical" >
          {(provided) => (
            <div className="draggable__list"  {...provided.draggableProps} ref={provided.innerRef}>
              {arr.map((item,index)=>{
                return (
                  <Draggable  draggableId={'index-'+ index} key={index} index={index}>
                    {(provided=>(
                      <li className="list-item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        {item}
                        {provided.placeholder}
                        </li>
                    ))}
                  </Draggable>
                )
                })}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      </div>
  );
}

export default App;
