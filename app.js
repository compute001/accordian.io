
let categories = document.querySelectorAll(".category");

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", function (e) {


    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
        
      }
    });

    buttonName = e.target.dataset.name;
    console.log(buttonName);
    
    if(buttonName === "genre"){
      categories[0].classList.add("active");
      categories[1].classList.remove("active");
      categories[2].classList.remove("active");
      categories[3].classList.remove("active");

    }

    if(buttonName === "order"){
      categories[1].classList.add("active");
      categories[0].classList.remove("active");
      categories[2].classList.remove("active");
      categories[3].classList.remove("active");
    }

    if(buttonName === "ship"){
      categories[2].classList.add("active");
      categories[0].classList.remove("active");
      categories[1].classList.remove("active");
      categories[3].classList.remove("active");
    }

    if(buttonName === "return"){
      categories[3].classList.add("active");
      categories[0].classList.remove("active");
      categories[1].classList.remove("active");
      categories[2].classList.remove("active");
    }
  question.classList.toggle("show-text");
      
  });
});



categories.forEach(function(cat){
  console.log(cat.className);
  cat.addEventListener('click',function(e){
   
    if(e.target.className === "active"){
      e.target.classList.remove("active");
   
    }
    else{
      categories.forEach(content => {
        content.classList.remove("active");
      });
     
      e.target.classList.add("active");

    }
   
  })
})

const header = document.querySelector("header");
console.log(header.innerHTML);

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = header.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    header.classList.add("fixed-nav");
  } else {
    header.classList.remove("fixed-nav");
  }
});



//Code written in Jquery gave a trouble so activated Javascript code


      // $(document).ready(function () {
      //   $(".question").each(function () {
      //     const buttonName = $(this).find(".question-btn").data("name");
      //     $(this)
      //       .find(".question-btn")
      //       .click(function (e) {
      //         $(".question").not(this).removeClass("show-text");
      //         const categories = $(".category");
      //         if (buttonName === "genre") {
      //           categories.eq(0).addClass("active");
      //           categories.eq(1).removeClass("active");
      //           categories.eq(2).removeClass("active");
      //           categories.eq(3).removeClass("active");
      //         } else if (buttonName === "order") {
      //           categories.eq(1).addClass("active");
      //           categories.eq(0).removeClass("active");
      //           categories.eq(2).removeClass("active");
      //           categories.eq(3).removeClass("active");
      //         } else if (buttonName === "ship") {
      //           categories.eq(2).addClass("active");
      //           categories.eq(0).removeClass("active");
      //           categories.eq(1).removeClass("active");
      //           categories.eq(3).removeClass("active");
      //         } else if (buttonName === "return") {
      //           categories.eq(3).addClass("active");
      //           categories.eq(0).removeClass("active");
      //           categories.eq(1).removeClass("active");
      //           categories.eq(2).removeClass("active");
      //         }
      //         $(this).toggleClass("show-text");
      //       });
      //   });
      //   $(".category").each(function () {
      //     $(this).click(function (e) {
      //       if ($(this).hasClass("active")) {
      //         $(this).removeClass("active");
      //       } else {
      //         $(".category").removeClass("active");
      //         $(this).addClass("active");
      //       }
      //     });
      //   });
      //   $(header).scroll(function () {
      //     const scrollHeight = $(this).scrollTop();
      //     const navHeight = $(this).height();
      //     if (scrollHeight > navHeight) {
      //       $(this).addClass("fixed-nav");
      //     } else {
      //       $(this).removeClass("fixed-nav");
      //     }
      //   });
      // });
 
