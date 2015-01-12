// Animate the menu fade transition when the menu button is clicked
$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("active");
  $(".sidebar-brand").toggleClass("active");
});

$(function () {
  // Initialize Bootstrap tooltips
  $('[data-toggle="tooltip"]').tooltip()
})
