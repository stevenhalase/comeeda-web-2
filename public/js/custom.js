$(document).ready(function() {
  // $('.information-content .item').each(function(index) {
  //   $(this).click(function(e) {
  //     $(e.target.previousElementSibling).toggleClass('open-text')
  //     e.target.dataset.item == '+' ? e.target.dataset.item = '-' : e.target.dataset.item = '+';
  //   })
  // })

  $('.process-content .item').each(function(index) {
    $(this).click(function(e) {
      console.log(typeof $(e.target).data().image, e)
      $('.process-content .item').each(function(index) {
        $(this).removeClass('process-selected')
      })
      var target = e.target;
      if (typeof $(e.target).data().image === 'undefined') {
        target = e.target.parentElement;
      }
      $(target).toggleClass('process-selected')
      $('.image-part').css('background-image', 'url(../images/'+$(target).data().image+'.png)')
    })
  })

  $('.tab-headers div').each(function(index) {
    $(this).click(function(e) {
      $('[data-tab-for]').each(function(index) {
        $(this).removeClass('tab--selected')
      })
      $('[data-tab-header]').each(function(index) {
        $(this).removeClass('tab-header--selected');
      })

      var tab = e.target.dataset.tabHeader;
      $(e.target).toggleClass('tab-header--selected');
      $('[data-tab-for='+tab+']').toggleClass('tab--selected');
    })
  })
})