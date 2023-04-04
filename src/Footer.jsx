
export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="container-fluid text-center general_color w-auto footer mt-2 animate__animated animate__fadeIn">
            <div className="col">
                <a href="https://www.digitalocean.com/?refcode=77f347b47d6c&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge">
                    <img src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg" alt="DigitalOcean Referral Badge" />
                </a>
                <button className="btn text-decoration-none mt-2 ms-2">
                    <a href="https://www.linkedin.com/in/guillerch/" className="nav-link" target='_blank'>© {year} guillerch</a>
                </button>
            </div>
        </div>
    )
}
