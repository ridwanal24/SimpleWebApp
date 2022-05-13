document.querySelectorAll('.input-datee').forEach(inputDate => {
    inputDate.addEventListener('focus', e => {
        e.target.type = "date"
        e.target.value = e.target.getAttribute('date-data')
    })

    inputDate.addEventListener('focusout', e => {
        e.target.type = "text"

        e.target.value = e.target.value != '' ? formatDate(e.target.value) : ''
    })

    inputDate.addEventListener('change', e => {
        e.target.setAttribute('date-data', e.target.value)

    })


})

function formatDate(date) {
    const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    date = new Date(date)

    return `${dayName[date.getDay()]}, ${date.getDate()} ${monthName[date.getMonth()]} ${date.getYear() + 1900}`
}
