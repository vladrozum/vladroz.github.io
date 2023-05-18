import React from "react";
import storeData from "./data/storeData";
import "./styles/store.css";

export default function Store() {
  const trash =
    "data:image/png;base64,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";

  const [data, dataArray] = React.useState(storeData);
  const [cart, setCart] = React.useState([]);
  const [price, setPrice] = React.useState(0);
  const [pay, setPay] = React.useState(false);
  const [counter, setCounter] = React.useState(0);
  const [number, setNumber] = React.useState();

  function addTo(id) {
    if (counter === 8) {
      alert("Нашо тобі стіки карт?");
    } else {
      setCart((previousCart) => [
        ...previousCart,
        {
          dataOrder: `${data[id - 1].name}\n`,
          price: data[id - 1].price,
          description: data[id - 1].description,
          id: id,
        },
      ]);
      setPrice((prevPrice) => prevPrice + data[id - 1].price);
      setCounter((prevCount) => prevCount + 1);
    }
  }

  function setOrder() {
    if (counter > 0 && cart.length>0) {
      setPay(!pay);
    } else {
      alert("Ти нічого не купила!!!!!!!!!!");
    }
  }

  function orderNumber() {
    let genOrder = [];
    const numbers = "0123456789";
    for (let i = 0; i < 25; i++) {
      genOrder.push(Math.floor(Math.random() * numbers.length));
    }
    setNumber(genOrder.join(""));
  }

  function del(id) {
    // setCart(cart.splice(id, 1));
    // setPrice((prevPrice) => prevPrice - data[id - 1].price);
    // setCounter((prevCounter) => prevCounter - 1);
  }

  const info = data.map((item) => {
    return (
      <div className="containeri">
        <img src={item.image} className="images"></img>
        <p className="name">{item.name}</p>
        <p className="description">{item.description}</p>
        <div className="priceBuy">
          <p className="price">{item.price} грн</p>
          <p className="oldPrice">{item.oldPrice}</p>
          <img
            onClick={() => addTo(item.id)}
            className="buy"
            src={
              "https://png.pngtree.com/png-vector/20191026/ourlarge/pngtree-shopping-basket-icon-png-image_1871519.jpg"
            }
          ></img>
        </div>
      </div>
    );
  });

  const carts = cart.map((prevCart) => {
    return (
      <div>
        <div className="orders">
          {prevCart.dataOrder}
          <span className="priceCart">{`${prevCart.price} грн`}</span>
          <img
            className="trash"
            onClick={() => del(prevCart.id)}
            src={trash}
          ></img>
        </div>
      </div>
    );
  });

  const cartsBuy = cart.map((prevCart) => {
    return (
      <div>
        <div className="containerCart">
          <div className="ordersBuy">{prevCart.dataOrder}</div>
          <div className="description">{prevCart.description}</div>
          <div className="priceCartBuy">{prevCart.price}</div>
        </div>
      </div>
    );
  });

  return (
    <div>
      {pay ? (
        <div className="containerOrder">
          <p className="orderNumb">Замовлення №{number}</p>
          {cartsBuy}
            <p className="priceOrder">
          <span className="price">{price}</span> грн
          </p>
          <div className="ag">
          <button className="disagree" onClick={setOrder}>
              Назад
            </button>
            <button className="agree">Замовити</button>

          </div>
        </div>
      ) : (
        <div className="containerAll">
          <div className="containerBasket">
            {carts}
            <button
              className="order"
              onClick={() => {
                setOrder();
                orderNumber();
              }}
            >
              В кошик
            </button>
          </div>
          <div className="containerInfo">{info}</div>
        </div>
      )}
    </div>
  );
}
