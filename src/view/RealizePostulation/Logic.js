import axios from 'axios'
export default {
  name: 'RealizePostulation',
  setup() {
    //Methods:
    async function sendPostulation() {
      await axios.post("http://localhost:8080/SendPostulation", {
          headers: { "Content-type": "application/json" },
          data: { 
            user_rut: sessionStorage.getItem('user_rut'),  
            workshop_name: workshop_name.value, 
            workshop_number: workshop_number.value,
            workshop_description: workshop_description.value, 
            postulation_message: postulation_message.value
          }
        }).then(function (res) {
          if(res.data.Response == 'Operation Success'){
            alert('Se envio la postulación de su taller, espere a que sea respondido por los moderadores')
          }
        }).catch(function (error) {
          console.log(error);
        });
    }
    //Using:
    return { sendPostulation }
  }
}