const multer = require('multer');
const bcrypt = require('bcrypt');
const base64 = require("js-base64");
const cloudinary = require("cloudinary");
const jwt = require("jsonwebtoken");
const userModel = require('../model/userModel.js');
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
    secure: true,
});
const uploader = multer({ storage: multer.memoryStorage() });
const signup = async (req, res) => {
    console.log(req.body)
    // console.log(req.file.buffer)
    try {
        let email = req.body.email;
        let password = req.body.password;
        let name = req.body.name;
        const exist = await userModel.findOne({ email: email });
        if (exist) {

            return res.status(401).json({ message: 'User already exist' });
        }
        let picture = null
        //converting the file data to base64 string format require by the cloudinary
        //let stringdata = base64.encode(req.file.buffer);

        // cloudinary.v2.uploader.upload(
        //     `data:${req.file.mimetype};base64,${stringdata}`,
        //     function (err, result) {
        //         if (err) {
        //             console.log(err)
        //             res.send('error: ' + err.message)
        //         }
        //         imgurl = result.secure_url
        //         console.log(result)

        //     }
        // );

        const salt = bcrypt.genSaltSync(4);
        password = bcrypt.hashSync(password, salt);
        //console.log(password)
        let response = await userModel.create({ name, email, password, picture });
        if (response) {
            res.status(200).send('user signup successful');
        } else {
            throw new Error
        }

    } catch (err) {

        res.status(501).send(err.message);
    }
}

const login = async (req, res) => {
    try {
        let matchUser = await userModel.findOne({ email: req.body.email });
        //console.log(matchUser)
        let matchPassword = bcrypt.compareSync(req.body.password, matchUser.password); // true
        if (matchUser && matchPassword) {
            let email = matchUser.email;
            let SECRET = process.env.SECRET
            const payload = { email, isLogged: true };
            //Signing and generating the token
            const token = jwt.sign(payload, SECRET, { expiresIn: '1D', algorithm: 'HS384' })
            return res.json({
                accessToken: token,
                message: "Successfult Logged IN"
            })
                .status(200)
        } else {
            res.status(404).json({
                message: 'User not found'
            })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
module.exports = { signup, uploader, login };