import Web3 from "web3"

const main = async () => {
    const web3 = new Web3('http://127.0.0.1:8545/')

    const privateKey = '0xea6c44ac03bff858b476bba40716402b03e41b8e97e276d1baec7c37d42484a0'

    const sender = web3.eth.accounts.privateKeyToAccount(privateKey)

    const receiver = web3.eth.accounts.create()

    const block = await web3.eth.getBlock()

    const transaction = {
        from: sender.address,
        to: receiver.address,
        value: 100,
        maxFeePerGas: block.baseFeePerGas * 2n,
        maxPriorityFeePerGas: 100000
    }

    const signedTransaction = await web3.eth.accounts.signTransaction(transaction, sender.privateKey)
    const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction)
    console.log(receipt)
}

main()