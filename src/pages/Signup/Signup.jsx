import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { FaGithub, FaGooglePlusG } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../Firebase/Firebase.config";
import { AuthContext } from "../../context/AuthContext";

const Signup = () => {
  const navigate = useNavigate();
  const { createUser, googleLogin, githubLogin } = useContext(AuthContext);

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo_url = form.photo_url.value;
    const password = form.password.value;

    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password should contain at least 6 character.",
      });

      // text: "Password should contain at least 6 character.",
      return;
    } else if (!/[A-Z]/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password should contain at least one Uppercase Character.",
      });
      return;
    } else if (!/[a-z]/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password should contain at least one Lowercase Character.",
      });
      return;
    }

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo_url,
        })
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Successfull",
              text: "New user created successfully",
            });
            navigate(location.state ? location.state : "/");
          })
          .catch((err) => {
            console.log(err);
          });
        form.reset();
      })
      .catch((err) => {
        console.log(err);
      });
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
          <h1 className="text-5xl font-bold">Signup</h1>
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
            {/*------------ Name ---------- */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                className="input input-bordered text-white"
                placeholder="Name"
                required
              />
            </div>
            {/* ---------Email------------- */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered text-white"
                required
              />
            </div>
            {/* ---------Photo URL----------- */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                name="photo_url"
                className="input input-bordered text-white"
                placeholder="photo_url"
                required
              />
            </div>

            {/* -----------Password-------- */}
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
              Already have an account? Login{" "}
              <Link className="text-blue-600" to="/login">
                here
              </Link>
            </p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
