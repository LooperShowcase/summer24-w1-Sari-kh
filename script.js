console.log("sari")
console.log( 15)

const images= document.getElementById("images")
const resultdiv= document.getElementById("result")


const rnd=Math.random()>0.5
const arr =[rnd,!rnd]


let id=(Math.random()*6+1)*10000
id=Math.floor(id)

const fakeimg="https://thispersondoesnotexist.com/"
const realimg=`https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`
const again=document.createElement("button")
again.innerText='play again'
again.onclick=function()
{
    location.reload()
}
for(x of arr )
{ 
    const img1 = document.createElement("img")
    img1.src=(x ? realimg: fakeimg)
    images.append(img1)  
    img1.onclick=function(){
    resultdiv.innerText=x?'correct🍕':'not correct🍔'
    resultdiv.append(again)  
}}





