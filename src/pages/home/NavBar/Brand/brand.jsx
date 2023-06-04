const Brand = () => {
  return (
    <div className="d-flex justify-content-between brand">
      <div className="brand__item">Booking Website</div>
      <div className="brand__item">
        <button className="btn btn-light me-2 brand__item--register">
          Đăng ký
        </button>
        <button className="btn btn-light brand__item--login">Đăng Nhập</button>
      </div>
    </div>
  );
};
export default Brand;
