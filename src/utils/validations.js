import { calculateRutCheckDigit } from "./calculators"
export function ValidatelengthTel(tel) {
    if(tel.trim().length < 9){
        return false
    }else{
        return true
    }
}

export function validateRut(rut) {
    if (rut == '') return 'Ingresa el rut.'
    if (!/^[0-9]+[-|-]{1}[0-9kK]{1}$/.test(rut)) return 'Ingresa el rut con su cadena completa, ejemplo: 12345678-K.'
    else if (calculateRutCheckDigit(rut).toLowerCase() != rut.replace('-', '').toLowerCase()) return 'Ingresa un rut valido.'
    return null
}