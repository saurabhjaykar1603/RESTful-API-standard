const getApiHealth = async (req, res) => {
  res.status(200).json({
    success: true,
    status: "ok",
  });
};

export { getApiHealth };
