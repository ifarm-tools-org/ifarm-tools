$(function() {
  main()
});

const main = async() => {

  let tableData = {
    "title":"FANTOM Network",
    "heading":["Pool Provider", "Farm Contract Safety", "Token Distribution", "Sustainability", "Analysis"],
    "rows": [
      [
        `<a href='chad'>Chad</a>`,
        `<a href='https://twitter.com/ifarm_tools/status/1402441547535196161'>8/10</a>`,
        `<a href='https://twitter.com/ifarm_tools/status/1402441548462059520'>7/10</a>`,
        `<a href='https://twitter.com/ifarm_tools/status/1402442310789451779'>2/10</a>`,
        `<a href='https://twitter.com/ifarm_tools/status/1402441546490810376'>Contracts with community backing.</a>`
      ]
    ]
  };

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}