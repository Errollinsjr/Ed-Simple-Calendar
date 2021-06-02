$(document).ready(function () {
    // listen for save button clicks
    $('.saveBtn').on('click', function () {
      // get nearby values
      var value = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');
  
      // save in localStorage
      localStorage.setItem(time, value);
  
      // Show notification that item was saved to localStorage by adding class 'show'
      $('.notification').addClass('show');
  
      // Timeout to remove 'show' class after 5 seconds
      setTimeout(function () {
        $('.notification').removeClass('show');
      }, 5000);
    });
  
    function hourUpdater() {
      // get current number of hours
      var currentHour = moment().hours();
  
      // loop over time blocks
      $('.time-block').each(function () {
        var blockHour = parseInt($(this).attr('id').split('-')[1]);
  
        // check if we've moved past this time
        if (blockHour < currentHour) {
          $(this).addClass('past');
        } else if (blockHour === currentHour) {
          $(this).removeClass('past');
          $(this).addClass('present');
        } else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
        }
      });
    }
  
    hourUpdater();
  
    // set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);
  
    // load any saved data from localStorage
    $('#hour-9am .description').val(localStorage.getItem('hour-9am'));
    $('#hour-10am .description').val(localStorage.getItem('hour-10am'));
    $('#hour-11am .description').val(localStorage.getItem('hour-11am'));
    $('#hour-12pm .description').val(localStorage.getItem('hour-12pm'));
    $('#hour-1pm .description').val(localStorage.getItem('hour-1pm'));
    $('#hour-2pm .description').val(localStorage.getItem('hour-2pm'));
    $('#hour-3pm .description').val(localStorage.getItem('hour-3pm'));
    $('#hour-4pm .description').val(localStorage.getItem('hour-4pm'));
    $('#hour-5pm .description').val(localStorage.getItem('hour-5pm'));

    // display current day on page
    $("#currentTime").text(timeNow.format('MMMM Do YYYY, h:mm:ss a'));
  
});
  
// display current time
function displayTime(){

    var timeNow = moment();
    $("#currentTime").text(timeNow.format('MMMM Do YYYY, h:mm:ss a'));
    setTimeout(displayTime, 1000);
    
    }
    
    $(document).ready(function() {
        displayTime();
    });


//  clear storage & rerender table
function clearCalendar() {
    localStorage.clear();
    window.location.reload();
}
    
