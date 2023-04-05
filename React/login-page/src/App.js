import React from "react";
import "./App.css";
import { Login } from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Protected from "./components/Protected";

function App() {
  return (
    <div className="root">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={<Protected Component={Dashboard} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// function Dashboard() {
//   const [Account, setAccount] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchAccountDetailsHandler = useCallback(async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await axios.post(
//         "http://192.168.0.4:9292/api/v1/accountHolding/getAccountHolding",
//         // method: "POST",
//         JSON.stringify({
//           accountNumber:"CXX 333-11111"
//         }),
//         {
//           headers:{
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             authorization:localStorage.getItem("token")
//           }
//         }
//       ).then(result => {
//         // console.log(result.data.dataList)
//         const transformedAccount = result.data.dataList.map((AccountData) => {
//           return {
//             accountNumber: AccountData.accountNumber,
//             userName: AccountData.userName,
//             symbol: AccountData.symbol,
//             quantity: AccountData.quantity,
//           };
//         });
//         // const data = result;
//       setAccount(transformedAccount);
//       })
//       if (!response.ok) {
//         throw new Error("Something went wrong!");
//       }

//       // const data = response;

//     } catch (error) {
//       setError(error.message);
//     }
//     setIsLoading(false);
//   }, []);

//   useEffect(() => {
//     fetchAccountDetailsHandler();
//   }, [fetchAccountDetailsHandler]);

//   let content = <p>Found no Details.</p>;

//   if (Account.length > 0) {
//     content = <AccountDetails Account={Account} />;
//   }

//   if (error) {
//     content = <p>{error}</p>;
//   }

//   if (isLoading) {
//     content = <p>Loading...</p>;
//   }

//   return (
//     <React.Fragment>
//       <section>
//         <button onClick={fetchAccountDetailsHandler}>Fetch Account</button>
//       </section>
//       <section>{content}</section>
//     </React.Fragment>
//   );
// }
