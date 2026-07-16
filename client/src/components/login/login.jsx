import { useContext } from "react";
import { useNavigate } from "react-router";
import useForm from "../../hooks/useForm.js";
import UserContext from "../../contexts/UserContext.jsx";

export default function Login() {
  const navigate = useNavigate();
  const { loginHandler } = useContext(UserContext);
  const submitHandler = async ({ email, password }) => {
    if (!email || !password) {
      alert("Email and password are required!");
    }

    try {
      await loginHandler(email, password);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };
  const { register, formAction } = useForm(submitHandler, {
    email: "",
    password: "",
  });

  return (
    <section id="login-page">
      <form action={formAction} id="login">
        <div className="container">
          <h1>Login</h1>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required=""
            {...register("email")}
          />
          <label htmlFor="login-pass">Password</label>
          <input
            type="password"
            id="login-password"
            name="password"
            placeholder="Password"
            required=""
            {...register("password")}
          />
          <input type="submit" className="btn submit" defaultValue="Login" />
        </div>
      </form>
    </section>
  );
}
