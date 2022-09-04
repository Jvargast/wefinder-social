const verifyRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req?.user.role) return res.sendStatus(401);
        const rolesArray = [...allowedRoles];
        const result = rolesArray.map(role => {if(role === req.user.role){ return true;}})
        if (!result) return res.sendStatus(401);
        next();
    }
}

module.exports = verifyRoles