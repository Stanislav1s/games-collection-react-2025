import useNavigate from "react-router";
import useForm from "../../hooks/useForm.js";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext.jsx";

export default function Register() {
  const navigate = useNavigate();
  const { registerHandler } = useContext(UserContext);

  const registerSubmitHandler = async (values) => {
    const { email, password, confirmPass } = values;

    if (!email || !password) {
      alert("Email and password are required!");
      return;
    }
    if (password !== confirmPass) {
      alert("password missmatch");
      return;
    }
    try {
      await registerHandler(email, password);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };
  const { register, formAction } = useForm(registerSubmitHandler, {
    email: "",
    password: "",
    confirmPass: "",
  });
  return (
    <section id="register-page" className="content auth">
      <form action={formAction} id="register">
        <div className="container">
          <div className="brand-logo" />
          <h1>Register</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            {...register("email")}
          />
          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            name="password"
            id="register-password"
            placeholder="Password"
            {...register("password")}
          />
          <label htmlFor="con-pass">Confirm Password:</label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder="Repeat Password"
            {...register("confirmPass")}
          />
          <div>
            <button>
              className="btn submit" type="submit" defaultValue="Register"
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
