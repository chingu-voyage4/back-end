const Joi = require('joi');
const JWT = require('jsonwebtoken');

module.exports = {
    validateBody: schema => (req, res, next) => {
        const result = Joi.validate(req.body, schema);
        if (result.error) {
            console.log(result.error);
            return res.status(400).json(result.error);
        }

        if (!req.value) {
            req.value = {};
        }

        req.value['body'] = result.value;

        return next();
    },

    schemas: {
        authSchema: Joi.object().keys({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            imageUrl: Joi.string(),
            name: {
                first: Joi.string().required(),
                last: Joi.string().required()
            }
        })
    },

    isAuthorized: (req, res, next) => {
        const { userId } = req.params;
        const { authorization } = req.headers;

        const decodedToken = JWT.decode(authorization, { complete: true });
        const userSub = decodedToken.payload.sub;

        if (userId !== userSub) {
            return res.status(401).json({ message: "Nope, you can't go there", route: '/' });
        }

        return next();
    }
};
