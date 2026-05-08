import { Web3 } from "web3"

const main = async () => {
    const web3 = new Web3('http://127.0.0.1:8545/')

    // create a new Web3.js account object with the private key of a Hardhat test account
    const privateKey = '0xea6c44ac03bff858b476bba40716402b03e41b8e97e276d1baec7c37d42484a0'
    // the account is created with a wallet, which makes it easier to use
    const sender = web3.eth.accounts.wallet.add(privateKey)[0]

    // generate a new random Web3.js account object to receive the transaction
    const receiver = web3.eth.accounts.create()

    // Log initial balances
    console.log('Initial sender balance:', await web3.eth.getBalance(sender.address))
    console.log('Initial receiver balance:', await web3.eth.getBalance(receiver.address))

    // Sign and send the transaction
    const receipt = await web3.eth.sendTransaction({
        from: sender.address,
        to: receiver.address,
        value: 100
    })

    console.log(receipt)

    console.log("Final sender balance:", await web3.eth.getBalance(sender.address))
    console.log("Final receiver balance:", await web3.eth.getBalance(receiver.address))
}

main()