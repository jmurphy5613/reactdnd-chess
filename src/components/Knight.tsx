import { useDrag } from "react-dnd"
import { ItemTypes } from "../utils/Constants"


const Knight = () => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.KNIGHT,
        collect: (monitor:any) => ({
            isDragging: !monitor.isDragging()
        })
    }))

    return (
        <div 
            style={{
                fontSize: '5rem',
                opacity: isDragging ? 0.5 : 1,
                fontWeight: 'bold',
                cursor: 'move'
            }}
            ref={drag}
        >
            ♘
        </div>
    )
}

export default Knight