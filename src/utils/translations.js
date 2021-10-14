export function statusEnglishToSpanish(status){
    if(status == 'pending'){
        return 'Pendiente'
    }
    if(status == 'accepted'){
        return 'Aceptado'
    }
    if(status == 'rejected'){
        return 'Rechazado'
    }
    
}