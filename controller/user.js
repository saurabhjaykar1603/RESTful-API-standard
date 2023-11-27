import User from "./../models/User.js";

const postApiUser = async (req, res) => {
  const { userName, email, password } = req.body;
  const user = User({
    userName,
    email,
    password,
  });
  try {
    const savedUser = await user.save();
    res.status(200).json({
      success: true,
      data: savedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const putApiUser = async (req, res) => {
  const { id } = req.params;
  const { userName, email, password } = req.body;

  try {
    const updateUser = await User.findOneAndUpdate(
      { _id: id },
      { $set: { userName, email, password } },
      { new: true }
    );

    if (updateUser) {
      res.status(200).json({
        success: true,
        data: updateUser,
        message: "Updated user successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export { postApiUser, putApiUser };
