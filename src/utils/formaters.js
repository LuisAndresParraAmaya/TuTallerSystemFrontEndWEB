export function formatDateTime(datetime){
    let date = datetime.split('T', 1)[0]
    let time = datetime.split('T', 2)[1]
    const year = date.split('-', 1)[0]
    const month = date.split('-', 2)[1]
    const day = date.split('-', 3)[2]
    const hourminute = time.split(':', 1)[0]+':'+time.split(':', 2)[1]
    return day+'/'+month+'/'+year+' '+hourminute
}

//Add the hyphen "-" to the Rut
export function formatRut(rut) {
    const checkDigitPos = rut.length - 1
    return [rut.slice(0, checkDigitPos), '-', rut.slice(checkDigitPos)].join('')
}

//Only returns the numbers that pertains to the Rut
export function deformatRutNumber(rut) {
    return rut.replace('-', '').replace(/k/gi, '0')
}