// file path: src/index.js

import renderProfile from './profile/renderProfile';
import './index.css';

const profileData = {
  name: 'Tom',
  location: 'The World',
};

renderProfile(profileData);
