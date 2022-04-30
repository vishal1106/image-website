let searchImages= async(api,value)=>{
    try{

        let res= await fetch(`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${api}`
        );
        let data=await res.json();
return data;
    }
    catch(err){
        console.log(err)
    }
}
let append=(data,container)=>{
    data.forEach(function({alt_description,urls:{small}}){
        let div =document.createElement("div")
        let img=document.createElement("img")
        img.src=small;
        let h3=document.createElement("h3")
        h3.innerText=alt_description;
  div.append(img,h3)
  container.append(div)
    })
}





export {searchImages,append};