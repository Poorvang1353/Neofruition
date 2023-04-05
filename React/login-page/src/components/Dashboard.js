import React, { useState, useCallback } from "react";
import AccountDetails from "./AccountDetails";
import "./Dashboard.css";
import axios from "axios";
import Table from "./Table";
// import Userfront from "@userfront/react";

function Dashboard() {
  const [Account, setAccount] = useState([]);
  const[AccountNumber,setAccountNumber]= useState("");

  const fetchAccountDetailsHandler = useCallback(async () => {
    const response = await axios
      .post(
        "http://192.168.0.4:9292/api/v1/accountHolding/getAccountHolding",
        // method: "POST",
        JSON.stringify({
          accountNumber: AccountNumber,
        }),
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((result) => {
        // console.log(result.data.dataList)
        const transformedAccount = result.data.dataList.map((AccountData) => {
          return {
            accountNumber: AccountData.accountNumber,
            userName: AccountData.userName,
            symbol: AccountData.symbol,
            quantity: AccountData.quantity,
          };
        });
        // const data = result;
        setAccount(transformedAccount);
      });
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
  }, [AccountNumber]);

  // useEffect(() => {
  //   fetchAccountDetailsHandler();
  // }, [fetchAccountDetailsHandler]);

  return (
    <React.Fragment>
      <section>
        <label htmlFor="AcNumber">Account Number</label>
        <input
          value={AccountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          type="AcNumber"
          placeholder="Enter your Accont Number"
          id="AcNumber"
          name="AcNumber"
        />
        <button onClick={fetchAccountDetailsHandler}>Fetch Account</button>
      </section>
      <section>
        <AccountDetails Account={Account} />
      </section>
      <section>
        <Table/>
      </section>
    </React.Fragment>
  );
}
export default Dashboard;
