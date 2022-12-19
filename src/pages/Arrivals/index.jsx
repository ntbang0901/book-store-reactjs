import { useSelector } from "react-redux";
import SliderListItem from "../../components/layouts/components/SliderListItem";

function Arrivals() {
  const products = useSelector((state) => state.product.products);

  // useEffect(() => {
  //   dispatch(actions.fetchProductStart());
  // }, [dispatch]);
  return <SliderListItem title={"new Arrivals"} productList={products} />;
}

export default Arrivals;
