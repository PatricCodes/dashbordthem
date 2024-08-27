
// PLEAESE THIS IS THE CODE OF DASHBOARD 
// DO NOT TOUCH ON THIS CODE
// WEB DEVELOPER IRAGUHA PATRICK 



const asidehide = document.querySelector(".right-icon");

const container = document.getElementById("ctn");
const asidebar = document.getElementById("bar");

// const id01 = document.querySelector(".id01");
// const id01d = document.querySelector(".id01d ");

// const id02 = document.querySelector(".id02");
// const id02d= document.querySelector(".id02d ");

// const id03 = document.querySelector(".id03");
// const id03d = document.querySelector(".id03d ");

// const id04 = document.querySelector(".id04");
// const id04d = document.querySelector(".id04d ");

// console.log(id01 );
// console.log(id01d );
// var a = 8;

// // asider bar hiden an show

asidehide.addEventListener("click", function(){
    if ( container.style.gridTemplateColumns !== "0px 1fr"){
        container.style.gridTemplateColumns = "0px 1fr";
        asidebar.style.display = "none";
    }else{
         
        container.style.gridTemplateColumns = "250px 1fr";
        asidebar.style.display = "block";
    }
    // container.style.gridTemplateColumns = "250px1fr";
    // asidehide.classList.toggle("hidden");
});

// // drop down in sider bar

// id01.addEventListener("click", function(){

//     if(id02d.classList.toggle("hidden") || id03d.classList.toggle("hidden") ){
//         id02d.classList.remove("hidden");
//         id03d.classList.remove("hidden");
//         // id04d.classList.remove("hidden");

//         id01d.classList.toggle("hidden");
//     }else{
//         id01d.classList.toggle("hidden");
//     }
// });

// id02.addEventListener("click", function(){
//     if( id01d.classList.toggle("hidden") || id03d.classList.toggle("hidden") || id0d.classList.toggle("hidden")){

//         id01d.classList.remove("hidden");
//         id04d.classList.remove("hidden");
//         id03d.classList.remove("hidden");
//         // id04d.classList.remove("hidden");

//         id02d.classList.toggle("hidden");

//     }else{
//         id02d.classList.toggle("hidden");
//     }
// });

id03.addEventListener("click", function(){
    if( id01d.classList.toggle("hidden") || id02d.classList.toggle("hidden") || id04d.classList.toggle("hidden")){

        id01d.classList.remove("hidden");
        id02d.classList.remove("hidden");
        // id04d.classList.remove("hidden");

        id03d.classList.toggle("hidden");
    }else{
        id03d.classList.toggle("hidden");
    }
});

id04.addEventListener("click", function(){
    if( id01d.classList.toggle("hidden") || id02d.classList.toggle("hidden") || id03d.classList.toggle("hidden")){

        id01d.classList.remove("hidden");
        id02d.classList.remove("hidden");
        id03d.classList.remove("hidden");
        id04d.classList.toggle("hidden");
    }else{
        id04d.classList.toggle("hidden");
    }
});

