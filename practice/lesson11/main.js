let form = document.forms [0];
form.onsubmit = function (ev) {
    ev.preventDefault();
    // стягуємо input, які є:
    let userId = this.userId.value;
    // перевіряємо, чи є значення стрінгою:
    // console.log(userId.match(/\d/g));

    // стягуємо title:
    let title = this.title.value;
    let body = this.body.value;
    // console.log(!!body.match(/(\w+\s){3,}/g));
    // console.log(userId, title, body);
    if (!!userId.match(/[0-9]/g) && !!body.match(/(\w+\s){3,}/g)) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

    }


}
