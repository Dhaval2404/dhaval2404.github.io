"use client";

import { useState } from "react";
import { APP_CONFIG } from "@/app/lib/config";
import { navigationItems } from "./data/navigation";
import Link from "next/link";
import { EmailIcon } from "@/app/components/icons";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed top-0 z-50 w-full border-b border-border-light glass-nav"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="/#home" className="flex items-center gap-3">
          <div className="flex size-9 shrink-0 items-center justify-center overflow-hidden">
            <Image
                src="/favicon.svg"
                alt="Profile"
                width={36}
                height={36}
                className="size-full object-contain"
            />
          </div>
          <span className="hidden text-lg font-semibold tracking-tight text-slate-heading sm:block">
            Dhavalkumar Patel
          </span>
        </a>
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
            <EmailIcon className="size-6" />
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
