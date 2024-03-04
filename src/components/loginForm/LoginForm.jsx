import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const loginData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(login(loginData));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <br />
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
