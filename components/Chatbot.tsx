import React, { useState, useRef, useEffect, useCallback } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
// FIX: Corrected import path for Icons.
import { ChatBubbleIcon, CloseIcon, SendIcon, SparklesIcon } from './icons/Icons';

interface Message {
    sender: 'user' | 'ai';
    text: string;
}

interface ChatbotProps {
    onBookNow: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ onBookNow }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatSession = useRef<Chat | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const initializeChat = useCallback(() => {
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            chatSession.current = ai.chats.create({
                model: 'gemini-2.5-flash',
                config: {
                    systemInstruction: `Sen Mortanas Hotel'in yapay zeka konsiyerji Elara'sın. Amacın, misafirlere otel, olanaklar, odalar ve yerel etkinlikler hakkında yardımcı olmaktır. Her zaman nazik, profesyonel ve yardımsever ol. Misafirler rezervasyon yapmak isterse, onlara yardımcı olabileceğini söyle ve yanıtının sonuna özel komut olarak '[OPEN_BOOKING_MODAL]' ekle. Başka bir şey ekleme. Örneğin: 'Elbette, rezervasyonunuz için size yardımcı olabilirim. Lütfen aşağıdaki butona tıklayarak formu açın.' ardından '[OPEN_BOOKING_MODAL]' komutunu ekle. Sadece tek bir karşılama mesajı ver.`,
                },
            });
             setMessages([{ sender: 'ai', text: 'Merhaba! Ben Elara, Mortanas Hotel\'in sanal asistanıyım. Size nasıl yardımcı olabilirim?' }]);
        } catch (error) {
            console.error("Chatbot initialization failed:", error);
            setMessages([{ sender: 'ai', text: 'Üzgünüm, şu anda hizmet veremiyorum.' }]);
        }
    }, []);

    useEffect(() => {
        if (isOpen && !chatSession.current) {
            initializeChat();
        }
    }, [isOpen, initializeChat]);

    const handleSend = async () => {
        if (!input.trim() || isLoading || !chatSession.current) return;

        const userMessage: Message = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await chatSession.current.sendMessage({ message: input });
            let aiText = response.text;
            
            if (aiText.includes('[OPEN_BOOKING_MODAL]')) {
                aiText = aiText.replace('[OPEN_BOOKING_MODAL]', '').trim();
                onBookNow();
            }
            
            const aiMessage: Message = { sender: 'ai', text: aiText };
            setMessages(prev => [...prev, aiMessage]);

        } catch (error) {
            console.error("Error sending message to Gemini:", error);
            const errorMessage: Message = { sender: 'ai', text: "Üzgünüm, bir sorunla karşılaştım. Lütfen tekrar deneyin." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };
    
    if (!process.env.API_KEY) {
      return null;
    }

    return (
        <>
            <div className={`fixed bottom-0 right-0 m-6 transition-transform duration-300 ${isOpen ? 'transform translate-x-[500px]' : 'transform translate-x-0'}`}>
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-brand-primary text-white p-4 rounded-full shadow-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transform hover:scale-110 transition-transform"
                    aria-label="Sohbeti Aç"
                >
                    <ChatBubbleIcon className="w-8 h-8" />
                </button>
            </div>

            <div className={`fixed bottom-0 right-0 md:m-6 bg-white rounded-t-lg md:rounded-lg shadow-2xl w-full h-full md:w-[400px] md:h-[600px] flex flex-col transition-transform duration-500 ease-in-out z-50 ${isOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}>
                {/* Header */}
                <div className="flex items-center justify-between p-4 bg-brand-light border-b border-gray-200 rounded-t-lg">
                    <div className="flex items-center gap-2">
                        <SparklesIcon className="w-6 h-6 text-brand-primary" />
                        <h3 className="font-bold text-lg text-brand-dark">Otel Asistanı Elara</h3>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800" aria-label="Sohbeti Kapat">
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                    <div className="space-y-4">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] rounded-2xl p-3 text-white ${msg.sender === 'user' ? 'bg-brand-primary rounded-br-none' : 'bg-gray-700 rounded-bl-none'}`}>
                                    <p className="text-sm">{msg.text}</p>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                             <div className="flex justify-start">
                                <div className="max-w-[80%] rounded-2xl p-3 bg-gray-700 rounded-bl-none text-white">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-white rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                                        <div className="w-2 h-2 bg-white rounded-full animate-pulse [animation-delay:-0.15s]"></div>
                                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                </div>

                {/* Input */}
                <div className="p-4 bg-white border-t border-gray-200">
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Bir mesaj yazın..."
                            className="flex-1 w-full border-gray-300 rounded-full shadow-sm p-3 focus:ring-brand-primary focus:border-brand-primary transition pl-5"
                            disabled={isLoading}
                        />
                        <button
                            onClick={handleSend}
                            disabled={isLoading || !input.trim()}
                            className="bg-brand-primary text-white p-3 rounded-full hover:bg-violet-700 disabled:bg-gray-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-colors"
                            aria-label="Gönder"
                        >
                            <SendIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Chatbot;