import React from "react";

export default function LoginAndRegister() {
  return (
    <div className="container">
      <div className="form-container">
        <h2 className="form-title">Star Messenger</h2>
        <div className="tab-control">
          <h3 className="active tab-control-btn login">Sign in</h3>
          <h3 className="tab-control-btn register">Sign up</h3>
        </div>
        <div class="login-form form active">
          <form action method="POST">
            <input
              type="text"
              id="username"
              className="txt-input border"
              placeholder="Username"
            />
            <input
              type="password"
              id="password"
              className="txt-input border"
              placeholder="Password"
            />
            <button type="submit" className="btn btn-login border">
              Sign in
            </button>
          </form>
        </div>

        <div className="register-form form">
          <form action method="POST">
            <input
              type="text"
              id="username"
              className="txt-input border"
              placeholder="Username"
            />
            <input
              type="password"
              id="password"
              className="txt-input border"
              placeholder="Password"
            />
            <input
              type="password"
              id="password"
              className="txt-input border"
              placeholder="Re Password"
            />
            <select name="gender" className="txt-input border gender-select" id>
              <option value="true">Male</option>
              <option value="false">Female</option>
            </select>
            <label htmlFor="image">
              <img
                src="../img/user-male.jpg"
                className="image-profile"
                alt=""
              />
            </label>
            <input type="file" id="image" className="image-file" />
            <button type="submit" className="btn btn-login border">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
