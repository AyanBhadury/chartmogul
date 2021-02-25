const ChartMogul = require("chartmogul-node");
require("dotenv").config();
const config = new ChartMogul.Config(
  process.env.CHARTMOGUL_ACCOUNT_TOKEN,
  process.env.CHARTMOGUL_SECRET_KEY
);
ChartMogul.Ping.ping(config)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

ChartMogul.CustomAttribute.add(
  config,
  "cus_8dd8fb6a-768e-11eb-a302-d35f6004f80a",
  {
    custom: [{ type: "String", key: "Sales Rep", value: "Bill Gates" }],
  }
);

ChartMogul.CustomAttribute.add(
  config,
  "cus_7f591f52-768e-11eb-a302-9f54a83990de",
  {
    custom: [{ type: "String", key: "Sales Rep", value: "Tim Cook" }],
  }
);

ChartMogul.CustomAttribute.add(
  config,
  "cus_738cafc2-768e-11eb-a302-ab6af5c408e1",
  {
    custom: [{ type: "String", key: "Sales Rep", value: "Steve Jobs" }],
  }
);

ChartMogul.CustomAttribute.add(
  config,
  "cus_64c96624-768e-11eb-a302-67513113e509",
  {
    custom: [{ type: "String", key: "Sales Rep", value: "Larry Ellison" }],
  }
);

ChartMogul.CustomAttribute.add(
  config,
  "cus_5ddc5a1a-768e-11eb-a302-6fb47ccd4f51",
  {
    custom: [{ type: "String", key: "Sales Rep", value: "Bill Gates" }],
  }
);

ChartMogul.CustomAttribute.add(
  config,
  "cus_5422448a-768e-11eb-a302-4b86cd05ff15",
  {
    custom: [{ type: "String", key: "Sales Rep", value: "Tim Cook" }],
  }
);

ChartMogul.CustomAttribute.add(
  config,
  "cus_4ad16c4e-768e-11eb-a302-0b94efba0bad",
  {
    custom: [{ type: "String", key: "Sales Rep", value: "Steve Jobs" }],
  }
);

ChartMogul.CustomAttribute.add(
  config,
  "cus_3f9d3b8c-768e-11eb-a302-c7bc84ac9611",
  {
    custom: [{ type: "String", key: "Sales Rep", value: "Larry Ellison" }],
  }
);

ChartMogul.CustomAttribute.add(
  config,
  "cus_2f0da784-768e-11eb-a302-e7ff7767e620",
  {
    custom: [{ type: "String", key: "Sales Rep", value: "Bill Gates" }],
  }
);

ChartMogul.CustomAttribute.add(
  config,
  "cus_24b25d2a-768e-11eb-a302-ebcdabae63ab",
  {
    custom: [{ type: "String", key: "Sales Rep", value: "Tim Cook" }],
  }
);

ChartMogul.CustomAttribute.add(
  config,
  "cus_03b7d456-768e-11eb-a302-975ec4856838",
  {
    custom: [{ type: "String", key: "Sales Rep", value: "Tim Cook" }],
  }
);
