const toggleCollapse = document.querySelector('.toggle-collapse span');
const nav = document.querySelector('.nav');


//On Click event for toggle span tag
toggleCollapse.onclick = () => {
    nav.classList.toggle("collapse");
}



// owl-carousel
const responsive = {
    320:{
        items: 1
    },
    560:{
        items: 2
    }

}

$(document).ready(function(){

    
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText:["<i class='fa-solid fa-circle-arrow-left fa-3x'></i>", "<i class='fa-solid fa-circle-arrow-right fa-3x'></i>"],
        responsiveClass:true,
        responsive: {
            0:{
                items: 1
            },

            320:{
                items: 1
            },
            560:{
                items: 2
            },
            960:{
                items: 3
            }
        }
    });
    //Scroll to the top
    $(".up span").click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
  });

    //AOS instance
   AOS.init({
    mirror: true
   });

    
});
