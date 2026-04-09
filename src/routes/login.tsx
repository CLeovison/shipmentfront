import { createFileRoute } from '@tanstack/react-router';
import LoginPage from '../features/login/Login.tsx';

function StandaloneLogin() {
  return <LoginPage />;
}


export const Route = createFileRoute('/login')({
  component: StandaloneLogin,
});