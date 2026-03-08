"use client";

import { useState, useRef, useEffect } from "react";
import { useChat, Message } from "ai/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Paperclip, Loader2, Sparkles, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

export function HelpDeskWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const { messages, input, handleInputChange, handleSubmit, isLoading, status, append } = useChat({
        api: "/api/chat",
        initialMessages: [
            {
                id: "welcome-message",
                role: "assistant",
                content: "Hello! I am Aura, your Brightfolio AI Assistant. How can I help you master the markets today?",
            }
        ]
    });

    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];

            // Wait for base64 conversion
            const base64Str = await fileToBase64(file);

            append({
                role: "user",
                content: `[Attached an image: ${file.name}]`,
                // Provide the attachment to the AI SDK (SDK handles sending data appropriately if base64)
                experimental_attachments: [
                    {
                        name: file.name,
                        contentType: file.type,
                        url: base64Str as string
                    }
                ]
            });

            // clear input
            if (fileInputRef.current) fileInputRef.current.value = "";
        }
    };

    const fileToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = error => reject(error);
        });
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed bottom-24 right-4 sm:right-8 w-[calc(100vw-2rem)] sm:w-[400px] h-[550px] max-h-[calc(100vh-120px)] bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-[9999]"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-[#050505] to-[#121212] border-b border-white/5 flex items-center justify-between shadow-md relative overflow-hidden">
                            <div className="absolute inset-0 bg-[#BF953F]/10 opacity-50 blur-xl pointer-events-none" />
                            <div className="flex items-center gap-3 relative z-10">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#BF953F] to-[#FCF6BA] p-[1px]">
                                    <div className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center relative overflow-hidden">
                                        <Sparkles className="w-5 h-5 text-[#FCF6BA] relative z-10 absolute animate-pulse duration-3000" />
                                        <div className="absolute inset-0 bg-[#BF953F]/20 blur-sm" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold tracking-wide">Aura Support</h3>
                                    <p className="text-emerald-400 text-xs font-semibold flex items-center gap-1.5 mt-0.5">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                        </span>
                                        AI Agent Active
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors relative z-10"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[url('/noise.png')] relative">
                            <div className="absolute inset-0 bg-[#0A0A0A]/95 mix-blend-overlay pointer-events-none" />
                            {messages.map((message: Message) => (
                                <div
                                    key={message.id}
                                    className={`flex flex-col ${message.role === "user" ? "items-end" : "items-start"} space-y-2 relative z-10`}
                                >
                                    <div
                                        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${message.role === "user"
                                            ? "bg-gradient-to-br from-[#BF953F] to-[#8C6D2C] text-black font-medium rounded-br-none"
                                            : "bg-white/[0.03] border border-white/10 text-white/90 rounded-bl-none font-light"
                                            }`}
                                    >
                                        {/* Display message content with Markdown support */}
                                        {message.content && !message.content.startsWith("[Attached an image:") && (
                                            <div className="prose prose-invert prose-sm max-w-none">
                                                <ReactMarkdown
                                                    remarkPlugins={[remarkGfm]}
                                                    components={{
                                                        p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                                                        ul: ({ children }) => <ul className="list-disc ml-4 mb-2">{children}</ul>,
                                                        ol: ({ children }) => <ol className="list-decimal ml-4 mb-2">{children}</ol>,
                                                        li: ({ children }) => <li className="mb-1">{children}</li>,
                                                        strong: ({ children }) => <strong className="font-bold text-[#FCF6BA]">{children}</strong>,
                                                        a: ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#BF953F] hover:underline">{children}</a>,
                                                    }}
                                                >
                                                    {message.content}
                                                </ReactMarkdown>
                                            </div>
                                        )}

                                        {/* Display attachments preview */}
                                        {message.experimental_attachments?.map((attachment: any, i: number) => (
                                            <div key={i} className="mt-2 text-xs flex items-center gap-2 bg-black/20 p-2 rounded-lg truncate text-white/80">
                                                <ImageIcon className="w-4 h-4 shrink-0" />
                                                <span className="truncate">{attachment.name}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tool Invocations for Generative UI */}
                                    {message.toolInvocations?.map((toolInvocation) => {
                                        const { toolName, toolCallId, state } = toolInvocation;

                                        if (state === 'result') return null;

                                        if (toolName === 'showExperienceChoices') {
                                            return (
                                                <div key={toolCallId} className="flex flex-wrap gap-2 mt-2">
                                                    {['Beginner', 'Experienced'].map((choice) => (
                                                        <button
                                                            key={choice}
                                                            onClick={() => append({ role: 'user', content: choice })}
                                                            className="px-4 py-2 rounded-full border border-[#BF953F]/30 bg-[#BF953F]/10 text-[#BF953F] text-xs hover:bg-[#BF953F] hover:text-black transition-all font-medium"
                                                        >
                                                            {choice}
                                                        </button>
                                                    ))}
                                                </div>
                                            );
                                        }

                                        if (toolName === 'showInterestChoices') {
                                            return (
                                                <div key={toolCallId} className="flex flex-wrap gap-2 mt-2">
                                                    {['Hands-on (I trade)', 'Hands-off (Managed)'].map((choice) => (
                                                        <button
                                                            key={choice}
                                                            onClick={() => append({ role: 'user', content: choice })}
                                                            className="px-4 py-2 rounded-full border border-[#BF953F]/30 bg-[#BF953F]/10 text-[#BF953F] text-xs hover:bg-[#BF953F] hover:text-black transition-all font-medium"
                                                        >
                                                            {choice}
                                                        </button>
                                                    ))}
                                                </div>
                                            );
                                        }

                                        if (toolName === 'recommendModule') {
                                            const { moduleName, target, description, link } = (toolInvocation as any).args;
                                            return (
                                                <motion.div
                                                    key={toolCallId}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="w-full max-w-[280px] p-4 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#BF953F]/20 shadow-xl space-y-3"
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <h4 className="text-[#BF953F] font-bold text-sm tracking-tight">{moduleName}</h4>
                                                        <Sparkles className="w-3.5 h-3.5 text-[#BF953F]/50" />
                                                    </div>
                                                    <div className="text-[10px] uppercase tracking-wider text-white/40 font-semibold">{target}</div>
                                                    <p className="text-xs text-white/70 leading-relaxed font-light">{description}</p>
                                                    <a
                                                        href={link}
                                                        className="block w-full py-2 bg-[#BF953F] hover:bg-[#FCF6BA] text-black text-center text-[10px] font-bold rounded-lg transition-colors shadow-lg"
                                                    >
                                                        GET STARTED NOW
                                                    </a>
                                                </motion.div>
                                            );
                                        }

                                        return null;
                                    })}
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-white/[0.03] border border-white/10 rounded-bl-none text-white/50 flex gap-1 items-center h-[46px]">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-[#0A0A0A] border-t border-white/10">
                            <form onSubmit={handleSubmit} className="flex gap-2">
                                <div className="flex-1 bg-white/[0.03] border border-white/10 rounded-full flex items-center px-2 py-1 focus-within:border-[#BF953F]/50 focus-within:bg-white/[0.05] transition-colors shadow-inner">
                                    <button
                                        type="button"
                                        onClick={() => fileInputRef.current?.click()}
                                        className="p-2 text-white/40 hover:text-white transition-colors disabled:opacity-50 shrink-0"
                                        title="Attach an image"
                                    >
                                        <Paperclip className="w-4 h-4" />
                                    </button>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        ref={fileInputRef}
                                        onChange={async (e) => {
                                            if (e.target.files && e.target.files.length > 0) {
                                                const file = e.target.files[0];
                                                const reader = new FileReader();
                                                reader.readAsDataURL(file);
                                                reader.onload = () => {
                                                    append({
                                                        role: "user",
                                                        content: `[Attached an image: ${file.name}]`,
                                                        experimental_attachments: [
                                                            {
                                                                name: file.name,
                                                                contentType: file.type,
                                                                url: reader.result as string
                                                            }
                                                        ]
                                                    });
                                                };
                                                if (fileInputRef.current) fileInputRef.current.value = "";
                                            }
                                        }}
                                    />
                                    <input
                                        value={input || ""}
                                        onChange={handleInputChange}
                                        placeholder="Ask Aura anything..."
                                        className="flex-1 bg-transparent text-white text-sm focus:outline-none px-2 py-2 placeholder:text-white/30"
                                        disabled={isLoading}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isLoading || (!input?.trim() && !fileInputRef.current?.value)}
                                    className="w-12 h-12 bg-[#BF953F] hover:bg-[#FCF6BA] text-black rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0 shadow-[0_0_15px_rgba(191,149,63,0.3)]"
                                >
                                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5 ml-1" />}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Action Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-[#BF953F] via-[#D4AF37] to-[#FCF6BA] text-black shadow-[0_0_30px_rgba(191,149,63,0.5)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-[9999] group overflow-hidden"
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-white/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <MessageSquare className="w-6 h-6 md:w-7 md:h-7 relative z-10" />
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
}
