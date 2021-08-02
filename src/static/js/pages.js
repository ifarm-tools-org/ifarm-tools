$(function () {
  main()
});

const main = async () => {
  const eth_tvl = await getTVL('Ethereum')
  const bsc_tvl = await getTVL('Binance')
  const matic_tvl = await getTVL('Polygon')
  const ftm_tvl = await getTVL('Fantom')

  let tableData = {
    "title":"Front Page",
    "heading":["Ecosystem", "Token", "Project Listings", "Total Value Locked"],
    "rows": [
      //[`<a href="mcn/"    >MCN Ventures</a>         `, "MCN   ", "1", "$"],
      [`<a href="all/"    >Ethereum Mainnet</a>     `, "ETH   ", ETH_TABLE_DATA.rows.length, eth_tvl],
      [`<a href="bsc/"    >Binance Smart Chain</a>  `, "BNB   ", BSC_TABLE_DATA.rows.length, bsc_tvl],
      [`<a href="polygon/">Polygon PoS Chain</a>    `, "MATIC ", POLYGON_TABLE_DATA.rows.length, matic_tvl],
      [`<a href="fantom/" >Fantom Network</a>       `, "FTM   ", FANTOM_TABLE_DATA.rows.length, ftm_tvl]
    ]
  }

  let table = new AsciiTable().fromJSON(tableData);
  table.setAlign(2, AsciiTable.CENTER)
  table.setAlign(3, AsciiTable.RIGHT)
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}

async function getTVL(networkID) {
  let url = 'https://api.llama.fi/charts/' + networkID
  let res = await $.ajax({
    url : url,
    type : "GET"
  })
  const lastTVL = "$" + formatMoney(res.pop().totalLiquidityUSD)
  console.log(`${networkID} TVL: ${lastTVL}`)
  return lastTVL
}