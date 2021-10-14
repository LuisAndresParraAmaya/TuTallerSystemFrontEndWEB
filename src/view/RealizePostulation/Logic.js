import axios from 'axios'
import { ValidatelengthTel } from '../../utils/validations'
export default {
  name: 'RealizePostulation',
  setup() {
    //Methods:
    async function sendPostulation() {
      const inputs = [
        {name: 'Nombre taller', value: workshop_name.value},
        {name: 'Telefono', value: workshop_number.value},
        {name: 'Descripción taller', value: workshop_description.value},
        {name: 'Mensaje', value: postulation_message.value}
      ]
      for(let input of inputs){
        if(input.value.trim().length == 0){
          alert('Debe rellenar el campo: '+input.name)
          return
        }
      }
      if(!ValidatelengthTel(workshop_number.value)){
        alert('Debe ingresar el numero de telefono completo, ejemplo: 912345678')
        return
      }
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