
// for tooltip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

// for pills
$('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  })