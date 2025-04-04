// file lưu chữ điều hướng thông thường 
import express from "express";
import userController from "../controller/userController";

const router = express.Router();


// param: express app
/**
*
@param {*} app: express app
*/


const initApiRoutes = (app) => {

    // user route
    router.get("/user/read", userController.readFunc);
    router.post("/user/create", userController.createFunc);
    router.put("/user/update", userController.updateFunc);
    router.delete("/user/delete", userController.deleteFunc);


    return app.use("/api/v1/", router);
}

export default initApiRoutes;
