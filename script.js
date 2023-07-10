$(function () {
  const currentDay = dayjs().format('MMMM D, YYYY');
  $('#currentDay').text(currentDay);

  $('.time-block').each(function() {
    const blockHour = parseInt($(this).attr('id').split('-')[1]);
    const currentHour = dayjs().hour();

    if (blockHour < currentHour) {
      $(this).addClass('past');
    } else if (blockHour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }


    const savedEvent = localStorage.getItem('hour-' + blockHour);
    if (savedEvent) {
      $(this).find('.description').val(savedEvent);
    }
  });


  $('.saveBtn').on('click', function() {
    const block = $(this).parent();
    const blockHour = block.attr('id').split('-')[1];
    const eventText = block.find('.description').val();


    localStorage.setItem('hour-' + blockHour, eventText);
  });
});
