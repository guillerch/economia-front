import { Point } from './components/Point'

export const Post = ({id,title,intro,points,conclusion,paragraphs}) => {
    const pointer = !points
    ?<></>
    :<ol className='list-group list-group-numbered w-75 text-start'>
        {points.map(point=>
            <Point key={point.id} {...point}/>)}
    </ol>
    
    const paragrapher =!paragraphs
    ?<></>
    :paragraphs.map(paragraph => <p key={paragraph.id}>{paragraph.text}</p>)
    return (
        <div className="container mt-2 text-center animate__animated animate__fadeIn general_color d-flex align-items-center flex-column justify-content-center">
            <h3 className='general_color'>
                <b>{title}</b>
            </h3>
            <hr />
            <p>
                {intro}
            </p>
            {pointer}
            {paragrapher}
            <p>{conclusion}</p>
        </div>
        
    )
}
