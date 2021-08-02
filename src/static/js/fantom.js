$(function() {
  main()
});

const main = async() => {
  let table = new AsciiTable().fromJSON(FANTOM_TABLE_DATA);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}
