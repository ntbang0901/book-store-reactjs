import "./Rating.scss";

function Rating({ stars = 5 }) {
  const showRating = () => {
    // let stars = product.rating;
    let result = [];
    for (let i = 1; i <= stars; i++) {
      result.push(<i key={i} className="fa fa-star"></i>);
    }
    for (let j = 1; j <= 5 - stars; j++) {
      result.push(<i key={j + stars} className="fa fa-star-o"></i>);
    }
    return result;
  };

  return <div className="rating-star">{showRating()}</div>;
}

export default Rating;
