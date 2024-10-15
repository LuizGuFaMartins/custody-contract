// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CustodyContractModule = buildModule("CustodyContractModule", (m) => {
  const custodyContract = m.contract("CustodyContract");

  return { custodyContract };
});

export default CustodyContractModule;
