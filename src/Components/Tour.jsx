import { useState } from "react";

const Tour = ({ id, image, name, price, info, removeTour }) => {
  const halfInfo = info.substring(0, 200);
  const [readMore, setReadMore] = useState(true);
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {/* {readMore && halfInfo}
          {readMore || info} */}
          {readMore ? `${halfInfo}...` : info}
          {/* {readMore && <button className="info-btn" onClick={() => setReadMore(false)}>Read more</button>}
          {readMore || <button className="info-btn" onClick={() => setReadMore(true)}>Show Less</button>} */}
          <button className="info-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? "read more" : "show less"}
          </button>
        </p>

        <button
          type="button"
          className="btn btn-block delete-btn"
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
