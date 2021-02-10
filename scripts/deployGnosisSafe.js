async function main() {  
    const GnosisSafe = await ethers.getContractFactory("GnosisSafe");
    console.log("Deploying GnosisSafe...");
    const gnosisSafe = await GnosisSafe.deploy();
  
    console.log("GnosisSafe address:", gnosisSafe.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });