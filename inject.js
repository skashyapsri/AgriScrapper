/**
 * Commodity: 164(Capsicum),
 * Market: 37(Mysuru)
 * Author: Srikrishna S Kashyap
 * */

function loadData(month, year, commodity = "164", market = "37") {
  document.querySelector("#_ctl0_content5_ddlmonth").value = month.toString();
  document.querySelector("#_ctl0_content5_ddlyear").value = year.toString();
  document.querySelector("#_ctl0_content5_ddlcommodity").value = commodity;
  document.querySelector("#_ctl0_content5_ddlmarket").value = market;
  document.querySelector("#_ctl0_content5_viewreport").click();
}
function scrape() {
  let data = JSON.parse(localStorage.getItem("data"));
  let col = [
    "date",
    "variety",
    "grade",
    "arrivals",
    "unit",
    "min",
    "max",
    "modal",
    "district",
  ];
  const table = document.querySelector("#_ctl0_content5_gv").rows;
  for (i = 1; i < table.length - 2; i++) {
    let cells = table[i].cells;
    console.log(cells);
    let temp = {};
    for (j = 1; j < cells.length; j++) temp[col[j - 1]] = cells[j].innerText;
    data.push(temp);
    console.log(data);
  }
  localStorage.setItem("data", JSON.stringify(data));
}

(function () {
  const month = localStorage.getItem("month");
  const year = localStorage.getItem("year");
  if (
    new Date().getMonth() - 1 !== month &&
    new Date().getFullYear() !== year
  ) {
    if (parseInt(month, 10) === 12) {
      localStorage.setItem(
        "year",
        parseInt(localStorage.getItem("year"), 10) + 1
      );
      localStorage.setItem("month", 1);
    } else {
      localStorage.setItem(
        "month",
        parseInt(localStorage.getItem("month"), 10) + 1
      );
    }
    scrape();
    loadData(month, year);
  }
})();
