const express = require("express");
const ethers = require("ethers");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

const provider = new ethers.providers.JsonRpcProvider(`https://worldchain-mainnet.g.alchemy.com/v2/eKts84nwt0sq58_ObZim0mCTBCvibcoG`);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contractABI = [/* ABI of the contract here */];
const contractAddress = process.env.CONTRACT_ADDRESS;
const contract = new ethers.Contract(contractAddress, contractABI, wallet);

// Register User
app.post("/registerUser", async (req, res) => {
    const { name, userType } = req.body;
    try {
        const tx = await contract.registerUser(name, userType);
        await tx.wait();
        res.status(200).send("User registered successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Place Order
app.post("/placeOrder", async (req, res) => {
    const { itemDetails } = req.body;
    try {
        const tx = await contract.placeOrder(itemDetails);
        await tx.wait();
        res.status(200).send("Order placed successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Dispatch Order
app.post("/dispatchOrder", async (req, res) => {
    const { order_id, trackingId } = req.body;
    try {
        const tx = await contract.dispatchOrder(order_id, trackingId);
        await tx.wait();
        res.status(200).send("Order dispatched successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Get Order
app.get("/getOrder/:orderId", async (req, res) => {
    const { orderId } = req.params;
    try {
        const order = await contract.getOrder(orderId);
        res.status(200).send(order);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
