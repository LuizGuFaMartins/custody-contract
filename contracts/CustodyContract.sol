// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.27;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract CustodyContract {
    mapping(address => uint256) private balances;

    event Deposit(address indexed user, uint256 amount);
    
    event Withdrawal(address indexed user, uint256 amount);

    modifier balanceGreaterThanZero() {
        require(balances[msg.sender] > 0, "Voce nao possui saldo para sacar.");
        _;
    }

    modifier amountGreaterThanZero() {
        require(msg.value > 0, "O valor do deposito deve ser maior que zero");
        _;
    }

    modifier amountLessThanOrEqualBalance(uint256 amount) {
        require(amount <= balances[msg.sender], "Voce nao possui saldo suficiente para sacar esse valor");
        _;
    }

    function getBalance() external view returns (uint256) {
        return balances[msg.sender];
    }

    function deposit() external payable amountGreaterThanZero {
        balances[msg.sender] += msg.value;

        emit Deposit(msg.sender, msg.value);
    }   

    function withdraw(uint256 amount) external balanceGreaterThanZero amountLessThanOrEqualBalance(amount) {        
        balances[msg.sender] -= amount;

        payable(msg.sender).transfer(amount);

        emit Withdrawal(msg.sender, amount);
    }
}