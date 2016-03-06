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
    var filterParent = $(this).closest(".filterable");
    var filterItems = filterParent.find(".filter-item");
    filterParent.find(".filter").removeClass("active");
    var filterVal = $(this).text().toLowerCase().replace(' ','-');
    if (filterVal == "all") {
      filterItems.each(function() {
        $(this).animate({ opacity: 1 }, 200);
      });
    }
    else {
      filterItems.each(function() {
        if ($(this).hasClass(filterVal)) {
          $(this).animate({ opacity: 1 }, 200);
        }
        else {
          $(this).animate({ opacity: 0.25 }, 200);
        }
      });
    }
    $(this).addClass("active");
  });
})
