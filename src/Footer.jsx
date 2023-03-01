
export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="container-fluid text-center general_color w-auto footer mt-2 animate__animated animate__fadeIn">
            <div className="col">
                <button className="btn text-decoration-none">
                <a href="https://www.linkedin.com/in/guillerch/" className="nav-link" target='_blank'>© {year} guillerch</a>
                </button>
            </div>
        </div>
    )
}
