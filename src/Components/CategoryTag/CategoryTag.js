import "./CategoryTag.css";

const CategoryTag = ({ category }) => {
  if (category) {
    return <div className="Category-Tag">{category}</div>;
  } else {
    return;
  }
};

export default CategoryTag;
