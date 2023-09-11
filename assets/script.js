// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // create const to access Save Btn
  const $saveBtn = $('.saveBtn');
  const $timeBlocks = $('.time-block');

  // Event listener when saving text input, uploads it to local storage
  $saveBtn.on('click', function () {
    const $thisBtn = $(this).parent().attr('id');
    let $hourTextInput = $(this).siblings('.description').val();

    localStorage.setItem($thisBtn, $hourTextInput);
  })

  // retrieves saved text from local storage and displays on page
  $timeBlocks.each(function () {
    const $thisTimeBlock = $(this);
    const $timeBlockText = localStorage.getItem($thisTimeBlock.attr('id'));

    $thisTimeBlock.children(".description").text($timeBlockText);
  })

  // Adds code to display the current date in the header of the page.
  let $today = dayjs();
  $('#current-day').text($today.format('dddd, MMMM D, YYYY'));

  // calls function to update color for current time
  updateHour();
});

// Updates current hour box color by comparing current hour to hour id number
function updateHour() {
  $('.time-block').each(function () {
    let hour = dayjs().hour();
    let $blockHour = parseInt($(this).attr('id').split('-')[1]);

    if ($blockHour < hour) {
      $(this).addClass('past');
    } else if ($blockHour === hour) {
      $(this).addClass('present');
    } else if ($blockHour > hour) {
      $(this).addClass('future');
    }
  });
}

