
const handleProfileGet = (req, res, knex) => {
    const { id } = req.params;
    knex.select('*').from ('users').where({id})
        .then(user => {
            if (user.length){
                res.json(user[0])
            } else {
                res.status(400).json('Not Found')
            }
    })
        .catch(err => res.status(400).json('Unable to get user'))
}

const handleProfileUpdate = (req, res, knex) => {
    const { id } = req.params;
    const { name, age, pet } = req.body.formInput;
    knex('users')
        .where({ id })
        .update({ name })
        .then(resp => {
            if(resp){
                res.json("success")
            } else {
                res.status(400).json('Unable to Update')
            }
        })
        .catch(err => res.status(400).json("Error updating user"))
}

module.exports = {
    handleProfileGet: handleProfileGet,
    handleProfileUpdate: handleProfileUpdate
}