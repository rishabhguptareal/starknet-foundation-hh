import React, { useState } from 'react';
import { RpcProvider, Account, Contract } from "starknet";
import ABI from "./ABI.js";
import { connect } from 'get-starknet'; // v4.0.0 min
import { WalletAccount } from 'starknet'; // v6.10.0 min
const myFrontendProviderUrl = 'https://free-rpc.nethermind.io/sepolia-juno/v0_7';
// standard UI to select a wallet :
const selectedWalletSWO = await connect({ modalMode: 'alwaysAsk', modalTheme: 'dark' });
const myWalletAccount = new WalletAccount({ nodeUrl: myFrontendProviderUrl }, selectedWalletSWO);

export default function BuyBasket() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const tokens = [
    { name: 'Test1 0x7....3a1', price: '100.25', percentage: 30 },
    { name: 'Test2 0xa....328', price: '50.40', percentage: 50 },
    { name: 'Test3', price: '75.10', percentage: 20 },
  ];

  const createBasket = async () => {
    try {
      // Hardcoded StarkNet configuration
      const rpcUrl = "https://starknet-sepolia.public.blastapi.io/rpc/v0_6";
      const privateKey = "0x0799c2a30adb9681d8e75bc37d51f08bdeec2ab49c9b5aeba3fb341dee2c7724";
      const accountAddress = "0x01AeDF7F51F88733B58Bfa8ea2411cA0696c95f8defBA3cA1316501a0b1d37F9";
      const basketContractAddress = "0x6922dcd0593d0501739d6889276e5056dfb936a363d89a4e1538282fa4a89c3";

      const provider = new RpcProvider({ nodeUrl: rpcUrl });
      const account0 = new Account(provider, accountAddress, privateKey);

      const myTestContract = new Contract(
        ABI,
        basketContractAddress,
        myWalletAccount
      );

      myTestContract.connect(account0);

      const contractConstructor = myTestContract.populate("buy_basket", [
        "0x799de6465321563f995c65ed535a44cac5aa20a8399855c4a341fea7f60ff90", // Example token address
        BigInt("1000000000000000000") // Use BigInt for large numbers
      ]);

      const res = await myWalletAccount.execute(contractConstructor);
      
      console.log(`TxHash: ${res.transaction_hash}`);
      await provider.waitForTransaction(res.transaction_hash);
      
      console.log("Basket created successfully");
      setIsPopupVisible(true);
      setError(null);
    } catch (error) {
      console.error("Error creating basket:", error);
      setError(error instanceof Error ? error.message : "An unknown error occurred");
    }
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Buy Basket</h2>
      
      {/* Token Composition Display */}
      <div className="space-y-4">
        {tokens.map((token, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-semibold">{token.name}</h3>
              <p className="text-gray-400 text-sm">
                ${token.price} - {token.percentage}%
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex justify-center space-x-4">
        <button 
          onClick={createBasket}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded"
        >
          Buy Basket
        </button>
        <button 
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded"
        >
          Sell Basket
        </button>
      </div>

      {/* Error Handling */}
      {error && (
        <div className="mt-4 bg-red-600 text-white p-3 rounded">
          {error}
        </div>
      )}

      {/* Success Popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded-lg">
            <h3>Basket bought Successfully!</h3>
            <button 
              onClick={() => setIsPopupVisible(false)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}