const logout = (req, res) => {
  try {
    res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/'
      });
    return res.status(200).json({message: "Logout Successful"})
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default logout;
