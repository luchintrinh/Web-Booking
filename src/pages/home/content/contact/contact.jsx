import "./contact.css";
// liên kết file css của index lấy màu background
import "../../../../index.css";

const Contact = () => {
  return (
    <div className="wrapper__register py-5 text-white">
      <div className="container text-center">
        <div className="register">
          <div className="register__title">
            <h3 className="fs-2 mb-3 fw-bold">Save time, save money</h3>
          </div>
          <div className="register__content">
            <p>Sign up and we'll send the best deals to you</p>
          </div>
          <form className="register__form">
            <input
              type="text"
              className="register__form--input rounded"
              placeholder="Your email"
            />
            <button
              type="submit"
              className="btn btn-primary register__form--button"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
