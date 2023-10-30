const { default: Login } = require("../../expensetracker/src/Components/Login/Login");
const SignupSchema = require("../models/SignupModel");
const jwt = require("jsonwebtoken"); // You may need to install and configure a JWT library

exports.getDetails = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Validation: Check if both username and password are provided.
        if (!username || !password) {
            return res.status(400).json({ message: 'Both username and password are required.' });
        }

        // Find the user by username.
        const user = await SignupSchema.findOne({ username });

        // Check if the user exists.
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials. User not found.' });
        }

        // Check if the provided password matches the stored password.
        if (password !== user.password) {
            return res.status(401).json({ message: 'Invalid credentials. Password does not match.' });
        }

        // If both username and password are correct, you can generate a JWT token.
        const token = jwt.sign({ userId: user._id }, 'your-secret-key-here', { expiresIn: '1h' }); // Use a secret key and adjust the expiration time as needed.

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
    console.log(Login)
};
