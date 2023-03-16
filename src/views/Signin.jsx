import "primeicons/primeicons.css";
import { Toast } from "primereact/toast";
import { useRef } from "react";
import supabase from "../services/supabase";
import { useNavigate } from "react-router-dom";
import crossfit_games from "../assets/Crossfit_games.jpeg";

const Signin = () => {
  const toast = useRef(null);
  const navigate = useNavigate();

  const infoError = (message) => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: message,
      life: 3000,
    });
  };

  const handleSignIn = async (event) => {
    event.preventDefault();

    const formElements = event.target.elements;
    let { data, error } = await supabase.auth.signInWithPassword({
      email: formElements[0].value,
      password: formElements[1].value,
    });
    if (data.user) {
      localStorage.setItem("userData", JSON.stringify(data.user));
      navigate("/");
    }
    if (error) {
      infoError(error.message);
    }
  };

  const needToSignUp = () => {
    navigate("/signup");
  };
  return (
    <div className="signin--container">
      <Toast ref={toast} />
      <div className="signin--container__text">
        <h1 className="app--title">
          PERSONAL RECORD TRACKING
          <i
            className="pi pi-bolt"
            style={{ fontSize: "15px", marginLeft: "5px" }}
          ></i>
        </h1>
        <h2 className="header--title">
          CrossFit, "Man Muscles," and the Feminine Ideal
        </h2>
        <p className="quote">
          “She literally has man muscles.” The above is a comment left on a
          YouTube video featuring female CrossFit Games athletes. Women
          completing feats of physical prowess so grand and varied that their
          ability to accomplish them can mean only one thing: They’re really
          freaking fit. But the last time I checked, “fit” wasn’t synonymous
          with “masculine.”
        </p>
        <p className="crossfitGames__photo">
          <img className="crossfitGirl--photo" src={crossfit_games} />
        </p>
        <p className="footer--slogan">
          “Not only does CrossFit make people fit, but arguably we make them
          fitter faster and more safely than any other program out there. Our
          results are universal, predictable, and repeatable. Our methodology
          works for everyone, can be scaled for anyone, and the results accrue
          over the long term.”
        </p>
      </div>
      <div className="signin--container__form">
        <div className="background--form">
          <div className="wrapper">
            <span
              className="pi pi-user"
              style={{ color: "#fff", fontSize: "40px", paddingTop: "35px" }}
            />
            <h1 className="header--signin">Signin</h1>
          </div>
          <form className="signin--form" onSubmit={handleSignIn}>
            <div className="input--style">
              <span className="pi pi-envelope" />
              <input
                type="email"
                placeholder="Email"
                id="email"
                className="email"
              />
            </div>
            <div className="input--style">
              <span className="pi pi-lock" />
              <input
                type="password"
                className="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <button
              onClick={needToSignUp}
              aria-label="Doesn't have an account?"
              className="account--question"
            >
              <span className="account--question">
                Doesn't have an account?
              </span>
            </button>
            <button
              type="submit"
              label="Signin"
              severity="help"
              className="signin--button"
            >
              Signin
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;

import "../scss/signin.scss";
