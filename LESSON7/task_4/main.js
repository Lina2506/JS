// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

function Client(id, name, surname , email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clients = [
    new Client(1, 'Vitalina', 'vita', 'vita@com', '+39098098', ['jnkn', 'jknkm', 'jnkjn']),
    new Client(2, 'Paul', 'paulozzy', 'paulozzycom', '+37658798', ['efdsa', 'fdcyx', 'fdcx']),
    new Client(3, 'Svitlana', 'lana', 'lana@com', '+3654767', ['dffsd', 'dcas', 'dcas']),
    new Client(4, 'Margarita', 'rita', 'rita@com', '+32335678', ['dfcasd', 'jknkm', 'dcdsfc']),
    new Client(5, 'Anna', 'neuta', 'neuta@com', '+333446567', ['dcadcsa', 'dfc', 'dcdc']),
    new Client(6, 'John', 'jonny', 'jonny@com', '+345576', ['dvvx', 'dvx', 'dfvcx']),
    new Client(7, 'David', 'dave', 'dave@com', '+3457568', ['dvx', 'dfvscxv', 'hdkjcl']),
    new Client(8, 'Mishel', 'mich', 'mich@com', '+543645787', ['dvxx', 'dfvc', 'ojvlökjn']),
    new Client(9, 'Sandra', 'sun', 'sun@com', '+3455766879', ['dvcx', 'dcx', 'dvjcl']),
    new Client(10, 'Makar', 'makarena', 'makarena@com', '+323356', ['ldkmclö', 'dcycx', 'djvc']),
];
console.log(clients);