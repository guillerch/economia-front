import { BreedForm } from "./components/BreedForm"

export const Crianza = () => {
    return (

    <div className="container mt-2 mb-2 text-center animate__animated animate__fadeIn">
        <h3 className="general_color">
            <b>Crianza</b>
        </h3>
        <p className="general_color">
        La crianza en PokeMMO es importante porque permite a los jugadores criar Pokémon más poderosos y personalizados. 
        La calculadora de costos para crianza ayuda a los jugadores a planificar y optimizar la crianza de Pokémon, ya que les permite calcular los costos de crianza en términos de dinero y recursos necesarios.
        </p>
        
        <BreedForm />
    </div>
    )
}