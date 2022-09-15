import './Books.css';
import Adding from './Adding';

const Books = (props) => {
  const { title, author } = props;
  return (
    <div className="bks_main_cont">
      <div className="books_container">
        <div>{title}</div>
        <div>{author}</div>
        <button type="button" className="bks_btn">Remove</button>
      </div>
      <Adding />
    </div>
  );
};

export default Books;
