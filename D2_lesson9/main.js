// // #8Nmt60ZT
// //
// // – створити блок,
// // – додати йому класи wrap, collapse, alpha, beta
// // – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
// // – додати цей блок в body.
// // – клонувати його повністю, та додати клон в body.
// let htmlDivElement = document.createElement('div');
// htmlDivElement.classList.add('wrap');
// htmlDivElement.classList.add('collapse');
// htmlDivElement.classList.add('alpha');
// htmlDivElement.classList.add('beta');
//
// let cloneNode = htmlDivElement.cloneNode(true);
// document.body.append(htmlDivElement,cloneNode);
//
//
// //     #OPLI89c9G
// // – Є масив:
//     let strings = ['Main','Products','About us','Contacts'];
// // Зробити ul в середині якої будуть лежати елементи масиву
// // (кожен в своєму li)
// let ul = document.createElement("ul");
// for (const string of strings) {
//     let li = document.createElement("li");
//     li.innerText = string;
//     ul.appendChild(li);
// }
// document.body.appendChild(ul)
//
// // #jeBqHV525U5
// // – Є масив
// let coursesAndDurationArray = [
//     { title: 'JavaScript Complex', monthDuration: 5 },
//     { title: 'Java Complex', monthDuration: 6 },
//     { title: 'Python Complex', monthDuration: 6 },
//     { title: 'QA Complex', monthDuration: 4 },
//     { title: 'FullStack', monthDuration: 7 },
//     { title: 'Frontend', monthDuration: 4 }
// ];
// // Для кожного елементу масиву зробити блок, в якому вивести інформацію
// // про title та monthDuration
// // Завдання робити через цикли.
// // for (const item of coursesAndDurationArray) {
// //     let courseDiv = document.createElement('div');
// //
// //     let h2=document.createElement("h2");
// //     h2.innerText = item.title;
// //
// //     let p = document.createElement('p');
// //     p.innerText = 'duration'+' - '+item.monthDuration;
// //
// //     courseDiv.append(h2,p);
// //
// //     document.body.appendChild(courseDiv);
// // }
// // =========================
// //
// //     #Kx1xgoKy8
// // – Є масив
// // За допомоги скріпта для кожного елементу масиву зробити
// // <div class=’item’> ,  в якому буде <h1 class=’heading’>
// // з title  елементу, та <p class=’description’> з monthDuration елементу.
// //     Завдання робити через цикли.
// for (const course of coursesAndDurationArray) {
//     let courseDiv = document.createElement('div');
//     courseDiv.classList.add('item');
//
//     let h1=document.createElement('h1');
//     h1.classList.add('heading');
//     h1.innerText = course.title;
//
//     let p = document.createElement('p');
//     p.classList.add('description');
//     p.innerText = course.monthDuration;
//
//     courseDiv.append(h1,p);
//
//     document.body.append(courseDiv);
// }
// =========
//
// – Є масив coursesArray котрий лежить в arrays.js
// Створити для кожного елементу масиву свій блок,
// блок розділити блоками, в яких будуть зберігатись значення окремих
// властивостей, для властивості modules зробити список з елементами
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
for (const course of coursesArray) {
    let courseDiv = document.createElement('div');
    courseDiv.classList.add('courseBlock');

        let titleDiv = document.createElement('div');

            let h2=document.createElement('h2');
            h2.innerText=course.title;
            titleDiv.appendChild(h2);

        let durationDiv = document.createElement('div');
        durationDiv.classList.add('duration');
        let monthDurationDiv = document.createElement('div');
            let monthItem = document.createElement('p');
            monthDurationDiv.classList.add('durationItem');
            monthItem.innerText='duration'+' - '+course.monthDuration+' '+'month';
            monthDurationDiv.appendChild(monthItem);

        let hourDurationDiv = document.createElement('div');
            let hourItem = document.createElement('p');
            hourDurationDiv.classList.add('durationItem');
            hourItem.innerText=course.hourDuration+' '+'hour';
            hourDurationDiv.appendChild(hourItem);

        durationDiv.append(monthDurationDiv,hourDurationDiv);

        let modulesDiv = document.createElement('div');
        modulesDiv.classList.add('moduleBlock');
            let modulesUl = document.createElement('ul');
            modulesUl.innerText='included:'
                    for (const module of course.modules) {
                        let moduleItem = document.createElement('li');
                        moduleItem.innerText=module;
                        modulesUl.appendChild(moduleItem);
    }
            modulesDiv.appendChild(modulesUl);

    courseDiv.append(titleDiv,durationDiv,modulesDiv);

    document.body.append(courseDiv);

    }
// let ul = document.createElement("ul");
// for (const string of strings) {
//     let li = document.createElement("li");
//     li.innerText = string;
//     ul.appendChild(li);
// }
// document.body.appendChild(ul)


