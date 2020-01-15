
     // detect Edge and explorer
     (function detect() {
         if (document.documentMode || /Edge\//.test(navigator.userAgent)) {
            alert('internet explorer is  not currently supported. Please use chrome or firefox.You will be redirected to the previous page');
            history.back();
         } else {
             document.body.style.display = ''

         }
     })();


      //Scroll on click
var layout = document.querySelector(".container");
var btn = document.querySelector('.side__item1');
var sidebar = document.querySelector('.sidebar');
var element = document.querySelectorAll('.element');

//open or close menu
btn.addEventListener('click',function(e)  {
       e.preventDefault();
       sidebar.classList.toggle('newside');
       layout.classList.toggle('new_view');

});
//scroll on click and close menu
     Array.prototype.forEach.call(element ,function(evt){
         evt.addEventListener('click',function(e){
             e.preventDefault();
             layout.classList.remove('new_view');
             sidebar.classList.remove('newside');
         });
     });

  //revert hanburg button when resizing back///
var breakpoint = window.matchMedia("(min-width: 856px");
var removeView = function(x){
    if(x.matches) {
        layout.classList.remove('new_view');
        sidebar.classList.remove('newside');
    }
};
removeView(breakpoint);
breakpoint.addListener(removeView);

/*
var item1 = document.querySelector('.side__item2');
var item2 = document.querySelector('.side__item3');
var item3 = document.querySelector('.side__item4');
var item4 = document.querySelector('.side__item5');
var item5 = document.querySelector('.side__item5');
var item6 = document.querySelector('.side__item7');


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
       var lastId,
       topMenu = $('#sidebar'),
       topMenuHeight = topMenu.outerHeight()+15;

       //all items
      menuItems = topMenu.find("a");
      scrollItems = menuItems.map(function() {
          var item = $($(this).attr("href"));
          if(item.length) {
              return item;
          }
      });

        //Bind to scroll
      $(window).scroll(function() {
           //get container scroll position
          var fromTop = $(this).scrollTop()+topMenuHeight;
          var cur = scrollItems.map(function() {
              if($(this).offset().top<fromTop)
                  return this;
          });
            //get id of current scroll item
          cur = cur[cur.length -1];
          var id = cur && cur.length ? cur[0].id : '';
          if(lastId !==id) {
              lastId = id;
                 //set/remove active class
              menuItems
                  .parent().removeClass("active")
                  .end().filter('[href="#'+ id +'"]').parent().addClass('active');
          }
      });
      menuItems.click(function(e){
          var  href = $(this).attr("href"),
              offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
          console.log($(this));
          $('html, body').stop().animate({
              scrollTop: offsetTop
          }, 1400,"linear");
          e.preventDefault();
      });







