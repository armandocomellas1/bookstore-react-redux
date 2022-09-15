import './Adding.css';

const Adding = () => {
  return (
    <div className="add_main_cont">
      <form className="adds_container">
        <hr />
        <h2>ADD NEW BOOK</h2>
        <div className="form_container">
          <input type="text" placeholder="Book title" />
          <select name="cars" id="cars" form="carform">
            <option value="volvo">Author</option>
          </select>
          <button type="button">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
};

export default Adding;
