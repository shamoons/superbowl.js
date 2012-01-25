exports.example = function(req, res, next) {
  res.render('index.jade', {
    title: "Superbowl.js"
  });
};