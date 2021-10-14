export function ValidatelengthTel(tel) {
    if(tel.trim().length < 9){
        return false
    }else{
        return true
    }
}