const newsMiddleware = (req, res, next) => {
  if (!res.locals.partials) res.locals.partials = {};
  res.locals.partials.newsContext = getNewsData();
  next();
};

const flashMiddleware = (req, res, next) => {
  // if there's a flash message, transfer
  // it to the context, then clear it
  res.locals.flash = req.session.flash;
  delete req.session.flash;
  next();
};

//   check if correct method of exporting the above function
module.exports = {
  newsMiddleware: newsMiddleware,
  flashMiddleware: flashMiddleware
};