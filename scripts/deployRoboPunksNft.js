const hre = require("hardhat");

async function main() {

  const RoboPunksNft = await hre.ethers.getContractFactory("RoboPunksNft");
  const roboPunksNft = await RoboPunksNft.deploy();

  await roboPunksNft.deployed();

  console.log(
    `RoboPunksNft deployed to ${roboPunksNft.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
