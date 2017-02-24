var NUM_ITERATIONS = 1

function check () {
  if ($('#info_iterations').text() == NUM_ITERATIONS.toString()) {
    $('#start').click()
    return $('#download').click()
  } else {
    return setTimeout(check, 10)
  }
}

$(document).ready(function () {
  $('#demo').click()
  $('#svg2 rect:first-child').click()
  $('#start').click()
  check()
})
