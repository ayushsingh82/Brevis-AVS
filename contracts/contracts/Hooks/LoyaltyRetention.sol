// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IBrevisZKVerifier {
    function verifyProof(bytes calldata proof) external view returns (bool);
}

contract LoyaltyRewardHook {
    IBrevisZKVerifier public brevisVerifier;
    mapping(address => uint256) public loyaltyPoints;

    event LoyaltyPointsAdded(address indexed user, uint256 points);

    constructor(address _brevisVerifier) {
        brevisVerifier = IBrevisZKVerifier(_brevisVerifier);
    }

    function addLoyaltyPoints(address user, uint256 points, bytes calldata proof) external {
        require(brevisVerifier.verifyProof(proof), "Invalid proof");
        loyaltyPoints[user] += points;
        emit LoyaltyPointsAdded(user, points);
    }

    function redeemPointsForDiscount(address user) external view returns (uint256 discount) {
        return loyaltyPoints[user] > 100 ? 500 : 0; // 5% discount if points are above 100
    }
}
