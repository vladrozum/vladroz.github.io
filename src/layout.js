import { Outlet, Link } from "react-router-dom";

export default function Layout(props) {

  return (
    <>
      {!props.on ? (
        <nav>
          <ul className="nav">
            <li>
              <Link to="/" className="urls">
                Тести
              </Link>
            </li>
            <li>
              <Link to="/ChatGPT" className="urls">
                Питання картам
              </Link>
            </li>
            <li>
              <Link to="/Store" className="urls">
                Магазинчик
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="navZaika">
          <a href="#" className="a">
            <img
              className="seed"
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/sunflower-seed-1407823-1190821.png"
            ></img>
            <p className="nameZaika">Зайка</p>
          </a>
          <ul>
            <li>
              <Link className="Links" to="/">
                Про нас
              </Link>
            </li>
            <li>
              <Link className="Links" to="/products">
                Продукція
              </Link>
            </li>
            <li>
              <Link className="Links" to="/work">
                Робота
              </Link>
            </li>
          </ul>
        </nav>
      )}

      <Outlet />
    </>
  );
}
