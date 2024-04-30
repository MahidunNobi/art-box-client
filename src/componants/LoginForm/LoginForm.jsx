import { useContext } from "react";
import { FaGithub, FaGooglePlusG } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";
function LoginForm() {
  const { login, googleLogin, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);
    login(email, password)
      .then((res) => {
        Swal.fire({
          title: "Successfull",
          text: "Logged in successfully ",
          icon: "success",
        });
        form.reset();
        navigate(location.state ? location.state : "/");
      })
      .catch((err) =>
        Swal.fire({ icon: "error", title: "Error!", text: err.message })
      );
  };

  const handleGoogleClick = () => {
    googleLogin()
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Successfull",
          text: "Logged in successfully",
        });
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGithubClick = () => {
    githubLogin()
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Successfull",
          text: "Logged in successfully",
        });
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1 className="dark:text-gray-800">Sign in</h1>
        <div className="social-container">
          <a onClick={handleGoogleClick} href="#" className="social text-xl">
            <FaGooglePlusG />
          </a>
          <a href="#" onClick={handleGithubClick} className="social text-xl">
            <FaGithub />
          </a>
        </div>
        <span className="dark:text-gray-800">or use your account</span>
        <input type="email" placeholder="Email" name="email" />
        <input type="password" name="password" placeholder="Password" />

        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default LoginForm;
