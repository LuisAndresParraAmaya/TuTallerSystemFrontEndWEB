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
export function subscriptionNameEnglishToSpanish(status){
    if(status == 'basic'){
        return 'Plan Básico'
    }
    if(status == 'monthly'){
        return 'Mensual'
    }
}