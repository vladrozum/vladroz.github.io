import React from "react";
import zaikaData from "./zaikaData.js";

export default function ZaikaShop({on}) {
  const [dataa, setDataa] = React.useState(zaikaData);
  const [data, setData] = React.useState(zaikaData);
  const [quantity, setQuantity] = React.useState(false);
  const [displayFilter, setDisplay] = React.useState(false);
  const [filter, setFilter] = React.useState();
  const [query, setQuery] = React.useState();

  function chooseQuantity(id) {
    setQuantity(true);
    setData((prevData) =>
      prevData.map((qua) => {
        return qua.id === id
          ? { ...qua, price: dataa[id - 1].pricePack, isActive: true }
          : qua;
      })
    );
  }

  function chooseQuantityPack(id) {
    setQuantity(false);
    setData((prevData) =>
      prevData.map((qua) => {
        return qua.id === id
          ? { ...qua, price: dataa[id - 1].price, isActive: false }
          : qua;
      })
    );
  }

  function chooseQuantityFilter() {
    setQuantity(true);
    setFilter("За упаковку");

    setData((prevData) =>
      prevData.map((qua) => {
        return { ...qua, price: qua.pricePack, isActive: true };
      })
    );
  }

  function chooseQuantityFilterPack() {
    setFilter("За пачку");
    setQuantity(false);
    setData(
      dataa.map((qua) => {
        return { ...qua, price: qua.price, isActive: false };
      })
    );
  }

  function searcher(query, list) {
    if (!query) {
      return list;
    }
    return list.filter(({ name }) => name.toLowerCase().includes(query.toLowerCase()));
  }

  function choosePriceUp(){
    setData(data.sort((a,b) => a.price - b.price))
  }

  function choosePriceDown(){
    setData(data.sort((a, b) => b.price - a.price))
  }

  React.useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredZaika = searcher(query, dataa);
      setData(filteredZaika);
    }, 100);

    return () => clearTimeout(Debounce);
  }, [query]);

  const productsInfo = data.map((prevData) => {
    const styles = {
      backgroundColor: prevData.isActive ? "greenyellow" : "#e9e8ed",
      width: prevData.isActive ? "100px" : "90px",
      border: "none",
      fontSize: prevData.isActive ? "20px" : "",
    };
    const styles1 = {
      backgroundColor: prevData.isActive ? "#e9e8ed" : "greenyellow",
      border: "none",
      width: prevData.isActive ? "90px" : "100px",
      fontSize: prevData.isActive ? "" : "20px",
    };


    return (
      <div className="container1">
        <img className="imageProducts" src={prevData.image}></img>
        <div className="priceInfo">
          <p className="price">{`${prevData.price} ₴    `}</p>
          <button
            className={`button-${quantity ? "active" : "disable"}`}
            onClick={() => chooseQuantity(prevData.id)}
            style={styles}
          >
            Упаковка
          </button>
          <button
            className={`button-${!quantity ? "active" : "disable"}`}
            onClick={() => chooseQuantityPack(prevData.id)}
            style={styles1}
          >
            Пачка
          </button>
        </div>
      </div>
    );
  });

  return (
    <div>
      <nav className="nav">
        <p onClick={()=>on(false)}>Назад</p>
        <form>
          <input
            placeholder="Пошук"
            className="search"
            type="text"
            onChange={(e) => {

              setQuery(e.target.value);
            }}
          />
        </form>
        <a href="/work"><img src="https://i.imgur.com/ZSb5HSU.png" className="cart"></img></a>
      </nav>
      <nav className="navShop">
        <div className="filterNav" onClick={() => setDisplay(!displayFilter)}>
          <button className="filterButton">
            Фільтр{" "}
            <img
              className="arrow"
              src={
                displayFilter
                  ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAACgoKBwcHCSkpKbm5uCgoKVlZX6+vqYmJjx8fHk5OT39/d4eHiXl5dFRUXW1tYuLi63t7c0NDSMjIxhYWFKSkrJycmGhoYmJiY6OjpaWlqmpqa/v78WFhZmZmavr6/q6uofHx9SUlLZ2dl9fX3Nzc0NDQ3a8w9JAAAEd0lEQVR4nO2dCVbjMBBEadaQZSCEAAlbAgzc/4azMQ8U25HbaqnafvUvkP6PGah0ydbBQUluZytZzW6LfmZJxkv5x3KMHiUP47X8Zz1MxXv54h49TA4e5DsP6HHsmUjIBD2QORc7hhfogaw5ll2O0SPZclkRFLlED2XKqsZwhR7KklmNoMgMPZYdj7WCIo/owawYPzUYPg0l2jw3CIo8o0ezYdMoKLJBD2fBdo+gyBY9ngE3ew1v0OOlc7JXUOQEPWAqdWEmpO/RZh41nKNHTOM0Kihyih4yhdsWgiI93kw1hpmQHkebo1aCIkfoQbty1VJQ5Ao9ajfGrQVF+vnvdH+YCelltDlUCIocosfV86YSFHlDD6xmoTRcoAfWcqcUFLlDj6zjXS0o8o4eWsP0pYPhyxQ9toK2YSakR9GmfZgJ6U200YSZkL5Em9fOhq/o0dvxEDdppBfF6W4VqqMPxeluFaqjB8XpdZKgyDVaIEZ8exjD+XZxVFeF6liN0BJ7qa9CdbguTpuqUB2Oi9Pxh4nhh99ocx+fvhVuz4SlhJkQp9EmLcyE+Iw23QN3FZcR/NxQUOQcrVNFuz2M4W+7GK9CdbgrTttUoTqcFaftqlAdrorTllWoDlfF6TI+bweWaK0vum4PY7jZLm4zCfo5E2YZZkKcRBtdFarDRXFqGbireIjg1mEmxEG00VehOuDFaZcqVAe4OO1UheoAF6fdqlAd0OLUZnsYA7hd7F6F6sBFcKvtYQzYdtFuexgDtF3MG2ZCMNFGe64rBciZsNQqVAegOM0fZkKKR5tR3sBdZV66OLWoQnUULk7LhJmQotGmVJgJKRlt8mwPYxTcLpYLMyHFok3JMBNSKtqknetKodCZsOorLspR5GUa6ee6UihwJmxUMnBXWeSPNvZVqI7sxWmOKlRH5uJ0ivb7Td7tYvMrLsqR9WUa+15xUY5NPsEt2u2TfMWp5qnQnGR74jT2iotyZHqZhvW5rhSynAkbreMfXIx1jmiTuwrVkaE4Lb09jGG/XUQbVbAWzHXsqTvWB6aQX3vrsf4yPPyfYZHGXkOGdv/ybHa0h6Xtd//Fct+Hzc4QT7iNJnZf/08nTh9gm9gUUnMPh9kamFoku7XrdytYrMMd/wT/kP530/sblEfJhk5/x3yRugfw/8aowT+tnvwIm8OH1nYYvmHquoqGeGhIQxriSTX8gRaIQkMa0hAPDWlIQzw0jHGGFogyfMPUp/NpiIeGNKQhHhrSkIZ4Ug29V8A0pCENPUBDGtIQDw1pSEM8NKQhDfHQkIY0xENDGtIQDw1pOHxD/08F0ZCGNMRDQxrSEE+qIfxemSg0pCEN8dCQhjTEk2ro7JLcGmhIQxrioWGMn2iBKDSkIQ3x0JCGhS+Q6wANaUhDPDSkIQ3x0JCGwzfMcKuDMTTsv2HqXcH+t4mpN3b7fy/GNtEw8yWcFrwmCX64vxoh9S7WQ/T4bUi5UMf/3Q9/6X41lO8rZr7R9S/GrAf/CT8Zb+5flHZP65M8V+j8AqgJWbCHOQQGAAAAAElFTkSuQmCC"
                  : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAAB0dHTV1dU5OTn5+fnm5ubHx8fKysqioqJJSUl5eXn4+PgTExNFRUX8/PwbGxukpKQLCwtMTExpaWnBwcERERHa2tokJCSdnZ0dHR1ubm7h4eF+fn5AQEDp6enD/J68AAAEMklEQVR4nO2cCVLjMBBFTWbMmhD2AWa7/y2npij4hMi2ZKv1u13/nUCvgJfWQrpOZPDjmxFssQ+eT4xgi33wXYYylCEdGcpQhnxkKEMZ8pGhDGXIR4YylCEfGcpQhnxkKEMZ8pGhDGXIR4YylCEfGcpQhnxkKEMZ8pGhDGXIR4YylCEfGcpQhnxkKEMZ8pGhDGXIR4YylCEfGcpQhnxkKEMZ8pGhDGXIR4YylCEfGcrQ2LB/2Czk6sbKcOnKNg/9f8VHq/U54PHtp3jBXocZF++/qBv2SozY4G/xkr0WE64/1Wa7Y6/GgN32c1BP2csx4PTwM+OMvZ7qnH39WHxhr6gyL8ef/OsK6uZYsOuu2auqyHVKsNs/sddVjZt90rD7xV5YNU7TgusJ6vmQ4Fom1NthwXUENZlREH9CvR8X7Hr2Apdy108Yhp9QBzMKYgd1JKMg8oQ6mlEQN6hXeYJxJ9TLXMGuj7nlv5nMKIgZ1IyMgohBzcooiBfUi2mpQ6IFNTujIFZQ8zMKtmb3LQaUZBRECurfOYKRglqYURBly585jaaIEdQZGQURtvxTm/px+jv2+id5mpVR4D+oMzMKvAf16IqpHN9BXZBR4DmoE2ejufidUOdMoyncXko9DVwxleP1UqpoUz/OOdslyexpNIXHLX/ipn4JV2yfIxZNoym8BbVWRoGzM9Tdwmk0ha8JtWJGgacJtcI0msLPhFplGk3hZUKtNI2m8BHU9IOnOrgIqkVGgYegmmQU8INqlFHADmrxFVM53KAaZhQwz1DrT6MpiEG1zSjgBdU4o4AVVPOMAk5QG2QUMILaJKOgfVDbZBTsWwd1V+1sNJfWQW2WUdD2DLVhRsFtQ0GzTf047YLaOKPgvpHgspv6JTS65Z9+fm9Hm6ASMgpaBLXqFVM59kFtOo2msL6Uqn7FVI7thGp5NppLb/kOdd670dpYBpWaUWAXVMo0msIqqPSMApugOsgosAiqh4yC/rW6oI+MgvpBdZJRUPvbptxkFNR9NuUoo+BnRUHapn6cerf8rc9Gc9nWEmRu6sepFVR3GQV1guowo6BGUElno7ksD6rTjIKlQfWaUbDwDLXe83s7lj3sd5xRsOSWn3w2msv8oDrPKJh7KfWbvfB85gWVd8VUznZOUF8DZBTMCWqIjILyoAbJKCgNapiMgrKgujobzeVPgaD/aTTFNv9fT72djeaSv+Vf/D/1LHKDGi6jIO8dasCMgpyghswomJ5QI02jKSa/sT9qRsFUUMNmFIwHNXBGwdiE6vKKqZzhoAbPKBgKasxpNMXAl6MMfft9RNJb/mCb+nFSQV1FRsHxhBp6Gk3xNajur5jKOXzYH30aTXFwKeX3pn4JnyfUVWUU4B3qyjIK3t+hri6j4O0daqArpnIuV5pRsH89eV7RNJridK0ZBav8IOTyD4+ZaOoJJcyAAAAAAElFTkSuQmCC"
              }
            ></img>{" "}
            <p className="filterShow">{filter}</p>
          </button>

          {displayFilter && (
            <div className="filter">
              <p className="priceFilter">Ціна:</p>
              <p className="buttonFilter" onClick={choosePriceUp}>За зростанням</p>
              <p className="buttonFilter" onClick={choosePriceDown}>За спаданням</p>
              <p className="buttonFilter" onClick={chooseQuantityFilter}>
                За упаковку
              </p>
              <p className="buttonFilter" onClick={chooseQuantityFilterPack}>
                За пачку
              </p>
            </div>
          )}
        </div>
      </nav>

      <div onClick={() => setDisplay(false)} className="containerProducts">
        {productsInfo}
      </div>
    </div>
  );
}
