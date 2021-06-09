$(function() {
  main()
});

const main = async() => {

  let message = `Hot takes on all the latest yield farms. Trusting only code.`;
  document.getElementById('log').innerHTML += message + '<br />';
  hideLoading();
}
