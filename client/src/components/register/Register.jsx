import { useNavigate } from "react-router";
import useForm from "../../hooks/useForm.js";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext.jsx";

export default function Register() {
  const navigate = useNavigate();
  const { registerHandler } = useContext(UserContext);

  const registerSubmitHandler = async (values) => {
    const { email, password, rePass } = values;

    if (!email || !password) {
      alert("Email and password are required!");
      return;
    }
    if (password !== rePass) {
      alert("password missmatch");
      return;
    }
    try {
      const res = await registerHandler(email, password);
      console.log("submit fired");
      console.log(res);

      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };
  const { register, formAction } = useForm(registerSubmitHandler, {
    email: "",
    password: "",
    rePass: "",
  });
  return (
    <section id="register-page" className="content auth">
      <form id="register" action={formAction}>
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
            name="rePass"
            id="rePass"
            placeholder="Repeat Password"
            {...register("rePass")}
          />
          <div>
            <button
              lassName="btn submit"
              type="submit"
              value="Register"
            ></button>
          </div>
        </div>
      </form>
    </section>
  );
}
