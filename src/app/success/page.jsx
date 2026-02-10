"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";

export default function SuccessPage() {
    const { checkAuth, user } = useAuth();
    const [verifying, setVerifying] = useState(true);

    useEffect(() => {
        // Poll for purchase update
        const verifyPurchase = async () => {
            // Wait a moment for webhook to process
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Refresh user data
            await checkAuth();
            setVerifying(false);
        };

        verifyPurchase();
    }, []);

    return (
        <div className="min-h-screen bg-cream-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-navy-100"
            >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>

                <h1 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                    Payment Successful!
                </h1>

                <p className="text-navy-600 mb-8 leading-relaxed">
                    Thank you for your purchase. We are confirming your transaction and unlocking your access to <span className="font-bold italic">The Invisible Work</span>.
                </p>

                {verifying ? (
                    <div className="flex items-center justify-center gap-3 text-gold-600 font-medium bg-gold-50 p-4 rounded-lg mb-6">
                        <Loader2 className="animate-spin" />
                        <span>Verifying access permissions...</span>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {user?.purchases?.includes("book") ? (
                            <div className="bg-green-50 text-green-800 p-4 rounded-lg mb-6 text-sm font-medium">
                                Access confirmed! You can now download the book.
                            </div>
                        ) : (
                            <div className="bg-blue-50 text-blue-800 p-4 rounded-lg mb-6 text-sm">
                                <p className="font-bold mb-1">Still processing...</p>
                                If your access doesn't appear immediately, please check your email or refresh the page in a few minutes.
                            </div>
                        )}

                        <Link
                            href="/book"
                            className="block w-full bg-navy-900 text-white py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-navy-800 transition-all flex items-center justify-center gap-2"
                        >
                            Go to Book Page
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
