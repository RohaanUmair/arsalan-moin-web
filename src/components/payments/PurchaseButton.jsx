"use client";

import { initializePaddle } from "@paddle/paddle-js";
import { useEffect, useState } from "react";

export default function PurchaseButton({
    children = "Purchase Copy",
    className = "",
    priceId = "pri_01kgypxwte44xafwh5x0c6152k"
}) {
    const [paddle, setPaddle] = useState();

    useEffect(() => {
        initializePaddle({
            environment: "sandbox",
            token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN,
        }).then((paddleInstance) => setPaddle(paddleInstance));
    }, []);

    const handleCheckout = () => {
        if (!paddle) return alert("Paddle not initialized");

        paddle.Checkout.open({
            items: [{ priceId, quantity: 1 }],
            settings: {
                displayMode: "overlay",
                theme: "dark",
                successUrl: `${window.location.origin}/success`,
            },
        });
    };

    return (
        <button
            className={className}
            onClick={handleCheckout}
        >
            {children}
        </button>
    );
}
