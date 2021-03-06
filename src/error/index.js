exports.withErrorHandling = (controller) => {
  return async (req, res, next) => {
    try {
      await controller(req, res);
    } catch (err) {
      next(err);
    }
  };
};

exports.routeNotFound = (req, res) => {
  res.status(404).send({ msg: "Route Not Found" });
};

exports.methodNotAllowed = (req, res) => {
  res.status(405).send({ msg: "Method Not Allowed" });
};

exports.handleCustomErrors = (err, req, res, next) => {
  const { name, value, path } = err;
  if (err.status) res.status(err.status).send({ msg: err.msg });
  else next(err);
};

exports.handle500 = (err, req, res) => {
  res.status(500).send({ msg: "Internal Server Error" });
};
