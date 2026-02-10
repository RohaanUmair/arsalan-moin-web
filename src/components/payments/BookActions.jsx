"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Download, ShoppingBag, Loader2 } from "lucide-react";
import PurchaseButton from "./PurchaseButton";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function BookActions({
    purchaseClassName = "",
    downloadClassName = "",
    purchaseLabel = "Purchase Copy",
    downloadLabel = "Download PDF",
    hasPurchased = false,
    userEmail = "",
    isLoggedIn = false,
}) {
    const router = useRouter();
    const [downloadingBook, setDownloadingBook] = useState(false);
    const [downloadingAudio, setDownloadingAudio] = useState(false);

    const handleDownload = async (type = "book") => {
        const isBook = type === "book";
        if (isBook) setDownloadingBook(true);
        else setDownloadingAudio(true);

        try {
            const endpoint = isBook ? "/api/downloads/book" : "/api/downloads/audiobook";
            const res = await fetch(`${API_URL}${endpoint}`, {
                credentials: "include",
            });

            if (!res.ok) {
                const data = await res.json();
                alert(data.message || "Download failed");
                return;
            }

            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = isBook
                ? "The-Invisible-Work-by-Arsalan-Moin.pdf"
                : "The-Invisible-Work-Audiobook.mp3";
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Download error:", error);
            alert("Download failed. Please try again.");
        } finally {
            if (isBook) setDownloadingBook(false);
            else setDownloadingAudio(false);
        }
    };

    // User has purchased — show both download options
    if (hasPurchased) {
        return (
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button
                    onClick={() => handleDownload("book")}
                    disabled={downloadingBook}
                    className={downloadClassName || purchaseClassName}
                >
                    {downloadingBook ? (
                        <><Loader2 size={16} className="animate-spin inline mr-2" />Preparing PDF...</>
                    ) : (
                        <><Download size={16} className="inline mr-2" />Ebook (PDF)</>
                    )}
                </button>
                <button
                    onClick={() => handleDownload("audiobook")}
                    disabled={downloadingAudio}
                    className={downloadClassName || purchaseClassName}
                >
                    {downloadingAudio ? (
                        <><Loader2 size={16} className="animate-spin inline mr-2" />Preparing Audio...</>
                    ) : (
                        <><Download size={16} className="inline mr-2" />Audiobook (MP3)</>
                    )}
                </button>
            </div>
        );
    }


    // Not logged in — redirect to login
    if (!isLoggedIn) {
        return (
            <button
                onClick={() => router.push("/login")}
                className={purchaseClassName}
            >
                <ShoppingBag size={16} className="inline mr-2" />
                {purchaseLabel}
            </button>
        );
    }

    // Logged in but hasn't purchased — show Paddle checkout
    return (
        <PurchaseButton
            className={purchaseClassName}
            userEmail={userEmail}
        >
            <ShoppingBag size={16} className="inline mr-2" />
            {purchaseLabel}
        </PurchaseButton>
    );
}
