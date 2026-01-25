import { Facebook, Book as BookIcon } from "lucide-react";

export default function ContactCTA() {
    return (
        <section id="contact" className="py-20 bg-white border-t border-blue-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-5xl font-bold text-primary mb-6">
                    Connect with Arsalan
                </h2>
                <p className="text-xl text-text-muted mb-10 leading-relaxed">
                    Join Arsalan’s community, follow his guidance, and start learning the invisible work of parenting today.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="#book"
                        className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-black transition-all shadow-xl"
                    >
                        <BookIcon size={20} />
                        Buy the Book
                    </a>
                    <a
                        href="https://www.facebook.com/psychologicaltreatment"
                        target="_blank"
                        className="inline-flex items-center justify-center gap-2 bg-white text-primary border-2 border-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all"
                    >
                        <Facebook size={20} />
                        Follow on Facebook
                    </a>
                </div>
            </div>
        </section>
    );
}
