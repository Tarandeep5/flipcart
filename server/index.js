import express from "express";
import connection from "./database/db.js";
import DefaultData from "./default.js";
import bodyParser from "body-parser";
import cors from "cors";
import Routes from "./routes/routes.js";
import { v4 as uuid } from "uuid";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", Routes);

app.use("/signup", () => {
  // data save to database
});

const PORT = 8000;

connection();

app.listen(PORT, () =>
  console.log(`server is successfully runing on PORT ${PORT}`)
);

DefaultData();
export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
let paytmParams = {};
paytmParams["MID"] = process.env.PAYTM_MID;
paytmParams["WEBSITE"] = process.env.PAYTM_WEBSITE;
paytmParams["CHANNEL_ID"] = process.env.PAYTM_CHANNEL_ID;
paytmParams["INDUSTRY_TYPE_ID"] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams["ORDER_ID"] = uuid();
paytmParams["CUST_ID"] = process.env.PAYTM_CUST_ID;
paytmParams["TXN_AMOUNT"] = "100";
paytmParams["CALLBACK_URL"] = "http://localhost:8000/callback";
paytmParams["EMAIL"] = "tarandeepsingh7837420@gmail.com";
paytmParams["MOBILE_NO"] = "1234567898";
export { paytmParams };
