import Login from "../pages/Login/Login";
import { useRoutes } from 'react-router-dom';

const AppRouter = () => {
  const element = useRoutes([
    { path: "/login", element: <Login /> },

  ]);
  return element;
};

export default AppRouter;
