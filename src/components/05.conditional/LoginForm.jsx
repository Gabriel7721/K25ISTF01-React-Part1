const LoginForm = () => {
  return (
    <>
      <form action="#">
        <label htmlFor="email">Enter your email:</label>
        <input id="email" name="email" type="text" />
        <label htmlFor="password">Enter your password:</label>
        <input id="password" name="password" type="password" />
      </form>
    </>
  );
};

export default LoginForm;
