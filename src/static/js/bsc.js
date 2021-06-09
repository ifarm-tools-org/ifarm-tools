$(function() {
  main()
});

const main = async() => {

  let tableData = {
    "title":"BSC Network",
    "heading":["Pool Provider", "Farm Contract Safety", "Token Distribution", "Sustainability", "Analysis"],
    "rows": [
      [
        `<a href='cherokee'>Cherokee</a>`,
        `<a href='https://twitter.com/ifarm_tools/status/1402456061668302850'>7/10</a>`,
        `?`,
        `?`,
        `<a href='https://twitter.com/ifarm_tools/status/1402456060573540357'>Deposit fees, on-chain referrals. Typical yield farm.</a>`
      ]
    ]
  };

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}
