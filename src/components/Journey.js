import { CheckCircle2, Milestone } from "lucide-react";

export default function Journey() {
    const points = [
        "Self-learning & observation",
        "Helping depressed individuals",
        "Practical psychology posts for everyday life",
    ];

    return (
        <section id="journey" className="py-20 bg-blue-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 bg-blue-800 px-4 py-2 rounded-full text-blue-200 text-sm font-bold mb-6">
                            <Milestone size={18} />
                            PERSONAL JOURNEY
                        </div>
                        <h2 className="text-4xl font-bold mb-6">
                            From Childhood to Psychology
                        </h2>
                        <p className="text-blue-100/80 text-lg leading-relaxed mb-8">
                            Growing up with loneliness, a poor background, and feeling undervalued shaped Arsalan’s path to psychology.
                            Through self-learning, observing people, online videos, and practical experience,
                            he now teaches thousands, changing lives with insights, posts, and therapy sessions.
                        </p>
                        <div className="space-y-4">
                            {points.map((point, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-primary-light" size={24} />
                                    <span className="text-lg font-medium">{point}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
                        <div className="bg-blue-800/50 h-40 rounded-2xl border border-blue-700/50 flex items-center justify-center text-blue-300 italic">
                            Childhood Story
                        </div>
                        <div className="bg-blue-800/50 h-40 rounded-2xl border border-blue-700/50 mt-8 flex items-center justify-center text-blue-300 italic">
                            Self Learning
                        </div>
                        <div className="bg-blue-800/50 h-40 rounded-2xl border border-blue-700/50 flex items-center justify-center text-blue-300 italic">
                            Observation
                        </div>
                        <div className="bg-blue-800/50 h-40 rounded-2xl border border-blue-700/50 mt-8 flex items-center justify-center text-blue-300 italic">
                            Practical Experience
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
