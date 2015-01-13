// Animate the menu fade transition when the menu button is clicked
$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("active");
  $(".sidebar-brand").toggleClass("active");
});

$(function () {
  // Initialize Bootstrap tooltips
  $('[data-toggle="tooltip"]').tooltip()

  // Handle filters
  $(".filterable .filter").click(function() {
      var filterVal = $(this).text().toLowerCase().replace(' ','-');
      if (filterVal == "all") {
        $(this).parents().find(".filterable").find(".filter-item").each(function() {
          $(this).animate({ opacity: 1 }, 200);
        });
      }
      else {
        $(this).parents().find(".filterable").find(".filter-item").each(function() {
          if ($(this).hasClass(filterVal)) {
            $(this).animate({ opacity: 1 }, 200);
          }
          else {
            $(this).animate({ opacity: 0.25 }, 200);
          }
        });
      }
  });
})
