import React, { useState } from "react";
import { ethers } from "ethers";
import axios from "axios";

const contractABI = [/* ABI  */];
const contractAddress = "YOUR_CONTRACT_ADDRESS";

const Logistic = () => {
    const [provider, setProvider] = useState(null);
    const [contract, setContract] = useState(null);
    const [userType, setUserType] = useState("");
    const [userName, setUserName] = useState("");
    const [itemDetails, setItemDetails] = useState("");
    const [orderId, setOrderId] = useState("");
    const [trackingId, setTrackingId] = useState("");
    const [orderDetails, setOrderDetails] = useState(null);

    const connectWallet = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);
        setProvider(provider);
        setContract(contractInstance);
    };

    const registerUser = async () => {
        try {
            const tx = await contract.registerUser(userName, userType);
            await tx.wait();
            alert("User registered successfully");
        } catch (error) {
            alert("Registration failed: " + error.message);
        }
    };

    const placeOrder = async () => {
        try {
            const tx = await contract.placeOrder(itemDetails);
            await tx.wait();
            alert("Order placed successfully");
        } catch (error) {
            alert("Order placement failed: " + error.message);
        }
    };

    const dispatchOrder = async () => {
        try {
            const tx = await contract.dispatchOrder(orderId, trackingId);
            await tx.wait();
            alert("Order dispatched successfully");
        } catch (error) {
            alert("Dispatch failed: " + error.message);
        }
    };

    const getOrder = async () => {
        try {
            const order = await contract.getOrder(orderId);
            setOrderDetails(order);
        } catch (error) {
            alert("Failed to retrieve order: " + error.message);
        }
    };

    return (
        <div>
            <button onClick={connectWallet}>Connect Wallet</button>
            <div>
                <h3>Register User</h3>
                <input type="text" placeholder="Name" onChange={(e) => setUserName(e.target.value)} />
                <input type="text" placeholder="User Type" onChange={(e) => setUserType(e.target.value)} />
                <button onClick={registerUser}>Register</button>
            </div>
            <div>
                <h3>Place Order</h3>
                <input type="text" placeholder="Item Details" onChange={(e) => setItemDetails(e.target.value)} />
                <button onClick={placeOrder}>Place Order</button>
            </div>
            <div>
                <h3>Dispatch Order</h3>
                <input type="text" placeholder="Order ID" onChange={(e) => setOrderId(e.target.value)} />
                <input type="text" placeholder="Tracking ID" onChange={(e) => setTrackingId(e.target.value)} />
                <button onClick={dispatchOrder}>Dispatch Order</button>
            </div>
            <div>
                <h3>Get Order</h3>
                <input type="text" placeholder="Order ID" onChange={(e) => setOrderId(e.target.value)} />
                <button onClick={getOrder}>Get Order</button>
                {orderDetails && (
                    <div>
                        <p><strong>Order Details:</strong> {JSON.stringify(orderDetails)}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Logistic;
