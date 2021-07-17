import React from "react";

const Navbar = ({ username, pic }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            Hindustan News 💬{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
            style={{display: "flex !important ",
                flexDirection: "row" ,
                justifyContent: "flex-end"}}
          >
            <div>
              <img
                src={pic}
                alt="pic"
                className="img-fluid rounded-circle "
                style={{ width: "50px", height: "50px" , marginRight:"20px"}}
              />
            </div>

            <div>
              <h4 className="text-light navbar-brand" aria-current="page" href="/#"    style={{marginRight:"140px"}}>
                {username}
              </h4>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
