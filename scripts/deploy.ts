import { ethers } from "hardhat";

async function main() {
  const signers = await ethers.getSigners();

  // const Lib = await ethers.getContractFactory("NFTDescriptor");
  // const lib = await Lib.deploy();
  // await lib.deployed();
  // console.log(lib.address)

  const Calc = await ethers.getContractFactory("NonfungibleTokenPositionDescriptor", {
    signer: signers[0],
    libraries: {
      NFTDescriptor: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    },
  });
  const tx = await Calc.deploy();
  console.log(`TokenTransferTaxCalculator address: ${tx.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
