export const notFoundPage = (req, res, next) => {
  res.status(404).json({ data: "Not Found page" });
};
