// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Interface for the Brevis zk-proof verifier
interface IBrevisZKVerifier {
    function verifyProof(bytes calldata proof) external view returns (bool);
}

// Contract to log and query trading behavior data
contract TradingHistory {
    struct Trader {
        uint256 tradeCount;
        uint256 totalVolume;
    }

    mapping(address => Trader) public traders;

    // Function to record a trade
    function recordTrade(address trader, uint256 volume) external {
        traders[trader].tradeCount += 1;
        traders[trader].totalVolume += volume;
    }

    // Function to get trader statistics
    function getTraderStats(address trader) external view returns (uint256, uint256) {
        Trader memory t = traders[trader];
        return (t.tradeCount, t.totalVolume);
    }
}

// Contract to adjust trading fees based on historical behavior
contract TraderBehaviorFeeHook {
    IBrevisZKVerifier public brevisVerifier;
    TradingHistory public tradingHistory; // Reference to the TradingHistory contract
    mapping(address => bool) public highFrequencyTraders;

    uint256 public frequentTraderDiscount = 500; // 5% discount
    uint256 public regularFee = 1000; // 1% standard fee

    // Constructor to initialize the contracts
    constructor(address _brevisVerifier, address _tradingHistory) {
        brevisVerifier = IBrevisZKVerifier(_brevisVerifier);
        tradingHistory = TradingHistory(_tradingHistory);
    }

    // Function to register a trader as high-frequency if proof is valid
    function registerTrader(address trader, bytes calldata proof) external {
        require(brevisVerifier.verifyProof(proof), "Invalid proof");
        highFrequencyTraders[trader] = true;
    }

    // Function to get the adjusted trading fee based on trader's status
    function getFee(address trader) external view returns (uint256) {
        return highFrequencyTraders[trader] ? frequentTraderDiscount : regularFee;
    }

    // Function to add a trade (can be called from the TradingHistory contract)
    function addTrade(address trader, uint256 volume) external {
        tradingHistory.recordTrade(trader, volume);
    }
}
