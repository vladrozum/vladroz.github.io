import { Outlet, Link } from "react-router-dom";

export default function Layout(props){

  function getCurrentURL () {
    return window.location.href
  }

  return (
    <>
      <nav className={`${props.on || getCurrentURL().split('/').at(-1)==="Zaika"? 'yes' : ''}`}>
        <ul className="nav">
          <li>
            <Link to="/" className="urls">Тести</Link>
          </li>
          <li>
            <Link to="/ChatGPT" className="urls">Питання картам</Link>
          </li>
          <li>
            <Link to="/Store" className="urls">Магазинчик</Link>
          </li>

        </ul>
      </nav>

      <Outlet />
    </>
  )
};
