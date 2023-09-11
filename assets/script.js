// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // create const to access Save Btn
  const $saveBtn = $('.saveBtn');

  // Event listener when saving text input, uploads it to local storage
  $saveBtn.on('click', function() {
    const $thisBtn = $(this).parent().attr('id');
    let $hourTextInput = $(this).siblings('.description').val();

    localStorage.setItem($thisBtn, $hourTextInput);
  })
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  updateHour();
});

  // Adds code to display the current date in the header of the page.
let $today = dayjs();
$('#current-day').text($today.format('dddd, MMMM D, YYYY'));

// Updates current hour box color by comparing current hour to hour id number
  function updateHour() {
    $('.time-block').each(function() {
      let hour = dayjs().hour();
      let $blockHour = parseInt($(this).attr('id').split('-')[1]);

    if ($blockHour < hour) {
      $(this).addClass('past')
    } else if ($blockHour === hour) {
      $(this).addClass('present')
    } else if ($blockHour > hour) {
      $(this).addClass('future')
    }

    });
    }

 