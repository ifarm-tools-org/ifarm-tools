$(function() {
  main()
})

const main = async () => {
  let table = new AsciiTable().fromJSON(POLYGON_TABLE_DATA)
  document.getElementById('log').innerHTML += table + '<br />'
  hideLoading()
}
