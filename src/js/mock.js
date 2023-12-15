//Random Boolean. Рандомизируется случайное число и сравнивает его с 0.5. Возвращает либо true, либо false.
const getRandomBoolean = () => {
    return Math.random() < 0.5
}

//Random Date
const getRandomDate = (firstDate = new Date(1970, 0, 1), lastDate = new Date()) => {
    return new Date(firstDate.getTime() + Math.random() * (lastDate.getTime() - firstDate.getTime()));
}

//Random Num
const getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const getRandomText = () => {

    const arrText = ['Веницианский карнавал танцев и богохульных плясок: смотрим вместе',
        'Солнцестоим вместе или как провести выходные продуктивно',
        'Бредовые макеты и как с ним работать: спитч о проблемах друзей-фронтендеров',
        'Аукцион: лоснящаяся шкура золотого дракона Монина. Что скрывается в повале офиса Нагатино?',
        'К посещению приглашаются сотрудники 18-',
        'Если вы люите солнце и стоять - то данный курс вам очень подойдет. Мы вместе будем стоять и смотреть на солнце. Чистый кайф.',
        'Что делать если в дизайне, который вам отправил дизайнер написаны бредовые тексты? Посмеяться?! Это что для вас шуточки?!',
        'Если у вас еще осталась зарплата - приходите, мы будем рады ее забрать']
    return arrText[getRandomNum(0, arrText.length - 1)]
}

const getRandomName = ()  =>{
    const firstNames = ['Петр', 'Василий', 'Николай', 'Олег', 'Павел']
    const lastNames = ['Иванов', 'Петров', 'Гагарин', 'Сюткин', 'Грозный']
    let maxFirstNames = firstNames.length - 1;
    let maxLastNames = lastNames.length - 1
    return firstNames[Math.round(Math.random()*maxFirstNames)] + ' ' +  lastNames[Math.round(Math.random()*maxLastNames)];
}

const createEvent = () =>{
    return {
        date: getRandomDate(),
        title: getRandomText(),
        description: getRandomText(),
        countLikes: getRandomNum(0, 50),
        names: getRandomName(),
        registrationDisabled: getRandomBoolean()
    };
}

export const createEventList = () => {
    const eventList = [];
    for (let i = 0; i<10; i++){
        eventList.push(createEvent());
    }
    console.log('event = ',eventList);
    return eventList;
}

