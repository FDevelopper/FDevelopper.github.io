
      //Scroll on click
let layout = document.querySelector(".container");
let btn = document.querySelector('.side__item1');
let sidebar = document.querySelector('.sidebar');
let element = document.querySelectorAll('.element');

//open or close menu
btn.addEventListener('click',e => {
       e.preventDefault();
       sidebar.classList.toggle('newside');
       layout.classList.toggle('new_view');

});
//scroll on click and close menu
element.forEach((evt)=>{
    evt.addEventListener('click',e=>{
        e.preventDefault();
        layout.classList.remove('new_view');
        sidebar.classList.remove('newside');
    });
});
  //revert hanburg button when resizing back///
let breakpoint = window.matchMedia("(min-width: 856px");
let removeView = (x)=>{
    if(x.matches) {
        layout.classList.remove('new_view');
        sidebar.classList.remove('newside');
    }
};
removeView(breakpoint);
breakpoint.addListener(removeView);

/*
let item1 = document.querySelector('.side__item2');
let item2 = document.querySelector('.side__item3');
let item3 = document.querySelector('.side__item4');
let item4 = document.querySelector('.side__item5');
let item5 = document.querySelector('.side__item5');
let item6 = document.querySelector('.side__item7');


item1.addEventListener('click',e=>{
       e.preventDefault();
       document.querySelector('.homes').scrollIntoView({ behavior: 'smooth' });
});

item2.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector('.footer').scrollIntoView({ behavior: 'smooth' });
});

item3.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector('.features').scrollIntoView({ behavior: 'smooth' });
});

item4.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector('.gallery').scrollIntoView({ behavior: 'smooth' });
});

item5.addEventListener('click',e=>{
    e.preventDefault();
    document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' });
});

item6.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector('.header').scrollIntoView({ behavior: 'smooth'});
});*/

     //animate on scroll
       let lastId,
       topMenu = $('#sidebar'),
       topMenuHeight = topMenu.outerHeight()+15;

       //all items
      menuItems = topMenu.find("a");
      scrollItems = menuItems.map(function() {
          let item = $($(this).attr("href"));
          if(item.length) {
              return item;
          }
      });

        //Bind to scroll
      $(window).scroll(function() {
           //get container scroll position
          let fromTop = $(this).scrollTop()+topMenuHeight;
          let cur = scrollItems.map(function() {
              if($(this).offset().top<fromTop)
                  return this;
          });
            //get id of current scroll item
          cur = cur[cur.length -1];
          let id = cur && cur.length ? cur[0].id : '';
          if(lastId !==id) {
              lastId = id;
                 //set/remove active class
              menuItems
                  .parent().removeClass("active")
                  .end().filter('[href="#'+ id +'"]').parent().addClass('active');
          }
      });
      menuItems.click(function(e){
          let  href = $(this).attr("href"),
              offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
          console.log($(this));
          $('html, body').stop().animate({
              scrollTop: offsetTop
          }, 1400,"linear");
          e.preventDefault();
      });







