const { signup, login} = require('../Controllers/AuthController');
const { signupValidation, loginValidation} = require('../Middlewares/AuthValidation');
const router = require('express').Router();
const UserModel = require('../Models/User');


router.post('/login',loginValidation, login);
router.post('/signup', signupValidation, signup);


// DELETE route to remove a user by ID (for example)
router.delete('/deleteUser/:id', async (req, res) => {
    try {
      const user = await UserModel.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting user', error });
    }
  });
  
// // user updates name 
router.put("/update-profile/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await UserModel.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "User not found." });
    }
    const updatedData = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedData);
    res.status(200).json({ message: "User Updated successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});



module.exports = router;