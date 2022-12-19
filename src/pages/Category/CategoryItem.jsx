import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as actions from "../../actions";

function CategoryItem({ item }) {
  const { title, image } = item;
  const history = useHistory();
  const dispatch = useDispatch();

  const getDate = (item) => {
    const { options } = item;
    dispatch(actions.fetchProducSearchStart(null, null, options));
    history.push(`/search/${item.name}`);
  };

  return (
    <div onClick={() => getDate(item)} className="category-item">
      <img className="category-image" src={image} />
      <h3 className="category-title">{title}</h3>
    </div>
  );
}

export default CategoryItem;
