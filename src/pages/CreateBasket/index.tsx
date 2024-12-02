import React, { useState } from "react";
import { RpcProvider, Account, Contract } from "starknet";
import basketFactory from "./basketFactory";
import { connect } from 'get-starknet'; // v4.0.0 min
import { WalletAccount } from 'starknet'; // v6.10.0 min
const myFrontendProviderUrl = 'https://free-rpc.nethermind.io/sepolia-juno/v0_7';
// standard UI to select a wallet :
const selectedWalletSWO = await connect({ modalMode: 'alwaysAsk', modalTheme: 'dark' });
const myWalletAccount = new WalletAccount({ nodeUrl: myFrontendProviderUrl }, selectedWalletSWO);

console.log(WalletAccount)

const TokenForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    symbol: "",
    tokens: [""],
    weights: [""],
    whitelisted: [""],
    salt: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleArrayChange = (name, index, value) => {
    const updatedArray = [...formData[name]];
    updatedArray[index] = value;
    setFormData({
      ...formData,
      [name]: updatedArray,
    });
  };

  const addField = (name) => {
    setFormData({
      ...formData,
      [name]: [...formData[name], ""],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <div className="w-full max-w-2xl p-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Basket
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-lg font-medium text-gray-900"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-400 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., MyToken"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-lg font-medium text-gray-900"
              htmlFor="symbol"
            >
              Symbol
            </label>
            <input
              type="text"
              id="symbol"
              name="symbol"
              value={formData.symbol}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-400 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., MTK"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-900">
              Tokens
            </label>
            {formData.tokens.map((token, index) => (
              <input
                key={index}
                type="text"
                value={token}
                onChange={(e) =>
                  handleArrayChange("tokens", index, e.target.value)
                }
                className="mt-2 block w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-400 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 mb-2"
                placeholder="Enter token address"
                required
              />
            ))}
            <button
              type="button"
              onClick={() => addField("tokens")}
              className="text-blue-600 font-medium hover:underline"
            >
              + Add Token
            </button>
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-900">
              Weights
            </label>
            {formData.weights.map((weight, index) => (
              <input
                key={index}
                type="text"
                value={weight}
                onChange={(e) =>
                  handleArrayChange("weights", index, e.target.value)
                }
                className="mt-2 block w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-400 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 mb-2"
                placeholder="Enter weight (u256)"
                required
              />
            ))}
            <button
              type="button"
              onClick={() => addField("weights")}
              className="text-blue-600 font-medium hover:underline"
            >
              + Add Weight
            </button>
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-900">
              Whitelisted Addresses
            </label>
            {formData.whitelisted.map((address, index) => (
              <input
                key={index}
                type="text"
                value={address}
                onChange={(e) =>
                  handleArrayChange("whitelisted", index, e.target.value)
                }
                className="mt-2 block w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-400 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 mb-2"
                placeholder="Enter address"
                required
              />
            ))}
            <button
              type="button"
              onClick={() => addField("whitelisted")}
              className="text-blue-600 font-medium hover:underline"
            >
              + Add Address
            </button>
          </div>

          <div className="mb-4">
            <label
              className="block text-lg font-medium text-gray-900"
              htmlFor="salt"
            >
              Salt
            </label>
            <input
              type="text"
              id="salt"
              name="salt"
              value={formData.salt}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-400 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter salt (felt252)"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring focus:ring-blue-300 transition-transform transform hover:scale-105"
          >
            Create Basket
          </button>
        </form>
      </div>
    </div>
  );
};

const App = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleFormSubmit = async (data) => {
    try {
      console.log("Submitted Data:", data);
      const provider = new RpcProvider({ baseUrl: "SN_SEPOLIA" });
      const privateKey0 =
        "0x0799c2a30adb9681d8e75bc37d51f08bdeec2ab49c9b5aeba3fb341dee2c7724";
      const account0Address =
        "0x01AeDF7F51F88733B58Bfa8ea2411cA0696c95f8defBA3cA1316501a0b1d37F9";
      const basket_factory_address =
        "0x23d07f240fe7676fe15163d28ba280f8bd88888e92ae6c562946999010b54f3";

      const account0 = new Account(provider, account0Address, privateKey0);

      const myTestContract = new Contract(
        basketFactory,
        basket_factory_address,
        myWalletAccount
      );
      const contractConstructor = myTestContract.populate("create_basket", [
        data.name,
        data.symbol,
        data.tokens,
        data.weights,
        data.whitelisted,
        data.salt,
      ]);

      myTestContract.connect(account0);

      const res = await myWalletAccount.execute(contractConstructor);
      console.log(`TxHash: ${res.transaction_hash}`);
      await provider.waitForTransaction(res.transaction_hash);
      console.log("Basket created successfully");
      setIsPopupVisible(true);
    } catch (error) {
      console.error("Error creating basket:", error);
    }
  };

  return (
    <>
      <TokenForm onSubmit={handleFormSubmit} />
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Success!</h2>
            <p>Basket created successfully.</p>
            <button
              onClick={() => setIsPopupVisible(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
