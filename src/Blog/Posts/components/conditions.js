import { Point } from "./Point"

export const conditions = (points) => {
    const pointer = !points
    ?<></>
    :<ol className='list-group list-group-numbered w-75 text-start'>
        {points.map(point=>
            <Point key={point.id} {...point}/>)}
    </ol>
    return {
        pointer
    }
}
