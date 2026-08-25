"use client";

import {CSSProperties, Suspense, lazy, useCallback, useEffect, useRef, useState, SyntheticEvent} from "react";
import {APP_CONFIG} from "@/app/lib/config";
import {Bot, SendHorizontal, X} from "lucide-react";
import remarkBreaks from "remark-breaks";

const ReactMarkdown = lazy(() => import("react-markdown"));

type Message = { sender: "user" | "assistant"; text: string };
const chatEndpoint = `${APP_CONFIG.API_BASE_URL}/v1/chat`;
const sessionStorageKey = "dhaval-ai-session-id";
const chatSuggestions = ["About", "Top skills", "Work Experience", "Projects"];

function getSessionId() {
    const existing = window.localStorage.getItem(sessionStorageKey);
    if (existing) return existing;
    const sessionId =
        typeof crypto.randomUUID === "function"
            ? crypto.randomUUID()
            : `chat-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    window.localStorage.setItem(sessionStorageKey, sessionId);
    return sessionId;
}

export default function ChatAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [question, setQuestion] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [mobileViewport, setMobileViewport] = useState({
        height: "100dvh",
        offsetTop: "0px",
    });
    const [messages, setMessages] = useState<Message[]>([
        {
            sender: "assistant",
            text: "Hi! I'm Dhaval's AI Assistant. Ask me anything about his experience, skills, education, certifications or projects!",
        },
    ]);
    const inputRef = useRef<HTMLInputElement>(null);
    const fabButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (isOpen) inputRef.current?.focus();
    }, [isOpen]);

    const closeChat = useCallback(() => {
        setIsOpen(false);
        fabButtonRef.current?.focus();
    }, []);

    useEffect(() => {
        if (!isOpen || !window.matchMedia("(max-width: 639px)").matches) return;

        const previousOverflow = document.body.style.overflow;
        const updateViewport = () => {
            const viewport = window.visualViewport;
            setMobileViewport({
                height: `${viewport?.height ?? window.innerHeight}px`,
                offsetTop: `${viewport?.offsetTop ?? 0}px`,
            });
        };

        document.body.style.overflow = "hidden";
        updateViewport();
        window.visualViewport?.addEventListener("resize", updateViewport);
        window.visualViewport?.addEventListener("scroll", updateViewport);
        window.addEventListener("resize", updateViewport);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.visualViewport?.removeEventListener("resize", updateViewport);
            window.visualViewport?.removeEventListener("scroll", updateViewport);
            window.removeEventListener("resize", updateViewport);
        };
    }, [isOpen]);

    useEffect(() => {
        const closeOnEscape = (event: KeyboardEvent) =>
            event.key === "Escape" && closeChat();
        document.addEventListener("keydown", closeOnEscape);
        return () => document.removeEventListener("keydown", closeOnEscape);
    }, [closeChat]);

    const askQuestion = async (value: string) => {
        const message = value.trim();
        if (!message || isLoading) return;
        setQuestion("");
        setMessages((current) => [...current, {sender: "user", text: message}]);
        setIsLoading(true);
        try {
            const response = await fetch(chatEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Session-Id": getSessionId(),
                },
                body: JSON.stringify({message}),
            });
            if (!response.ok)
                throw new Error(`Chat request failed with status ${response.status}`);
            const contentType = response.headers.get("content-type") ?? "";
            let reply: string;
            if (contentType.includes("application/json")) {
                const data = (await response.json()) as Record<string, string>;
                reply =
                    data.reply ??
                    data.message ??
                    data.answer ??
                    data.response ??
                    "I received the message, but the reply format was empty.";
            } else {
                reply = (await response.text()).trim();
            }
            setMessages((current) => [
                ...current,
                {sender: "assistant", text: reply},
            ]);
        } catch (error) {
            console.error(error);
            setMessages((current) => [
                ...current,
                {
                    sender: "assistant",
                    text: "I could not reach the chat assistant right now.",
                },
            ]);
        } finally {
            setIsLoading(false);
            inputRef.current?.focus();
        }
    };

    const submit = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        void askQuestion(question);
    };

    return (
        <aside className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6">
            {isOpen && (
                <section
                    aria-label="Dhaval's AI Assistant"
                    className="fixed inset-x-0 top-0 flex h-[var(--chat-height)] w-full translate-y-[var(--chat-offset-top)] flex-col overflow-hidden bg-white sm:static dark:bg-slate-900 sm:mb-4 sm:block sm:h-auto sm:w-[calc(100vw-2.5rem)] sm:max-w-sm sm:translate-y-0 sm:rounded-2xl sm:border sm:border-border-light sm:shadow-2xl"
                    style={{
                        "--chat-height": mobileViewport.height,
                        "--chat-offset-top": mobileViewport.offsetTop,
                    } as CSSProperties}
                >
                    <header className="flex shrink-0 items-center justify-between bg-primary px-5 py-4 text-white">
                        <div className="flex items-center gap-3">
              <span className="flex rounded-full bg-white/15 p-2" aria-hidden="true">
                <Bot />
              </span>
                            <div>
                                <h2 className="font-bold">Dhaval&apos;s AI Assistant</h2>
                                <p className="text-xs text-blue-100">
                                    Usually replies instantly
                                </p>
                            </div>
                        </div>
                        <button
                            type="button"
                            aria-label="Close chat"
                            onClick={closeChat}
                            className="inline-flex size-9 items-center justify-center rounded-full hover:bg-white/15"
                        >
              <X aria-hidden="true" />
                        </button>
                    </header>
                    <div
                        aria-live="polite"
                        role="log"
                        className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto bg-slate-50 p-4 text-sm dark:bg-slate-950 sm:h-82 sm:flex-none"
                    >
                        {messages.map((message, index) => (
                            <div
                                key={`${message.sender}-${index}`}
                                className={
                                    message.sender === "user"
                                        ? "max-w-[88%] self-end rounded-2xl rounded-br-md bg-primary px-4 py-3 leading-relaxed text-white shadow-sm"
                                        : "max-w-[88%] self-start rounded-2xl rounded-bl-md bg-white px-4 py-3 leading-relaxed text-slate-700 shadow-sm dark:bg-slate-800 dark:text-slate-200"
                                }
                                    >
                                        <Suspense fallback={<>{message.text}</>}>
                                            <ReactMarkdown remarkPlugins={[remarkBreaks]}>{message.text}</ReactMarkdown>
                                        </Suspense>
                                    </div>
                        ))}
                        {isLoading && (
                            <div
                                className="flex items-center gap-1.5 self-start rounded-2xl rounded-bl-md bg-white px-4 py-3.5 shadow-sm dark:bg-slate-800"
                                aria-label="Assistant is typing"
                                role="status">
                                {[0, 1, 2].map((dot) => (
                                    <span
                                        key={dot}
                                        className="size-2 animate-bounce rounded-full bg-slate-400 dark:bg-slate-500"
                                        style={{animationDelay: `${dot * 150}ms`, animationDuration: "0.9s"}}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="shrink-0 border-t border-border-light bg-white p-4 dark:bg-slate-900">
                        <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
                            {chatSuggestions.map((suggestion) => (
                                <button
                                    key={suggestion}
                                    type="button"
                                    onClick={() => void askQuestion(suggestion)}
                                    disabled={isLoading}
                                    className="whitespace-nowrap rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-blue-100 disabled:opacity-60 dark:border-blue-500/30 dark:bg-blue-500/10 dark:hover:bg-blue-500/20"
                                >
                                    {suggestion}
                                </button>
                            ))}
                        </div>
                        <form onSubmit={submit} className="flex items-center gap-2">
                            <label className="sr-only" htmlFor="chat-input">
                                Ask a question
                            </label>
                            <input
                                ref={inputRef}
                                id="chat-input"
                                value={question}
                                onChange={(event) => setQuestion(event.target.value)}
                                autoComplete="off"
                                disabled={isLoading}
                                placeholder="Ask a question..."
                                required
                                className="min-w-0 flex-1 caret-slate-900 rounded-full border-slate-300 bg-slate-100 px-4.5 py-2.5 dark:caret-white dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 text-sm focus:border-primary focus:ring-primary appearance-none bg-clip-padding"
                            />
                            <button
                                type="submit"
                                disabled={isLoading}
                                aria-label="Send message"
                                className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-blue-600 disabled:opacity-70"
                            >
                <SendHorizontal className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </form>
                    </div>
                </section>
            )}
            <button
                ref={fabButtonRef}
                type="button"
                onClick={() => setIsOpen((open) => !open)}
                aria-expanded={isOpen}
                aria-label={
                    isOpen ? "Close Dhaval's AI Assistant" : "Open Dhaval's AI Assistant"
                }
                className="group ml-auto flex size-14 items-center justify-center overflow-hidden rounded-full bg-primary font-bold text-white shadow-xl shadow-blue-500/30 transition-all duration-300 hover:w-64 hover:-translate-y-0.5 hover:justify-start hover:px-5 hover:bg-blue-600"
            >
        <span className="shrink-0" aria-hidden="true">
          {isOpen ? <X /> : <Bot />}
        </span>
                <span
                    className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:max-w-48 group-hover:opacity-100">
          Dhaval&apos;s AI Assistant
        </span>
            </button>
        </aside>
    );
}
