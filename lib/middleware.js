const newsMiddleware = (req, res, next) => {
    if(!res.locals.partials) res.locals.partials = {};
    res.locals.partials.newsContext = getNewsData();
    next();
  };

//   check f correct method of exporting the above function
  modules.exports = router;