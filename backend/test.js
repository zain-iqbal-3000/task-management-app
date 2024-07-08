const bcrypt = require('bcryptjs');

const password = 'iqbal123';
const hashedPassword = '$2a$10$CvPKIYJtLJTE784.w2832./jFV3yCf2/uOL8XRii/w6EGNUuMTbxK'; // Your hashed password

bcrypt.compare(password, hashedPassword, (err, isMatch) => {
  if (err) {
    console.error('Error comparing passwords:', err);
  } else {
    console.log('Password match:', isMatch);
  }
});
