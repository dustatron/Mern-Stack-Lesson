const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

// @route   POST api/users
// @d esc    Register route
// @access  Public
const errorsArray = [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check(
    'password',
    'Pleae enter a password with 6 or more characters'
  ).isLength({ min: 6 }),
];

router.post('/', errorsArray, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  res.send('User route');
});

module.exports = router;
