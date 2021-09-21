// file path: /profile/index.js

// экспортируйте printProfile как именной export

export const printProfile = (profileData) => {
  console.log('implementation for printProfile');
  const { name, company } = profileData;
  console.log(`${name} from ${company}`);
};
