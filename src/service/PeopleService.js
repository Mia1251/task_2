import axios from "axios";
const baseURL="https://localhost:7128/People";

class PeopleService{
    findAllPeople=async()=>{
        return await axios.get(baseURL).then(response =>response);   
    };
    
    getPersonById = async (id) => {
        return await axios.get(baseURL + '/' + id).then(response => response);
    };
    
    savePerson = async (data) => {
        return await axios.post(baseURL, data).then(response => response);
    };
    
    updatePerson = async (data) => {
        return await axios.put(baseURL, data).then(response => response);
    };
    
    deletePersonById = async (id) => {
        return await axios.delete(baseURL +'/' + id).then(response => response);
    };

}
export default PeopleService;