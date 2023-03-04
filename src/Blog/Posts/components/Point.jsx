
export const Point = ({title,content}) => {
    return (
        <li className='general_color list-group-item d-flex justify-content-between align-items-start'>
            <div className="ms-2 me-auto">
            <div className="fw-bold">{title}:</div>
            {content}
            </div>
        </li>
    )
}
