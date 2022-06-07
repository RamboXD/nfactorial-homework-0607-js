function cout(genres){
    console.log("Дүкеннен табатылатын ойын жанрлары:");
    for(let i in genres){
        i++;
        console.log(`${(i)}.`,genres[--i]);
    }
} 
function buy(...can_obtain){
    console.log("Сіз сатып ала аласыз:", can_obtain);
}
export {cout, buy};