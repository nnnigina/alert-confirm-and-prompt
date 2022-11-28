let club = 10

let men = alert("Количество мест в клубе всего - " + club)

let occupied = prompt("Сколько мест занято в Холле?")

if (0 < occupied <= club) {
    console.log("Все верно!")
} else {
    alert("Введенные данные не верны!")
}

let calculation = prompt("Отлично! Сколько желающих войти в клуб?")

 if (0 < calculation <= occupied) {
    console.log("Указанное чило соответствует условиям!");

    let vacancies = club - occupied
    let remainder = club - occupied - calculation

let hospitality = confirm("В Холле как-раз " + vacancies + " свободных мест! И останется еще " + remainder + " мест. Хотите войти?")

if (hospitality = true) {
    alert("Рады приветствовать Вас в нашем клубе!")
} else {
    alert("Желаем Вам удачи! Приходите еще!")
}
} else {
    alert("Введенные данные не верны или не достаточно свободных мест")
}
