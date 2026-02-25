import AdminPage from "./AdminPage";
import LoginForm from "./LoginForm";

const isLogged = () => (Math.random() < 0.5 ? <AdminPage /> : undefined);

const CheckLogin = () => {
  //   return <div>{isLogged() ? <AdminPage /> : <LoginForm />}</div>;
  return <div>{isLogged() || <LoginForm />}</div>;
};

export default CheckLogin;
