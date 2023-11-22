import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
    const created_token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
    return created_token;
}
