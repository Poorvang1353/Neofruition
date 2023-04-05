import React from "react";
import Account from "./Account";
import classes from "./AccountDetails.module.css";
function AccountDetails(props) {

  return (
    <ul className={classes["movies-list"]}>
      {props.Account.map((account) => (
        <Account
          key={account.accountNumber}
          userName={account.userName}
          quantity={account.quantity}
          symbol={account.symbol}
        />
      ))}
    </ul>
  );
}

export default AccountDetails;
