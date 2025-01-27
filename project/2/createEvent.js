const Web3 = require("web3");
const web3 = new Web3("http://127.0.0.1:7545"); 

const contractAddress = "Our Address";
const contractABI = [
  // Our ABI
];

const contract = new web3.eth.Contract(contractABI, contractAddress);

// FUNCTION - createEvent
async function createEvent(name, date, ticketPrice, ticketAvailable) {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];

    try {
        const result = await contract.methods.createEvent(name, date, ticketPrice, ticketAvailable).send({
            from: account
        });
        console.log("Event created:", result);
    } catch (error) {
        console.error("Error creating event:", error);
    }
}

// EVENT - EventCreated
contract.events.EventCreated({
    filter: {},
    fromBlock: 0
  })
  .on('data', event => {
    console.log("EventCreated received:", event);
  })
  .on('error', console.error);

//createEvent(name, date, ticketPrice, ticketAvailable);
// Типа так должен выгдядить вызов:
createEvent("Music Concert", "2025-02-01", web3.utils.toWei("0.1", "ether"), 200);