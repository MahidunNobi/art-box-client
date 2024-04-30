import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { FaGithub, FaGooglePlusG } from "react-icons/fa";
import Swal from "sweetalert2";
import auth from "../../Firebase/Firebase.config";
import { AuthContext } from "../../context/AuthContext";
function SignUpForm() {
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
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1 className="dark:text-gray-800">Create Account</h1>
        <div className="social-container">
          <a onClick={handleGoogleClick} href="#" className="social text-xl">
            <FaGooglePlusG />
          </a>
          <a href="#" onClick={handleGithubClick} className="social text-xl">
            <FaGithub />
          </a>
        </div>
        <span className="dark:text-gray-800">
          or use your email for registration
        </span>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="photo_url" placeholder="Photo Url" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
