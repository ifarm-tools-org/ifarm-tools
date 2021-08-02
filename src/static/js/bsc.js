$(function() {
  main()
});

const main = async () => {
  const table = new AsciiTable().fromJSON(BSC_TABLE_DATA);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}