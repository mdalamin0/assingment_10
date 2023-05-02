import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink to={to} className={({ isActive }) => (isActive) ? 'text-primary  nav-link text-decoration-underline' : 'nav-link '}>
            {children}
        </NavLink>
    );
};

export default ActiveLink;