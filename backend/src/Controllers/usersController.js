const getAllUsers = async (req, res) => {
	res.status(200).send({"message": "all the users"})
}

const getUserById = async (req, res) => {
	res.status(200).send({"message": "stronk"})
}

module.exports = { getAllUsers, getUserById }
