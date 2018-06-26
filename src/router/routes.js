import Home from 'Home';
import Login from 'Login';
import Logout from 'Logout';
import Rate from 'Rate';
import Settings from 'Settings';

export default [
  {
    id: 0,
    login: true,
    component: Login,
    navText: 'Login',
    path: '/',
  },
  {
    id: 1,
    private: true,
    component: Home,
    navText: 'Homepage',
    path: '/home',
  },
  {
    id: 2,
    private: true,
    component: Rate,
    navText: 'Rate',
    path: '/rate',
  },
  {
    id: 3,
    component: Settings,
    navText: 'Settings',
    path: '/settings',
  },
  {
    id: 4,
    component: Logout,
    navText: 'Logout',
    path: '/logout',
  },
];
