const me = {};

// -------- 1) For Each
me.forEach = (value, callback) => {
    for(let i = 0; i < value.length; i++){
        callback(value[i]);
    }
}
// -------- 2) Filter
me.filter = (value, callback) => {
    let index = [];
    for(let i = 0; i < value.length; i++){
        if (callback(value[i])){
            index.push(value[i]);
        }
    }
    if(index.length){
        return index;
    }
}
// -------- 3) Map
me.map = (value, callback)=>{
    let index = [];
    for(let i = 0; i < value.length; i++){
        index.push(callback(value[i]));
    }
    return index;
}
// -------- 4) Find
me.find = (value, callback) => {
    for(let i = 0; i < value.length; i++){
        if (callback(value[i])){
            return value[i];
        }
    }
}
// -------- 5) FindIndex
me.findIndex = (value, callback) => {
    let index = [];
    let positionIndex;
    for(let i = 0; i < value.length; i++){
        if (callback(value[i])){
            index.push(i);
        } 
    }
    if(index.length > 0){
        positionIndex = index[0]; 
        return positionIndex;
    } else {
        positionIndex = -1; 
        return positionIndex;
    }
}
// -------- 6) Contains
me.contains = (value, callback) => {
    let index = [];
    for(let i = 0; i < value.length; i++){
        if (callback(value[i])){
            index.push(i);
        } 
    }
    if(index.length > 0){
        return true;
    } else {
        return false;
    }
}
// -------- 7) Pluck
me.pluck = (value, item) =>{
    let newArray = [];
    for(let i = 0; i < value.length; i++){
        newArray.push(value[i][item]);
    } 
    return newArray;
}
// -------- 8) Without
me.without = (value, a, b, c, d, e, f, g, h, i, j, k, l, m, n, ñ, o, p) => {
    let callback2 = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, ñ, o, p];
    let callback = [];
    for(let i = 0; i < callback2.length; i++){
        if(callback2[i]){
            callback.push(callback2[i]);
        }
    }
    for(let i = 0; i < value.length; i++){        
        value[i];
        let t = 0;
        do{
            if(value[i] == callback[t]){
                value.splice(i, 1);    
            } 
            t += 1;
        }while( t < callback.length);
    }
    return value;
}

export default me;