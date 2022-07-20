function info() {
    let name = prompt('Введите ваше имя:');
    let birth = prompt('Введите ваш год рождения');
    let year = prompt('Какой сейчас год?');
    let age = year - birth;
    let infor = (name + ' , Ваш возраст ' + age + ' лет');
    return infor;
}

alert(info());