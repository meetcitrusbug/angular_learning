$(document).ready(function () {
  $(".dropdown-notification-div .dropdown-menu-nt-div").on(
    "click",
    function (e) {
      e.stopPropagation();
    }
  );

  $('.nav-tabs .nav-item a[href="#notifications-tab-01"]').click(function () {
    $(this).tab("show");
  });

  $('.nav-tabs .nav-item a[href="#notifications-tab-02"]').click(function () {
    $(this).tab("show");
  });

  $(document).on("click.bs.dropdown.data-api", ".keep_it_open", function (e) {
    e.stopPropagation();
  });
});
