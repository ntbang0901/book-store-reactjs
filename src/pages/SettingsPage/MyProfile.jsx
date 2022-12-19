import { useState } from "react";
import { useEffect } from "react";
import { getUserByUsername } from "../../services/userService";

function MyProfile({ user, loading }) {
  return (
    <div className="my-profile">
      {loading === false ? (
        <div>
          <h2>Hồ sơ của tôi</h2>
          <h4>Quản lý thông tin hồ sơ để bảo mật tài khoản</h4>
          <div className="form-my-profile">
            <div className="row">
              <div className="col-8">
                <form>
                  <div className="form-group row">
                    <label
                      htmlFor="staticEmail"
                      className="col-sm-2 col-form-label  title-form">
                      <span>Tên đăng nhập</span>
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        readOnly
                        className="form-control-plaintext"
                        id="staticEmail"
                        defaultValue={user?.username}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="inputPassword"
                      className="col-sm-2 col-form-label title-form">
                      <span>Tên</span>
                    </label>
                    <div className="col-sm-10">
                      <input
                        readOnly
                        type="text"
                        className={
                          user === null
                            ? "form-control"
                            : "form-control-plaintext"
                        }
                        defaultValue={user?.ho + " " + user?.ten}
                        id="inputPassword"
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label
                      htmlFor="inputPassword"
                      className="col-sm-2 col-form-label title-form">
                      <span>Email</span>
                    </label>
                    <div className="col-sm-10">
                      <input
                        readOnly
                        type="text"
                        className={
                          user === null
                            ? "form-control"
                            : "form-control-plaintext"
                        }
                        defaultValue={user?.email}
                        id="inputPassword"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="inputPassword"
                      className="col-sm-2 col-form-label title-form">
                      <span>Số điện thoại</span>
                    </label>
                    <div className="col-sm-10">
                      <input
                        readOnly
                        type="text"
                        className={
                          user === null
                            ? "form-control"
                            : "form-control-plaintext"
                        }
                        defaultValue={user?.sdt}
                        id="inputPassword"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="inputPassword"
                      className="col-sm-2 col-form-label title-form">
                      <span>Địa chỉ</span>
                    </label>
                    <div className="col-sm-10">
                      <input
                        readOnly
                        type="text"
                        className={
                          user === null
                            ? "form-control"
                            : "form-control-plaintext"
                        }
                        defaultValue={user?.diachi}
                        id="inputPassword"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="inputPassword"
                      className="col-sm-2 col-form-label title-form"></label>
                    <div className="col-sm-10">
                      <button type="button" className="btn-save-myprofile">
                        Lưu
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-4">
                <div className="form-change-image">
                  <div className="title-image">
                    <img
                      src="https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-6.png"
                      alt="avatar"
                    />
                  </div>
                  <form>
                    <div class="form-group">
                      <label
                        className="lable-btn-change"
                        for="exampleFormControlFile1">
                        Chọn ảnh
                      </label>
                      <input
                        type="file"
                        class="form-control-file"
                        id="exampleFormControlFile1"
                        hidden
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default MyProfile;
