import db from "../models/index";

const validateEmail = email => /^[\w.-]+@[\w.-]+\.\w{2,}$/.test(email);


const checkEmailFound = async (email) => {
    let checkEmailFound = await db.User.findOne({
        where: {
            email: email,
        }
    })
    return checkEmailFound;
}


const getAllUser = async () => {
    try {
        let users = await db.User.findAll();
        let plainUsers = users.map(user => user.dataValues);
        if (plainUsers) {
            console.log(plainUsers);
            return {
                EM: "Get data of all users successfully!",
                EC: 0,
                DT: plainUsers,
            }
        } else {
            return {
                EM: 'Get data of all users successfully!',
                EC: 0,
                DT: [],
            }
        }
    } catch (error) {
        console.log(error);
        return {
            EM: 'Something wrongs with services',
            EC: 1,
            DT: [],
        }
    }
}


const createUser = async (username, email, gpa) => {
    try {
        if (validateEmail(email)) {


            let checkEmailFoundd = await checkEmailFound(email);

            if (checkEmailFoundd) {
                return {
                    EM: 'Email already exist!',
                    EC: 1,
                    DT: [],
                }
            }

            await db.User.create(
                {
                    username: username,
                    email: email,
                    gpa: gpa,
                }
            )
            return {
                EM: 'Create new user successfully!',
                EC: 0,
                DT: [],
            }
        } else {
            return {
                EM: 'Email is not valid!',
                EC: 1,
                DT: [],
            }
        }

    } catch (error) {
        console.log("Error from create new user:", error);
        return {
            EM: 'Something wrongs in services!',
            EC: 1,
            DT: []
        }
    }
};

const updateUser = async (username, email, gpa, id) => {
    try {
        console.log("bbbbadfadsfasdfasdfafds");
        // console.log(username);
        // console.log(email);
        // console.log(id);
        // console.log(gpa);


        let user = await db.User.update(
            { username: username, email: email, gpa: gpa },
            {
                where: {
                    id: id
                }
            }
        )

        if (user) {
            return {
                EM: 'Update user information successfully!',
                EC: 0,
                DT: [],
            }
        }
    } catch (error) {
        console.log(error);
        return {
            EM: 'Something wrong in service!',
            EC: 1,
            DT: [],
        }
    }
};

const deleteUser = async (userId) => {
    try {
        let user = await db.User.findOne({
            where: { id: userId }
        })

        if (user) {
            await db.User.destroy({
                where: { id: userId },
            });
            return {
                EM: 'Delete user successfully!',
                EC: 0,
                DT: [],
            }
        }
    }
    catch (error) {
        console.log(error);
        return {
            EM: 'Something wrong in service!',
            EC: 1,
            DT: [],
        }
    }
};





module.exports = {
    getAllUser, createUser, updateUser, deleteUser
}