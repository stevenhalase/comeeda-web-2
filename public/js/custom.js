$(document).ready(function() {
  $('.information-content .item').each(function(index) {
    $(this).click(function(e) {
      $(e.target.previousElementSibling).toggleClass('open-text')
      e.target.dataset.item == '+' ? e.target.dataset.item = '-' : e.target.dataset.item = '+';
    })
  })

  $('.process-content .item').each(function(index) {
    $(this).click(function(e) {
      $('.process-content .item').each(function(index) {
        $(this).removeClass('process-selected')
      })
      $(e.target).toggleClass('process-selected')
      $('.image-part').css('background-image', 'url(../public/images/'+$(e.target).data().image+'.png)')
    })
  })
})