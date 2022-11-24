import { Navigate, Outlet } from 'react-router-dom';
import WelcomePageView from '../features/welcome/WelcomePageView';

const ExposedPage = () => {
  const isActive = window.localStorage.getItem('isActive');
  return isActive ? <Navigate to="transaction" replace /> : <WelcomePageView />;
};

export default ExposedPage;
