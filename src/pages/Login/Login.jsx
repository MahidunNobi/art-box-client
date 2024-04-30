import { useContext } from "react";
import { FaGithub, FaGooglePlusG } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login, googleLogin, githubLogin } = useContext(AuthContext);
  const location = useLocation();

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
        navigate(location.state ? location.state : "/");
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
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="hero min-h-screen dark:bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl dark:bg-base-100 rounded-md overflow-hidden">
          <form className="card-body" onSubmit={handleOnSubmit}>
            <div className="social-container m-0">
              <a
                onClick={handleGoogleClick}
                href="#"
                className="border rounded-full text-xl"
              >
                <FaGooglePlusG />
              </a>
              <a
                href="#"
                onClick={handleGithubClick}
                className="border rounded-full text-xl"
              >
                <FaGithub />
              </a>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered text-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered text-white"
                required
              />
            </div>
            <p className="text-center dark:text-gray-600">
              Don&apos;t have an account? Sign up{" "}
              <Link className="text-blue-600" to="/signup">
                here
              </Link>
            </p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
