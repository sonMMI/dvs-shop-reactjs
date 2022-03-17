import React from 'react';
import './styles.scss';

NotFound.propTypes = {};

function NotFound(props) {
  return (
    <div className="banner">
      <div className="banner__top"></div>
      <div className="banner__bottom"></div>
      <div className="error">
        <div className="error__person">
          <img
            src="https://salt.tikicdn.com/assets/img/404/super.png"
            alt="personImage"
          />
        </div>
        <div className="error__image">
          <img
            src="https://salt.tikicdn.com/assets/img/404/404.png"
            alt="404Image"
          />
        </div>
        <div className="error__content">
          <h3>Xin lỗi, trang bạn đang tìm kiếm không tồn tại!</h3>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
