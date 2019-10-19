const { check, validationResult } = require('express-validator');
const { ValidationError } = require('../utils/error');

const studentInfoValidationRules = [
  check('name').not().isEmpty().withMessage('Name is a required field.')
    .trim()
    .escape(),
  check('gender').not().isEmpty().withMessage('Gender is a required field.')
    .trim()
    .escape(),
  check('country').not().isEmpty().withMessage('Country is a required field.')
    .trim()
    .escape(),
  check('email').not().isEmpty().withMessage('Email is a required field.')
    .trim()
    .escape(),
];

const examAnswersValidationRules = [
  check('studentId').not().isEmpty().withMessage('Student ID is a required field.'),
  check('answers').not().isEmpty().withMessage('Answers is a required field.'),
  check('rating').not().isEmpty().withMessage('Rating is a required field.'),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push(err.msg));

  return next(new ValidationError(extractedErrors));
};

module.exports = {
  studentInfoValidationRules,
  examAnswersValidationRules,
  validate,
};
