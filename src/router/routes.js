import Home from 'Home';
import Login from 'Login';
import Logout from 'Logout';
import Profile from 'Profile';
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
    component: Profile,
    navText: 'Profile',
    path: '/profile',
  },
  {
    id: 10,
    private: true,
    component: Logout,
    navText: 'Logout',
    path: '/logout',
  },
  {
    id: 11,
    component: Settings,
    navText: 'Settings',
    path: '/settings',
  },
];
