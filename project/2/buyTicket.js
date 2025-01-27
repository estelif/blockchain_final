const Web3 = require("web3");
const web3 = new Web3("http://127.0.0.1:7545"); 

const contractAddress = "Our Address";
const contractABI = [
  // Our ABI
];

const contract = new web3.eth.Contract(contractABI, contractAddress);

// FUNCTION - buyTicket
async function buyTicket(eventId, fromAddress, ticketPrice) {
  try {
    const result = await contract.methods.buyTicket(eventId).send({
      from: fromAddress,
      value: ticketPrice, 
    });

    console.log("Ticket purchased successfully:", result);
  } catch (error) {
    console.error("Error purchasing ticket:", error);
  }
}

const eventId = 1;
const buyerAddress = "0xYourBuyerAddress"; 
const ticketPrice = web3.utils.toWei("0.1", "ether"); 


// EVENT - TicketPurchased
contract.events.TicketPurchased()
    .on("data", (event) => {
        console.log("TicketPurchased Event:", event.returnValues);
    })
    .on("error", (error) => {
        console.error("Error listening for TicketPurchased events:", error);
    });

buyTicket(eventId, buyerAddress, ticketPrice);