import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";
import Navbar from "./Navbar";
import { GoogleLogout } from "react-google-login";
import axios from "axios";

const DashBoard = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [BlogData, setBlogData] = useState([]);
  const [search, setSearch] = useState("");

  const responseGoogle = (response) => {
    setUserData(response);
    setIsSignedIn(true);
  };

  const logout = () => {
    setIsSignedIn(false);
    setUserData(null);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const contentSearchHandler = () => {
    const ApiToken = "f21dda2ec90511c88dd53be91a8039b8";
    axios
      .get(`https://gnews.io/api/v4/search?q=${search}&token=${ApiToken}`)
      .then((res) => setBlogData(res.data.articles));
  };

  useEffect(() => {
    const ApiToken = "f21dda2ec90511c88dd53be91a8039b8";
    axios
      .get(`https://gnews.io/api/v4/search?q=technology&token=${ApiToken}`)
      .then((res) => setBlogData(res.data.articles));
  }, []);

  return (
    <div>
      {isSignedIn ? (
        <>
          <Navbar
            username={userData.profileObj.givenName}
            pic={userData.profileObj.imageUrl}
          />
          <div
            className="float-end"
            style={{ position: "relative", top: "-55px" }}
          >
            <GoogleLogout
              clientId="278684078466-n0du6qfnto4v9c0p9t62o7819ffvkl71.apps.googleusercontent.com"
              buttonText="Logout"
              onLogoutSuccess={logout}
            ></GoogleLogout>
          </div>
          <div className="container-fluid">
            <div className="input-group mb-3 d-flex justify-content-center">
              <input type="text" className="w-50 rounded" value={search} onChange={searchHandler} />
              <button type="button" className="btn btn-primary" onClick={contentSearchHandler}>Search</button>
            </div>
          </div>
          <div>
            <div 
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {BlogData.map((el) => (
                <div class="card m-5 rounded shadow-lg mb-5 bg-body rounded" style={{ width: "24rem" }}>
                  <img src={el.image} class="card-img-top" alt="blog News" />
                  <div class="card-body">
                    <h5 class="card-title">{el.title}</h5>
                    <p class="card-text">{el.description}</p>
                    <a
                      href={el.url}
                      class="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div>
          <Navbar />
          <div className="Homepage text-center mt-5  ">
            <h1 className="text-center">📗</h1>
            <h1 className="text-decoration-underline">
              A Readers favourite place!
            </h1>
            <p>
              We provide high quality online resource for reading blogs. Just
              sign up and start reading some quality blogs.
            </p>
          </div>
          <div className="text-center">
            <GoogleLogin
              clientId="278684078466-n0du6qfnto4v9c0p9t62o7819ffvkl71.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
