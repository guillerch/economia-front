
export const CuerpoBayas = ({baya}) => {
    return(
        <>
            <tr>
                <td>{baya.name}</td>
                <td><img src={baya.imagen} alt={baya.name} /></td>
                <td>{baya.description}</td>
                <td>
                    <li className="list-group-item">{baya.seed1}</li>
                    <li className="list-group-item">{baya.seed2}</li>
                    {(baya.seed3 !== 'NN') && (<li className="list-group-item">{baya.seed3}</li>)}
                </td>
            </tr>

        </>
    )
    
}