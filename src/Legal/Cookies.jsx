import { useState,useEffect } from "react";

export const Cookies = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const hasAcceptedCookies = localStorage.getItem('hasAcceptedCookies');
        if (!hasAcceptedCookies) {
        setShowBanner(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('hasAcceptedCookies', 'true');
        setShowBanner(false);
    }

    return (
        showBanner
        ?   <div className="cookie-banner text-center">
                <p>Este sitio web utiliza cookies para mejorar su experiencia. Al continuar navegando por el sitio, acepta el uso de cookies.</p>
                <button onClick={acceptCookies}>Aceptar</button>
            </div>
        : null
    );
}
