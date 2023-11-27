import User from "./../models/User.js";

const postApiUser = async (req, res) => {
  const { userName, email, password } = req.body;
  const user =  User({
    userName,
    email,
    password    
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

export { postApiUser };
