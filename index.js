// Code your solutions in this file

function writeCards(names,word){
    let thankYouMessages=[]
    for(let i=0;i<names.length;i++){
        thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${word} gift!`)

    }
    return thankYouMessages 
}

function countDown(n){
    while (n>=0){
        console.log(n)
        n=n-1
    } 
}