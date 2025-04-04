import userApiService from "../service/userApiService";

const readFunc = async (request, response) => {
    try {
        let data = await userApiService.getAllUser();
        if (data) {
            return response.status(200).json({
                EM: data.DT,
                EC: data.EC,
                DT: data.DT
            })
        }
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            EM: data.EM,
            EC: data.EC,
            DT: []
        })
    }
}



const createFunc = async (request, response) => {
    try {
        let username = request.body.username;
        let email = request.body.email;
        let gpa = request.body.gpa;
        console.log(username);
        console.log(email);
        console.log(gpa);

        if (!username || !email || !gpa) {
            // console.log("You lack information to create new user!");
            return response.status(200).json({
                EM: "Please enter enough information to create user!",
                EC: 1,
                DT: [],
            })
        }

        let data = await userApiService.createUser(username, email, gpa);
        if (data) {
            return response.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT,
            })
        }

    } catch (error) {
        console.log("error of create user func: ", error);
        return response.status(500).json({
            EM: "error from server",
            EC: '-1',
            DT: '',
        })
    }
}



const updateFunc = async (request, response) => {
    try {
        let username = request.body.username;
        let email = request.body.email;
        let gpa = request.body.gpa;
        let id = request.body.id;
        console.log("check dataaaaa:")
        console.log(username);
        console.log(email);
        console.log(id);
        console.log(gpa);

        let data = await userApiService.updateUser(username, email, gpa, id);
        return response.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        })
    } catch (error) {
        console.log("error of update user func: ", error);
        return response.status(500).json({
            EM: "error from server",
            EC: '-1',
            DT: '',
        })
    }
}

const deleteFunc = async (request, response) => {
    try {
        console.log(request.body.id);
        let data = await userApiService.deleteUser(request.body.id);
        return response.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        })
    } catch (error) {
        console.log("error of delete user func:", error);
        return response.status(500).json({
            EM: "error from server",
            EC: '-1',
            DT: '',
        })
    }
};


module.exports = {
    readFunc, createFunc, updateFunc, deleteFunc
}