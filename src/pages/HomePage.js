import React, { useState } from "react";
import "./homepage.css";
import CustomButton from "./components/CustomButton";
import CustomInput from "./components/CustomInput";
function HomePage() {
  // const [withdrawInput, setWithdrawInput] = useState({
  // });
  const [widthdrawAmount, setWidthdrawAmount] = useState(0);
  const [inputVals, setInputVals] = useState({
    depositAmount: 0,
    witdrawAmount: 0,
  });
  const [depositAmount, setDepositAmount] = useState(0);
  const [balanceAmount, setBalanceAmount] = useState(1300);
  function handleWithdraw() {
    if (inputVals.witdrawAmount > 0) {
      setWidthdrawAmount(inputVals.witdrawAmount);
      setBalanceAmount(balanceAmount - parseInt(inputVals.witdrawAmount));
    } else {
      window.alert("Invalid");
    }
   setInputVals({ ...inputVals,witdrawAmount: 0 });
  }
  function handleDeposit() {
    if (inputVals.depositAmount > 0) {
      setDepositAmount(inputVals.depositAmount);
      setBalanceAmount(parseInt(inputVals.depositAmount) + balanceAmount);
    } else {
      window.alert("Invalid");
    }
    setInputVals({ ...inputVals,depositAmount: 0 });
  }
  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className=" m-24 p-12 rounded-lg w-full">
        <div className="grid grid-cols-3 gap-8">
          <div class="max-w-sm bg-blue-500 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="p-5 grid-flow-row">
              <p className="text-white text-xl">Deposit</p>
              <p className=" text-white text-3xl">$ {depositAmount}</p>
            </div>
          </div>
          <div class="max-w-sm bg-pink-600 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="p-5 grid-flow-row">
              <p className="text-white text-xl">Withdraw</p>
              <p className=" text-white text-3xl">$ {widthdrawAmount}</p>
            </div>
          </div>
          <div class="max-w-sm bg-orange-500 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="p-5 grid-flow-row">
              <p className="text-white text-xl">Balance</p>
              <p className=" text-white text-3xl">$ {balanceAmount}</p>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-2 gap-8 m-8 p-12">
          <div class="shadowcss  bg-white rounded-lg ">
            <div class="p-5 grid-flow-row">
              <p className="text-black text-xl">Deposit</p>
              <CustomInput
                name="depositAmount"
                placeholder="$ amount you want to deposit"
                value={inputVals}
                setValue={setInputVals}
                type="number"
              />
              <CustomButton title="Deposit" action={handleDeposit} />
            </div>
          </div>
          <div class="shadowcss bg-white rounded-lg">
            <div class=" grid-flow-row">
              <p className="text-black text-xl">Withdraw</p>
              <CustomInput
                name="witdrawAmount"
                placeholder="$ amount you want to withdraw"
                value={inputVals}
                setValue={setInputVals}
                type="number"
              />
              <CustomButton title="Withdraw" action={handleWithdraw} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
