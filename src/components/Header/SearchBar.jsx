import { useCart } from "../../context/cartContext";
import logo from "../../assets/logo/logo.jpg";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import "./SearchBar.css";
import { Link , useSearchParams } from "react-router-dom";
import { LOGIN } from '../../config/routes/paths';



export const SearchBar = () => {


  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('q') ?? ""

  const handleInput =({target}) => {
    const {value} =  target
    setSearchParams({q : value})
    
  }
  const { cartContext } = useCart();
  const total = cartContext.reduce((acc, curr) => {
    return acc + curr.quantity;
    
  },0);

  return (
    <div className="searchbar_nav">
      <div className="div_logo">
        <Link to={"/"}>
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="search">
        <FaSearch />
        <input type="search" value={query} name="filter" placeholder="Search" onChange={handleInput} />
      </div>
      <div className="div_cart">
       
        <Link to={LOGIN} className="cart-btn">
          <FaShoppingCart />
          <span className="item_total">{total}</span>
        </Link>
      </div>
    </div>
  );
};
