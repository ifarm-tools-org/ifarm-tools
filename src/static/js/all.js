$(function () {
  main()
});

const main = async () => {
  const table = new AsciiTable().fromJSON(ETH_TABLE_DATA);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}
