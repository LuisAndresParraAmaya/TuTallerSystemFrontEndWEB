import axios from 'axios'
export default {
    name: "FormTransBank",
    async setup(){
        let data = await axios.post("http://localhost:8080/RealizePay",{
                headers: {
                    "Content-type": "application/json" 
                },
                data:{
                    "sessionId": 58,
                    "rut": 195915741,
                    "amount": 3535
                }
            }
        ).then((res)=>{
            return res.data
        })
        return { data }
    }
}