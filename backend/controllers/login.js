const SignupSchema = require("../models/SignupModel");
const jwt = require("jsonwebtoken"); // You may need to install and configure a JWT library

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;


    try {console.log(username)
        console.log(password)
        const user = await SignupSchema.findOne({ username: username });
        // const userpassword = await SignupSchema.findOne({ password: password });
        
        
        if (!username) {
            return res.status(401).json({ message: 'Invalid credentials. User not found.' });
        }
        if (!user.username || !password) {
            console.log('sdgouawojsrl')
            return res.status(400).json({ message: 'Both username and password are required.' });
            
        }
          // Check if the user exists.
        

        // Check if the provided password matches the stored password.
        if (password !== user.password) {
            console.log('wrpjgein');
            console.log(user.password)
            console.log(password)
            return res.status(401).json({ message: 'Invalid credentials. Password does not match.' });
            
            
        }
        

        // If both username and password are correct, you can generate a JWT token.
        const token = jwt.sign({ userId: user._id }, 'yoursecretkeyhere', { expiresIn: '1h' }); // Use a secret key and adjust the expiration time as needed.

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        // res.status(500).json({ message: 'Server Error' });
        res.status(500).json({ error: error.message });
    }
    
};
