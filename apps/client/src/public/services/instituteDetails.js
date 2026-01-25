import axios from 'axios';

export async function fetchInstituteDetails(){
    const {data}= await axios.get(`/api/instituteDetails`);
    //console.log(data);
    return data;
}