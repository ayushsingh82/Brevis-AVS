// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IBrevisZKVerifier {
    function verifyProof(bytes calldata proof) external view returns (bool);
}

contract UserGatingHook {
    IBrevisZKVerifier public brevisVerifier;
    mapping(address => bool) public approvedUsers;

    event AccessGranted(address indexed user);

    constructor(address _brevisVerifier) {
        brevisVerifier = IBrevisZKVerifier(_brevisVerifier);
    }

    function grantAccess(address user, bytes calldata proof) external {
        require(brevisVerifier.verifyProof(proof), "Invalid proof");
        approvedUsers[user] = true;
        emit AccessGranted(user);
    }

    function hasAccess(address user) external view returns (bool) {
        return approvedUsers[user];
    }
}
