const services = require('./studyList.services');

const get = (req, res, next) => {
  const { lang } = req.params;
  services.get(lang, (err, studyList) => {
    if (err) {
      return next(err);
    }

    res.locals.data = studyList;
    return next();
  });
};

module.exports = {
  get,
};
