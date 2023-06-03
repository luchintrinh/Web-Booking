import "./filter.css";
const Filter = () => {
  return (
    <div className="filter bg-warning px-2 py-3 rounded-3">
      <h2 className="filter__title mb-3 fs-3">Search</h2>
      <form className="filter__form">
        <label htmlFor="des" className="w-100 info">
          <span className="py-2 ">Destination</span>
          <br />
          <input className="w-100" type="text" id="des" />
        </label>
        <br />
        <label htmlFor="date" className="w-100 info">
          <span className="py-2 ">Check in date</span>
          <br />
          <input type="text" id="date" className="w-100" />
        </label>
        <div className="options">
          <h2 className="options__title fs-5">Options</h2>
          <table className="mx-auto">
            <tbody>
              <tr>
                <td className="pe-5">
                  <span>Min price per night</span>
                </td>
                <td>
                  <input type="number" id="min" />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Max price per night</span>
                </td>
                <td>
                  <input type="number" id="max" />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Adult</span>
                </td>
                <td>
                  <input type="number" id="adult" />
                </td>
              </tr>

              <tr>
                <td>
                  <span>Children</span>
                </td>
                <td>
                  <input type="number" id="children" />
                </td>
              </tr>
              <tr>
                <td>
                  <span>room</span>
                </td>
                <td>
                  <input type="number" id="room" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="btn btn-primary mt-3 w-100 py-2">Search</button>
      </form>
    </div>
  );
};

export default Filter;
