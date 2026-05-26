import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default function Root() {
  return (
    <div className="max-w-[1920px] mx-auto px-10 bg-mist-50 min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
}