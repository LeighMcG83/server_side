const newsMiddleware = (req, res, next) => {
    if(!res.locals.partials) res.locals.partials = {};
    res.locals.partials.newsContext = getNewsData();
    next();
  };

//   check if correct method of exporting the above function
  modules.exports = router;