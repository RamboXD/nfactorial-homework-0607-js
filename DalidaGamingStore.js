import {cout, buy} from './Games.js';
console.log("Далида:");
console.log('\n-Қош келдіңіз!');
let games = [];

let game = {
        name: 'CS:GO',
        cost: 6000,
    }
    game.type = 'атыспақ';
    
    games.push(game);
    
    games.push({
        name: 'VALORANT',
        cost: 2000,
        type: 'атыспақ'
    })

    games.push({
        name: 'MINECRAFT',
        cost: 1000,
        type: 'құрыспақ'
    })

    games.push({
        name: 'DOTA 2',
        cost: 2500,
        type: 'ұрыспақ'
    })
    games.push({
        name: 'League of Legends',
        cost: 1500,
        type: 'ұрыспақ'
    })
    games.pop();
let genres = ['атыспақ', 'құрыспақ', 'ұрыспақ']

cout(genres);

console.log("Қай жанр ұнайды және қандай бағада керек?");
// ---------------------------------------------
let koshelok = {
    money: 5000,
    likes: 'атыспақ'
}
// ------------------------------------------------------
console.log("\nСатып алушы:");
console.log(`\n-Жанр `+ koshelok.likes + `, қалтамда ${koshelok.money}`);
console.log("\nДалида:");
let can_obtain = games.filter((game) => game.cost <= koshelok.money);
let can_obtain_names = can_obtain.map(function (obtain){
    return  obtain.name;
})
buy(...can_obtain_names)
let recommend = can_obtain.filter((game) => game.type === koshelok.likes);
let recommend_names = recommend.map(function (reco){
    return  reco.name;
})
const existing = recommend_names.length ? console.log("\n-Олай болса" , ...recommend_names, "алуға кеңес беремін") : console.log("\n-Кешіріңіз сіздің іздегеніңіз табылмады");
const smile = recommend_names.length ?? true;
if(smile == true){
    console.log(':)');
}else{
    console.log(':(');
}