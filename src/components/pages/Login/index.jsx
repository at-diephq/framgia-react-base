import React from 'react';

function Login() {
  return (
    <div id="login">
      <form className="form-horizontal">
        <div className="form-group">
          <label htmlFor="email" className="col-sm-2 control-label">Email Address</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="email" placeholder="Email" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="pwd" className="col-sm-2 control-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="pwd" placeholder="Password" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <div className="checkbox">
              <label htmlFor="remember">
                <input type="checkbox" id="remember" /> Remember me
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">Sign in</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
