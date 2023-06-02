import { useState } from "react";
import { Button } from "react-bootstrap";

const Brand = () => {
  return (
    <div className="d-flex justify-content-between">
      <div className="item">Booking Website</div>
      <div className="item">
        <button className="btn btn-light me-2">Đăng ký</button>
        <button className="btn btn-light">Đăng Nhập</button>
      </div>
    </div>
  );
};
export default Brand;
