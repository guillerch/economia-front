
export const TituloBayas = ({hora=''}) => {
    return (
        
        <button 
            className="btn btn-outline-info col ms-2 mb-2" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target={`#time-${hora}`}
            aria-expanded="false" 
            aria-controls={`time-${hora}`}
            >
            Bayas de {hora} horas
        </button>
    )
}
