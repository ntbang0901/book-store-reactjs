import { useDispatch, useSelector } from "react-redux";
import ListSlider from "./ListSlider";
import "./SliderListItem.scss";

function SliderListItem({ title, productList }) {
  // useEffect(() => {
  //   dispatch(actions.fetchProductStart());
  // }, [dispatch]);
  return (
    <section className="arrivals" id="arrivals">
      <div className="container">
        <h1 className="heading">
          <span className="title">{title}</span>
          <button className="btn-more-item">Xem thêm</button>
        </h1>

        <ListSlider products={productList} />
      </div>
    </section>
  );
}

export default SliderListItem;
