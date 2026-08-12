"use client";

import { useState } from "react";
import { APP_CONFIG } from "@/app/lib/config";
import { navigationItems } from "./data/navigation";
import Link from "next/link";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed top-0 z-50 w-full border-b border-border-light glass-nav"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/#home" className="flex items-center gap-3">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary font-bold text-white">
            DP
          </span>
          <span className="hidden text-lg font-semibold tracking-tight text-slate-heading sm:block">
            Dhavalkumar Patel
          </span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              className="text-sm font-medium text-slate-500 transition-colors hover:text-primary"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3 md:gap-6">
          <a
            href={`mailto:${APP_CONFIG.SOCIAL.EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-colors hover:bg-blue-600"
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              mail
            </span>
            <span>Let&apos;s connect</span>
          </a>
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex size-11 items-center justify-center rounded-lg border border-border-light bg-white text-slate-heading transition-colors hover:bg-slate-50 md:hidden"
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="border-t border-border-light bg-white/95 px-6 py-5 shadow-lg md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-4 py-3 font-medium text-slate-600 hover:bg-blue-50 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
