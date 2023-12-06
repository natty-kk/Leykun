/*==========================typing Animation-=====================*/
var typed = new Typed(".typing",{
    strings:["","","3D Artist", "Graphic Designer", "Video Editor", "Software Engineer", "Youtuber",],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

const nav= document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length;
      for(let i=0; i< totalNavList; i++)
      {
        console.log(navList[i])
      }