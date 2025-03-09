const Joi = require('joi');

const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const authController = {
    async register() {
        // 1. validate user input
        const userRegisterSchema = Joi.object({
            username: Joi.string().min(5).max(30).required(),
            name: Joi.string().max(30).required(),
            email: Joi.string().email().required(),
            password: Joi.string().pattern(passwordPattern).required(),
            confirmPassword: Joi.ref('password'),
        });

        const {error} = userRegisterSchema.validate(requestAnimationFrame.body);

        // 2. if error in validation -> return error via middleware
        // 3. if email or username is already registered -> return an error
        // 4. password hash
        // 5. store user data in db
        // 6. response send

    },
    async login() { },

}

module.exports = authController;