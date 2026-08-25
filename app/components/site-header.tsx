"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { APP_CONFIG } from "@/app/lib/config";
import { navigationItems } from "./data/navigation";
import Link from "next/link";
import { EmailIcon } from "@/app/components/icons";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import ThemeToggle from "./theme-toggle";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useActiveSection } from "../hooks/use-active-section";

const sectionIds = navigationItems.map((item) => item.href.split("#")[1]) as readonly string[];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);
  const prefersReducedMotion = useReducedMotion();
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback((restoreFocus: boolean) => {
    setIsMenuOpen(false);
    if (restoreFocus) hamburgerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu(true);
    };
    const closeOnOutsideClick = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!hamburgerRef.current?.closest("nav")?.contains(target)) {
        closeMenu(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, [isMenuOpen, closeMenu]);

  const trapFocus = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab" || !mobilePanelRef.current) return;
    const focusableElements = Array.from(
      mobilePanelRef.current.querySelectorAll<HTMLElement>("a[href]"),
    );
    if (focusableElements.length === 0) return;
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    const current = document.activeElement as HTMLElement | null;
    if (event.shiftKey && (current === firstElement || !mobilePanelRef.current.contains(current))) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && current === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  };

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed top-0 z-50 w-full border-b border-border-light glass-nav"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/#home" className="flex items-center gap-3">
          <div className="flex size-9 shrink-0 items-center justify-center overflow-hidden">
            <Image
                src="/favicon.svg"
                alt="Dhavalkumar Patel logo"
                width={36}
                height={36}
                className="size-full object-contain"
            />
          </div>
          <span className="hidden text-lg font-semibold tracking-tight text-slate-heading sm:block">
            Dhavalkumar Patel
          </span>
        </Link>
        <div className="hidden items-center gap-7 lg:flex">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.href.split("#")[1];
            return (
              <Link
                key={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive
                    ? "font-semibold text-primary"
                    : "text-slate-500 dark:text-slate-400"
                }`}
                href={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-3 md:gap-4">
          <ThemeToggle />
          <a
            href={`mailto:${APP_CONFIG.SOCIAL.EMAIL}`}
            className="hidden sm:inline-flex sm:items-center sm:gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-colors hover:bg-blue-600 xl:inline-flex"
          >
            <EmailIcon className="size-6" />
            <span>Let&apos;s connect</span>
          </a>
          <button
            ref={hamburgerRef}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            onClick={() =>
              isMenuOpen ? closeMenu(false) : setIsMenuOpen(true)
            }
            className="inline-flex size-11 items-center justify-center rounded-lg border border-border-light bg-white text-slate-heading transition-colors hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 md:hidden"
          >
            <span aria-hidden="true">
              {isMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </span>
          </button>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.div
            key="mobile-navigation-panel"
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.25, ease: "easeOut" }
            }
            className="overflow-hidden border-t border-border-light bg-white/95 backdrop-blur md:hidden dark:bg-slate-900/95"
          >
            <div
              ref={mobilePanelRef}
              onKeyDown={trapFocus}
              className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-5"
            >
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: prefersReducedMotion ? 0 : 0.05 * index,
                    duration: 0.2,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => closeMenu(false)}
                    aria-current={
                      activeSection === item.href.split("#")[1]
                        ? "true"
                        : undefined
                    }
                    className={`block rounded-lg px-4 py-3 font-medium transition-colors ${
                      activeSection === item.href.split("#")[1]
                        ? "bg-blue-50 text-primary dark:bg-blue-500/10"
                        : "text-slate-600 hover:bg-blue-50 hover:text-primary dark:text-slate-300 dark:hover:bg-blue-500/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
