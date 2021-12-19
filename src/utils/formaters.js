export function formatDateTime(datetime){
    let date = datetime.split('T', 1)[0]
    let time = datetime.split('T', 2)[1]
    const year = date.split('-', 1)[0]
    const month = date.split('-', 2)[1]
    const day = date.split('-', 3)[2]
    const hourminute = time.split(':', 1)[0]+':'+time.split(':', 2)[1]
    return day+'/'+month+'/'+year+' '+hourminute
}
