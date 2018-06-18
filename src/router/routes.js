import Home from 'Home';
import Login from 'Login';
import Profile from 'Profile';

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
    id: 8,
    component: Profile,
    navText: 'Settings',
    path: '/settings',
  },
];
