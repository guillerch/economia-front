import { useDetectClickOutside } from 'react-detect-click-outside';

export const HamMenu = ({closeDropdown}) => {
    const ref = useDetectClickOutside({onTriggered:closeDropdown});
    return (
        <div className="dropdown" ref={ref}>
            <button className="navbar-toggler general_color"  type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon general_color"></span>
            </button>
        </div>
    )
}
