const e = require('express');
const { words } = require('../data/words');

// write your handlers here...
const getWordID=(req,res)=>{
    let id=req.params.id;
    let word=words.filter((el)=>el.id===id);

    res.json({status:200, message:word})
}
const number=(min, max)=>{
    return Math.floor(Math.random() * (max - min) + min);
}
const getWord=(req,res)=>{
    let id=number(1000, 1009).toString();
    let word=words.filter((el)=>el.id===id);
    res.json({status:200, message:word});
}
const getIndices=(arr, val)=>{
    var index = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        index.push(i);
    }
    return index;
}
const playGame=(req,res)=>{
    const id=req.params.id;
    const letter=req.params.letter;
    let wordObj=words.filter((el)=>el.id===id);
    let word=wordObj[0].word;
    let newArr=new Array(parseInt(wordObj[0].letterCount));
    newArr.fill(false);
    if(word.includes(letter)){
        let wordarr=word.split('');
        let getIndex=getIndices(wordarr,letter);
        getIndex.forEach(index=>newArr[index]=true);
        return res.json({status:200, message:newArr})
    }
    else{
        return res.json({status:200, message:"Letter not found"});  
    }
}

module.exports={ getWordID, getWord, playGame }