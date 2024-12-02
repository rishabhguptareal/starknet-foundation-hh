import React, { useState, useEffect } from 'react';
import { Brain, Wallet, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { connect } from 'get-starknet';
import { WalletAccount } from 'starknet';

const myFrontendProviderUrl = 'https://free-rpc.nethermind.io/sepolia-juno/v0_7';

export default function Header() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const handleConnectWallet = async () => {
    try {
      const selectedWalletSWO = await connect({ 
        modalMode: 'alwaysAsk', 
        modalTheme: 'dark' 
      });

      if (selectedWalletSWO) {
        // Directly use the address from the wallet
        const address = await selectedWalletSWO.account.address;
        setWalletAddress(address);
        console.log('Connected Wallet Address:', address);
      }
    } catch (error) {
      console.error('Wallet connection error:', error);
    }
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-space-black/50 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Brain className="h-8 w-8 text-neon-pink" />
            <span className="ml-2 text-xl font-bold bg-gradient-cosmic text-transparent bg-clip-text">
              StarkBasket
            </span>
          </motion.div>
          <nav className="flex space-x-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="flex items-center px-4 py-2 rounded-lg text-white/80 hover:text-white transition-colors"
            >
              <TrendingUp className="h-5 w-5 mr-2" />
              Markets
            </motion.button>
            <motion.button 
              onClick={handleConnectWallet}
              whileHover={{ scale: 1.05 }}
              className="flex items-center px-4 py-2 rounded-lg bg-gradient-cosmic text-white hover:shadow-lg hover:shadow-neon-pink/20 transition-shadow"
            >
              <Wallet className="h-5 w-5 mr-2" />
              {walletAddress 
                ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` 
                : 'Connect Wallet'}
            </motion.button>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}