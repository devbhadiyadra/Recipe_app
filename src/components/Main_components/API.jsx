import axios from "axios";
const URL="http://localhost:8085"
class API{
    addData_API(data){
        return axios.post(URL+"/AddRecipe",data)
    }
}

export default new API