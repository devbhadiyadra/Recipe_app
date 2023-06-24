import axios from "axios";
const URL="http://localhost:8085"


class API{

    add_basic_data(data){
        return axios.post(URL+"/AddRecipe",data)
    }
    ingrideints_data(data){
        return axios.post(URL+"AddRecipe",data)
    }

    steps(data){
        return axios.post(URL+"AddRecipe",data)
    }
    
    // (email) {
    //     return axios.post(URL + "/user/resetPassword", null, {
    //       params: {
    //         email: email
    //       }
    //     });
    //   }
    
}

export default new API