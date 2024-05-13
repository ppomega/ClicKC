import "./App.css";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Submenu from "./components/SubMenu";
import { useState, useEffect } from "react";
import Banner from "./components/Banner";
import ProdDesc from "./components/productDes";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import SearchOp from "./components/SearchOp";
import Cart from "./components/Cart";
import CheckOut from "./components/checkout";
import Footer from "./components/Footer";

function App() {
  const navi = useNavigate();
  var [cart, setCart] = useState([]);
  var [dat, setD] = useState(null);
  async function fetc() {
    await fetch("http://localhost:8080/")
      .then((res) => res.json())
      .then((data) => {
        setD(data);
      });
  }

  useEffect(() => {
    fetc();
  }, []);
  var [t, setT] = useState(0);
  const [c, setC] = useState(false);
  const [g, setG] = useState(false);
  const [n, setNav] = useState(false);
  const [s, setS] = useState(false);
  const [d, setDO] = useState([null]);
  async function Totala(p) {
    await setT(() => {
      t = p + t;
      return t;
    });
    console.log(t);
  }
  async function Totals(p) {
    await setT(() => {
      t = t - p;
      return t;
    });
    console.log(t);
  }
  // useEffect(() => {
  //   Total();
  // }, [cart]);

  async function CartR(item) {
    await setCart(() => {
      cart = cart.filter((n) => item.name != n.name);

      return cart;
    });
    if (cart.length <= 1) {
      setC(false);
    }
  }
  function rD(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }
  function Carti(item) {
    if (cart.length >= 0) {
      setC(true);
    }
    setCart(() => {
      cart = [...cart, item];
      cart = rD(cart);

      return cart;
    });
  }

  function SearchB(get, set) {
    setDO(set);
    setS(get);
  }

  function DataColl(val) {
    setG(val);
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 5) {
      setNav(true);
      window.scrollTo({ behavior: "smooth" });
    } else {
      setNav(false);
    }
  });
  const [u, setU] = useState({});

  function User(u) {
    setU(u);
    console.log(u);
  }
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-BG">
              <Nav
                user={u}
                fn={DataColl}
                n={n}
                data={dat}
                setter={SearchB}
              ></Nav>
              <Banner></Banner>
              <div className="z-30 max-w-10 rounded-md bg-orange-400 fixed right-96 ">
                {cart.length}
              </div>
              <div className="absolute top-2 left-6 h-1/2  z-30">
                {" "}
                {s ? (
                  d?.map((da) => (
                    <SearchOp s={setS} user={u} da={da}></SearchOp>
                  ))
                ) : (
                  <></>
                )}
              </div>
              <SearchOp se={setS} user={u} s={s} d={d}></SearchOp>

              {/* {g ? (
                dat?.map((d) => <Submenu user={u} data={d}></Submenu>)
              ) : (
                <></>
              )} */}

              <Footer></Footer>
            </div>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              {" "}
              <div className="absolute top-2 left-6 h-1/2  z-30">
                {" "}
                {s ? (
                  d?.map((da) => (
                    <SearchOp s={setS} user={u} da={da}></SearchOp>
                  ))
                ) : (
                  <></>
                )}
              </div>
              <Nav
                user={u}
                fn={DataColl}
                n={n}
                data={dat}
                setter={SearchB}
              ></Nav>
              {cart?.map((item) => (
                <Cart
                  user={u}
                  item={item}
                  pricea={Totala}
                  prices={Totals}
                  t={t}
                  fn={CartR}
                ></Cart>
              ))}
              {c ? (
                <div className="flex justify-evenly font-integral">
                  <button
                    className="rounded-md px-3 py-1 bg-black text-white text-sm font-integral"
                    onClick={(e) => {
                      navi("/login", { state: t });
                    }}
                  >
                    Checkout
                  </button>
                  <div>Total Amount</div>
                  <div></div>INR{t}
                </div>
              ) : (
                <>
                  <img
                    src="./images/emptycart.svg"
                    className="w-1/3 relative top-5 left-96"
                  ></img>
                </>
              )}
            </>
          }
        >
          {" "}
        </Route>
        <Route
          path="/pay"
          element={
            <>
              <div className="absolute top-2 left-6 h-1/2  z-30">
                {" "}
                {s ? (
                  d?.map((da) => (
                    <SearchOp s={setS} user={u} da={da}></SearchOp>
                  ))
                ) : (
                  <></>
                )}
              </div>

              <CheckOut
                user={u}
                fn={DataColl}
                n={n}
                data={dat}
                setter={SearchB}
              ></CheckOut>
            </>
          }
        ></Route>
        <Route path="/login" element={<Login user={User}></Login>}></Route>
        <Route
          path="/product"
          element={
            <>
              {" "}
              <div className="absolute top-2 left-6 h-1/2  z-30">
                {" "}
                {s ? (
                  d?.map((da) => (
                    <SearchOp s={setS} user={u} da={da}></SearchOp>
                  ))
                ) : (
                  <></>
                )}
              </div>
              {dat ? (
                <ProdDesc
                  c={Carti}
                  pricea={Totala}
                  prices={Totals}
                  fn={DataColl}
                  data={dat}
                  setter={SearchB}
                ></ProdDesc>
              ) : (
                <></>
              )}
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <div className="absolute top-10 right-6 h-1/2 bg-BG z-10">
                {" "}
                {s ? (
                  d?.map((da) => (
                    <SearchOp s={setS} user={u} da={da}></SearchOp>
                  ))
                ) : (
                  <></>
                )}
              </div>
              <Nav
                fn={DataColl}
                n={n}
                data={dat}
                user={u}
                setter={SearchB}
              ></Nav>
              <div className="z-30 w-4 h-4 py-0 px-1 text-xs font-Mon rounded-full bg-bermuda fixed top-0 right-96 ">
                {cart.length}
              </div>
              {/* {g ? (<Submenu/>):(<></>)} */}
              <div className="grid grid-rows-12  grid-cols-3 my-4 mx-36 gap-3 col-auto">
                {dat?.map((item) => (
                  <Card
                    user={u}
                    c={Carti}
                    pricea={Totala}
                    prices={Totals}
                    item={item}
                  ></Card>
                ))}
              </div>
              <Footer></Footer>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
