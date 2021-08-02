$(function () {
  main()
});

const main = async () => {
  const tableData = {
    "title": "MCN Ventures",
    "heading": ['Project', 'Stake Token(s)', 'INFO'],
    "rows": [
      [`<a href="mcn">MCN Ventures</a>`, "MCN, MCN/USDC SLP", `<a href="https://mcn.ventures">mcn.ventures</a>`],
      [`<a href="xdollar">xDollar</a>`, "XDO", `<a href="https://xdollar.fi">xdollar.fi</a>`]
    ]
  }
  const table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}
