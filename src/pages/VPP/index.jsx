import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SliderListItem from "../../components/layouts/components/SliderListItem";
import { getProductsApi } from "../../services/productService";

function VPP() {
  const products = useSelector((state) => state.product.products);
  const [loading, setLoading] = useState(false);
  const [vpps, setVpps] = useState([]);

  const FecthData = async () => {
    try {
      let res = await getProductsApi(null, null, null, null, {
        loaisanphamid: 1,
      });
      if (res.data.error === 0) {
        setLoading(false);
        setVpps(res.data.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    setLoading(true);
    FecthData();
  }, []);
  console.log(vpps);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <SliderListItem title={"Văn phòng phẩm"} productList={vpps} />
      )}
    </>
  );
}

export default VPP;
