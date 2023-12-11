
// console.log(allTagGet)


let allTagGet = document.getElementsByTagName("p");


for(i = 0;i<allTagGet.length; i++)
{
    
    if(i % 2 === 0){
        allTagGet[i].style.backgroundColor = "red";
    }
    else{
        allTagGet[i].style.backgroundColor = "green";
    }
}


