//https://api.unsplash.com/search/photos
//per_page
//YOUR_ACCESS_KEY
let api="d250aImWd0nB6C4oKukIREw4yeVFp8F6pcUr-CAEf9g";
import {navbar} from "../components/navbar.js";
let n=document.getElementById("navbar");
n.innerHTML=navbar();

import {searchImages,append} from "./fetch.js";

let search =(e)=>{
    if(e.key==="Enter")
    {  document.getElementById("container").innerText=null;
        let value=document.getElementById("query").value;
        searchImages(api,value).then((data)=>{
            console.log(data)
            let container=document.getElementById("container");
            append(data.results,container);
        });
    }
}
document.getElementById("query").addEventListener("keydown",search);
let categories=document.getElementById("categories").children;

for(let el of categories)
{
    el.addEventListener("click",csearch)
}


function csearch(){
    document.getElementById("container").innerText=null;
    searchImages(api,this.id).then((data)=>{
        console.log(data)
        let container=document.getElementById("container");
        append(data.results,container);
    });
}













// let searchImages= async ()=>{
//     let query=document.getElementById("query").value;
//     try{

//         let res= await fetch(`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${api}`
//         );
//         let data=await res.json();
// console.log(data)
//     }
//     catch(err){
//         console.log(err)
//     }
// }