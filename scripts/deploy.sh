#!/bin/bash

if [ "$1" != "--network" ] || [ -z "$2" ] || [ "$3" != "--contract" ] || [ -z "$4" ]; then
  echo "Invalid syntax. Write like this: ./deploy.sh --network <network_name> --contract <contract_name>"
  exit 1
fi

NETWORK=$2
CONTRACT=$4

echo
echo "| ====================== |"
echo "  Initing deploy process  "
echo "| ====================== |"
echo

compile_contract() {
  echo "Initing contract compilation..."
  echo
  npx hardhat compile
  echo
}

run_tests() {
  echo "Executing contract tests..."
  npx hardhat test --network hardhat
  if [ $? -ne 0 ]; then
    echo "Tests failed."
    exit 1
  fi
  echo
}

deploy_contract() {
  echo "Deploing on network $NETWORK"
  npx hardhat ignition deploy `pwd`/ignition/modules/$CONTRACT.ts --network $NETWORK
  if [ $? -eq 0 ]; then
    echo "Deploy successful on network $NETWORK!"
  else
    echo "Deploy failed."
    exit 1
  fi
}

compile_contract
run_tests
deploy_contract

echo
echo "| ========================== |"
echo "   Finishing deploy process   "
echo "| ========================== |"
echo