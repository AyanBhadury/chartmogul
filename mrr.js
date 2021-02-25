const ChartMogul = require("chartmogul-node");
require("dotenv").config();
const mrr_data = [];
const months = ["January", "February", "March", "April"];

const config = new ChartMogul.Config(
  process.env.CHARTMOGUL_ACCOUNT_TOKEN,
  process.env.CHARTMOGUL_SECRET_KEY
);

ChartMogul.Metrics.mrr(
  config,
  {
    "start-date": "2019-01-01",
    "end-date": "2019-04-30",
    interval: "month",
  },
  function (err, res) {
    // asynchronously called
    let data = res.entries;
    for (let item of data) {
      mrr_data.push(item.mrr);
    }
    console.log(`Total MRR for Q1 2019:`);
    for (let i = 0; i < mrr_data.length; i++) {
      console.log(`${months[i]} ${mrr_data[i]}`);
    }
  }
);
