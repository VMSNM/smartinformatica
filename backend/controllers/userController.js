import bcrypt from 'bcryptjs';
import User from '../models/UserModel.js'
import generateTokenAndSetCookie from '../utils/helpers/generateTokenAndSetCookie.js';

const getUsers = async (req, res) => {
    try {
        let users;
        users = await User.find().select('-password').select('-updatedAt');

        if (!users) return res.status(400).json({ error: 'No users found' });
        res.status(200).json(users)
    } catch (error) {
        console.log("Error in getUsers controller", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

const signupUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) return res.status(400).json({ error: "Username and password required" });

		const user = await User.findOne({ $or: [{ username }] });
		if (user) {
            console.log(user)
			return res.status(400).json({ error: "User already exists" });
		}
        if (password.length < 4) return res.status(400).json({ error: "Password must have at least 4 characters" });

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = new User({
			username,
			password: hashedPassword
		});
		await newUser.save();

        if (newUser) {
            generateTokenAndSetCookie(newUser._id, res);
            res.status(201).json({
                _id: newUser._id,
                username: newUser.username,
            })
        } else {
            res.status(400).json({ error: 'Invalid user data'});
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log('Error in sinupUser: ', error.message)
    }
}

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) return res.status(400).json({ error: "Username and password required" });

        const user = await User.findOne({ username });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || '');

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({error: 'Invalid username or password'})
        }
        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            role: user.role,
            profilePic: user.profilePic,
            watchlists: user.watchlists,
            portfolios: user.portfolios
        });

    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log('Error in loginUser: ', error.message)
    }
}

const logoutUser = (req, res) => {
    try {
        res.cookie('jwt', '', {maxAge: 1})
        res.status(200).json({message: 'Logged out successfully'})
    } catch (error) {
        console.log("Error in logout controller", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

export { signupUser, loginUser, logoutUser, getUsers };