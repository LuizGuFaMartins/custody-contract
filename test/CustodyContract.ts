import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("CustodyContract", function () {
  async function deployCustodyContractFixture() {
    const [owner, otherAccount] = await ethers.getSigners();

    const CustodyContract: any = await ethers.getContractFactory(
      "CustodyContract"
    );
    const custodyContract: any = await CustodyContract.deploy();

    return { custodyContract, owner, otherAccount };
  }

  describe("Deposits", function () {
    it("Deve reverter se a quantia no deposio for igual a zero", async function () {
      const { custodyContract, owner } = await loadFixture(
        deployCustodyContractFixture
      );

      const depositValue = ethers.parseEther("0");

      await expect(
        custodyContract.connect(owner).deposit({ value: depositValue })
      ).to.be.revertedWith("O valor do deposito deve ser maior que zero");
    });

    it("Deve permitir que um usuario faca um deposito", async function () {
      const { custodyContract, owner } = await loadFixture(
        deployCustodyContractFixture
      );

      const depositValue = ethers.parseEther("1");
      await custodyContract.connect(owner).deposit({ value: depositValue });

      const balance = await custodyContract.getBalance();
      expect(balance).to.equal(depositValue);
    });
  });

  describe("Withdrawals", function () {
    describe("Validations", function () {
      it("Deve reverter se um usuario que nao for dono tentar sacar fundos ou se o usuario dono nao tiver fundos", async function () {
        const { custodyContract, owner, otherAccount } = await loadFixture(
          deployCustodyContractFixture
        );

        const depositValue = ethers.parseEther("1");
        await custodyContract.connect(owner).deposit({ value: depositValue });

        await expect(
          custodyContract.connect(otherAccount).withdraw(depositValue)
        ).to.be.revertedWith("Voce nao possui saldo para sacar");
      });

      it("Deve reverter se o valor do saque for maior que o saldo disponivel", async function () {
        const { custodyContract, owner } = await loadFixture(
          deployCustodyContractFixture
        );

        const depositValue = ethers.parseEther("1");
        await custodyContract.connect(owner).deposit({ value: depositValue });

        const withdrawValue = ethers.parseEther("2");
        await expect(
          custodyContract.withdraw(withdrawValue)
        ).to.be.revertedWith("Voce nao possui saldo suficiente para sacar esse valor");
      });

      it("Deve permitir que o proprietario retire os fundos", async function () {
        const { custodyContract, owner } = await loadFixture(
          deployCustodyContractFixture
        );

        const depositValue = ethers.parseEther("1");
        await custodyContract.connect(owner).deposit({ value: depositValue });

        await expect(custodyContract.withdraw(depositValue)).not.to.be.reverted;

        const balance = await custodyContract.getBalance();
        expect(balance).to.equal(0);
      });      
    });
  });
});
