// import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
    // const { isLoggedIn } = useAuth();

    return (
        <nav className={css.nav__list}>
            <NavLink className={css.link} to="/">
                <svg className={css.link_item} width="40" height="40">
                    <path fill='white' d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"></path>
                </svg>
                <span className={css.link_item__text}>Home</span>
            </NavLink>

            <NavLink className={css.link} to="/lists">
                <svg className={css.link_item} width="40" height="40">
                    <path fill='white'
                        d="M20.359 15.062l-8 8c-0.203 0.187-0.516 0.187-0.719 0l-4.5-4.5c-0.187-0.203-0.187-0.516 0-0.703l0.719-0.719c0.187-0.187 0.5-0.187 0.703 0l3.437 3.437 6.937-6.937c0.203-0.187 0.516-0.187 0.703 0l0.719 0.719c0.187 0.187 0.187 0.5 0 0.703zM2 26h22v-16h-22v16zM8 7v-4.5c0-0.281-0.219-0.5-0.5-0.5h-1c-0.281 0-0.5 0.219-0.5 0.5v4.5c0 0.281 0.219 0.5 0.5 0.5h1c0.281 0 0.5-0.219 0.5-0.5zM20 7v-4.5c0-0.281-0.219-0.5-0.5-0.5h-1c-0.281 0-0.5 0.219-0.5 0.5v4.5c0 0.281 0.219 0.5 0.5 0.5h1c0.281 0 0.5-0.219 0.5-0.5zM26 6v20c0 1.094-0.906 2-2 2h-22c-1.094 0-2-0.906-2-2v-20c0-1.094 0.906-2 2-2h2v-1.5c0-1.375 1.125-2.5 2.5-2.5h1c1.375 0 2.5 1.125 2.5 2.5v1.5h6v-1.5c0-1.375 1.125-2.5 2.5-2.5h1c1.375 0 2.5 1.125 2.5 2.5v1.5h2c1.094 0 2 0.906 2 2z">
                    </path>
                </svg>
                <span className={css.link_item__text}> My lists</span>
            </NavLink>

            <NavLink className={css.link} to="/important">
                <svg className={css.link_item} width="40" height="40">
                    <path fill='white'
                        d="M31.881 12.557c-0.277-0.799-0.988-1.384-1.844-1.511l-8.326-1.238-3.619-7.514c-0.381-0.789-1.196-1.294-2.092-1.294s-1.711 0.505-2.092 1.294l-3.619 7.514-8.327 1.238c-0.855 0.127-1.566 0.712-1.842 1.511-0.275 0.801-0.067 1.683 0.537 2.285l6.102 6.092-1.415 8.451c-0.144 0.851 0.225 1.705 0.948 2.203 0.397 0.273 0.864 0.412 1.331 0.412 0.384 0 0.769-0.094 1.118-0.281l7.259-3.908 7.26 3.908c0.349 0.187 0.734 0.281 1.117 0.281 0.467 0 0.934-0.139 1.332-0.412 0.723-0.498 1.090-1.352 0.947-2.203l-1.416-8.451 6.104-6.092c0.603-0.603 0.81-1.485 0.537-2.285zM23.588 19.363c-0.512 0.51-0.744 1.229-0.627 1.934l1.416 8.451-7.26-3.906c-0.348-0.188-0.732-0.281-1.118-0.281-0.384 0-0.769 0.094-1.117 0.281l-7.26 3.906 1.416-8.451c0.118-0.705-0.114-1.424-0.626-1.934l-6.102-6.092 8.326-1.24c0.761-0.113 1.416-0.589 1.743-1.268l3.621-7.512 3.62 7.513c0.328 0.679 0.982 1.154 1.742 1.268l8.328 1.24-6.102 6.091z">
                    </path>
                </svg>
                <span className={css.link_item__text}> Important</span>
            </NavLink>

            {/* {isLoggedIn && ( */}
                <NavLink className={css.link} to="/user">
                    <svg className={css.link_item} width="40" height="40">
                        <path fill='white' d="M21 21v-2c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464h-8c-1.38 0-2.632 0.561-3.536 1.464s-1.464 2.156-1.464 3.536v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879h8c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM17 7c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464-2.632 0.561-3.536 1.464-1.464 2.156-1.464 3.536 0.561 2.632 1.464 3.536 2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464 1.464-2.156 1.464-3.536zM15 7c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121z"></path>
                    </svg>
                    <span className={css.link_item__text}> User Profile</span>
                </NavLink>
            {/* )} */}
        </nav>
    );
}

export default Navigation;