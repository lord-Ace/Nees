var currrenttime = new Date
var hours = currrenttime.getHours()
var minutes = currrenttime.getMinutes()
var timeFormat = hours +':'+minutes
document.getElementById("clock").innerHTML = timeFormat
const currentYear = document.getElementById("year")
currentYear.textContent = new Date().getFullYear()
document.getElementById('dropdown').addEventListener('click', function(){
    var dp = document.getElementById('dropdown').nextElementSibling
    dp.dis
})
// var languageOptions = Array(document.getElementsByClassName())
// const nav = Array(document.getElementsByClassName('nav'))
// nav.forEach(element => {
//     addEventListener('change', function(){
//         var tech = 'TECH'
//         var id = document.getElementById(tech)
//         console.log('hello world', id)
//     })
//     //  addEventListener('click', function(){
//     //     console.log('hello world')
//     // })
// });