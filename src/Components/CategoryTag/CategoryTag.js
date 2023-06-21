import "./CategoryTag.css";

const CategoryTag = ({ category }) => {
  if (category) {
    return (
      <div className="category">
        <h5>That was a</h5>
        <div className="Category-Tag">
          <h5>{category}</h5>
        </div>
      </div>
    );
  } else {
    return;
  }
};

export default CategoryTag;
