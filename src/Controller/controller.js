import { openDb } from '../configDB.js'



//creates
export async function createRegister(){
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Register '+
                '(idRegister INTEGER PRIMARY KEY,'+
                'name VARCHAR(100),'+
                'email VARCHAR(100),'+
                'password VARCHAR(50),' +
                'birth date DEFAULT "0000-12-25");');
    })
}
export async function createCodes(){
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Codes '+
                '(idCode INTEGER PRIMARY KEY,'+
                'code VARCHAR(18) UNIQUE);');
    })
}
export async function createGames(){
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Games '+
                '(idGame INTEGER PRIMARY KEY,'+
                'name VARCHAR(100),'+
                'price double);');
    })
}
export async function createPurchases() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Purchases (' +
            'idBuy INTEGER PRIMARY KEY, ' +
            'idRegister INTEGER, ' +
            'idGame INTEGER, ' +
            'FOREIGN KEY (idRegister) REFERENCES Register(idRegister), ' +
            'FOREIGN KEY (idGame) REFERENCES Games(idGame)' +
            ')');
    });
}
export async function createAll(){
    createRegister();
    createGames();
    createCodes();
    createPurchases();
    console.log("Tabelas Register, Games, Codes e Purchases criadas.")
}




//Inserts

export async function insertRegister(req, res){
    let registers = req.body;
    openDb().then(db => {
        db.run('INSERT INTO Register(name, email, password, birth)'+
                'VALUES(?,?,?,?)', [registers.name, registers.email, registers.password, registers.birth]);
       
    })
}
export async function insertGames(req, res){
    let games = req.body;
    openDb().then(db => {
        db.run('INSERT INTO Games (name, price)'+
                'Values(?,?)', [games.name, games.price]);
    })
}
export async function insertCodes(req, res){
    let codes = req.body;
    openDb().then(db => {
        db.run('INSERT INTO Codes(code)'+
        'VALUES(?)', [codes.code]);
    })
}




//updates

export async function updateRegister(req, res) {
    let registers = req.body;
    openDb().then(db => {
        db.run('UPDATE Register SET name=?, email=?, password=?, birth=? WHERE idRegister=?',
        [registers.name, registers.email, registers.password, registers.birth, registers.idRegister]
        );
    });
}
export async function updateCodes(req, res) {
    let codes = req.body;
    openDb().then(db => {
        db.run('UPDATE Codes SET code=? WHERE idCodes=?',
            [codes.code, codes.idCode]
        );
    });
}
export async function updateGames(req, res) {
    let games = req.body;
    openDb().then(db => {
        db.run('UPDATE Games SET name=?, price=? WHERE idGame=?',
            [games.name, games.price, games.idGame]
        );
    });
}



//Selects
//register
export async function selectRegister(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM Register')
        .then(register => res.json(register))
    });
}
export async function selectRegisterId(req, res) {
    let idRegister = req.body.idRegister;
    openDb().then(db => {
        db.get('SELECT * FROM Register WHERE idRegister=?',
        [idRegister])
        .then(register => res.json(register))
    });
}
//games
export async function selectGames(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM Games')
        .then(games => res.json(games))
    });
}
export async function selectGamesId(req, res) {
    let idGame = req.body.idGame;
    openDb().then(db => {
        db.get('SELECT * FROM Games WHERE idGame=?',
        [idGame])
        .then(games => res.json(games))
    });
}
//codes
export async function selectCodes(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM Codes')
        .then(codes => res.json(codes))
    });
}
export async function selectCodesId(req, res) {
    let idCode = req.body.idCode;
    openDb().then(db => {
        db.get('SELECT * FROM Codes WHERE idCode=?',
        [idCode])
        .then(codes => res.json(codes))
    });
}



//Deletes

export async function deleteRegister(req, res) {
    let idRegister = req.body.idRegister;
    openDb().then(db => {
        db.run('DELETE FROM Register WHERE idRegister=?',
        [idRegister])
        .then(register => register)
    });
}
export async function deleteGames(req, res) {
    let idGame = req.body.idGame;
    openDb().then(db => {
        db.get('DELETE FROM Games WHERE idGame=?',
        [idGame])
        .then(games => games)
    });
}
export async function deleteCodes(req, res) {
    let idCode = req.body.idCode;
    openDb().then(db => {
        db.get('DELETE FROM Codes WHERE idCode=?',
        [idCode])
        .then(codes => codes)
    });
}

