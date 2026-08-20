import { APP_CONFIG } from "@/app/lib/config";
import Link from "next/link";
import { DownloadIcon } from "@/app/components/icons";
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 lg:flex-row lg:gap-20 lg:py-32"
    >
      <div className="flex-1 space-y-8">
        <div className="space-y-4">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-100 px-3 py-1">
            <span className="relative flex size-3" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex size-3 rounded-full border-2 border-green-100 bg-green-500" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-green-700">
              Available for Freelance/Consulting Opportunities
            </span>
          </div>
          <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-slate-heading md:text-6xl lg:text-7xl">
            Lead Mobile <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Engineer.
            </span>
          </h1>
          <p className="max-w-2xl text-lg font-medium text-slate-body">
            11+ years building secure and scalable mobile platforms. Currently
            modernizing critical payment systems for{" "}
            <strong>Mauritius Commercial Bank</strong>.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition-colors hover:bg-blue-600"
          >
            View Projects <ArrowRight />
          </Link>
          <a
            href={APP_CONFIG.RESUME_PATH}
            download
            className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-slate-100 px-8 py-3.5 font-semibold text-slate-heading transition-colors hover:bg-slate-200"
          >
            Download Resume <DownloadIcon className="size-6" />
          </a>
        </div>
      </div>
      <div className="relative flex w-full flex-1 justify-center lg:justify-end">
        <div className="absolute right-10 top-10 -z-10 aspect-square w-full max-w-md rounded-full bg-linear-to-tr from-blue-100 via-indigo-100 to-transparent blur-3xl" />
        <div className="relative h-[400px] w-full max-w-[500px] overflow-hidden rounded-2xl border border-border-light bg-surface-light shadow-2xl">
          <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]" />
          <div className="flex gap-2 border-b border-border-light bg-slate-50 p-4">
            <div className="flex gap-1.5">
              <span className="size-3 rounded-full bg-red-400" />
              <span className="size-3 rounded-full bg-yellow-400" />
              <span className="size-3 rounded-full bg-green-400" />
            </div>
            <span className="ml-4 font-mono text-xs text-slate-400">
              Dhaval.kt
            </span>
          </div>
          <div className="space-y-2 p-6 font-mono text-sm text-slate-600">
            <p>
              <span className="text-purple-600">object</span>{" "}
              <span className="font-bold text-slate-heading">Dhaval</span>{" "}
              &#123;
            </p>
            <p className="pl-4">
              <span className="text-purple-600">const val</span>{" "}
              <span className="text-indigo-600">experience</span> ={" "}
              <span className="text-green-700">&quot;11+ years&quot;</span>
            </p>
            <p className="pl-4">
              <span className="text-purple-600">val</span>{" "}
              <span className="text-indigo-600">focus</span> ={" "}
              <span className="text-blue-600">listOf</span>(
              <span className="text-green-700">&quot;Mobile&quot;</span>,{" "}
              <span className="text-green-700">&quot;Backend&quot;</span>)
            </p>
            <p className="pl-4">
              <span className="text-purple-600">val</span>{" "}
              <span className="text-indigo-600">strengths</span> ={" "}
              <span className="text-blue-600">listOf</span>(
            </p>
            {["Architecture", "Scalability", "Delivery", "Leadership"].map(
              (strength, index) => (
                <p key={strength} className="pl-8 text-green-700">
                  &quot;{strength}&quot;{index < 3 ? "," : ""}
                </p>
              ),
            )}
            <p className="pl-4">)</p>
            <p>&#125;</p>
          </div>

          <svg
            className="absolute bottom-8 right-8 size-16 rotate-12 text-primary opacity-10"
            viewBox="0 -960 960 960"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M280-120v-720 720Zm226-604q10.15-10.15 10.15-25.23T506-774.46q-10.15-10.15-25.23-10.15t-25.23 10.15q-10.15 10.15-10.15 25.23T455.54-724q10.15 10.15 25.23 10.15T506-724ZM292.31-60q-29.92 0-51.12-21.19Q220-102.39 220-132.31v-695.38Q220-858 241-879q21-21 51.31-21h376.92q29.92 0 51.11 21.19 21.2 21.2 21.2 51.12v126.31q16.46 4.3 27.46 17.19 11 12.88 11 29.96v75.38q0 17.08-11 29.97-11 12.88-27.46 17.19v94.38h-60v-390.38q0-5.39-3.46-8.85-3.47-3.46-8.85-3.46H292.31q-5.39 0-8.85 3.46t-3.46 8.85v695.38q0 5.39 3.46 8.85t8.85 3.46h89.23v60h-89.23ZM599-80.23 469.23-210 599-339.77 640.77-297l-87 87 87 87L599-80.23Zm171.23 0L728.46-123l87-87-87-87 41.77-42.77L900-210 770.23-80.23Z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
