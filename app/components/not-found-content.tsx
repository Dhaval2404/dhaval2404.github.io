import Link from "next/link";

export default function NotFoundContent() {
  return (
    <section className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 lg:flex-row lg:gap-20 lg:py-32">
      {/* Left Side: Content */}
      <div className="flex-1 space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
        <div className="space-y-4">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-100 px-3 py-1 w-fit">
            <span className="relative flex size-3" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex size-3 rounded-full border-2 border-red-100 bg-red-500" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-red-700">
              Error 404: Page Not Found
            </span>
          </div>

          <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-slate-heading md:text-6xl lg:text-7xl">
            Page Not <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Found.
            </span>
          </h1>

          <p className="max-w-2xl text-lg font-medium text-slate-body">
            The page you are looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition-colors hover:bg-blue-600"
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_back
            </span>
            Back to Home
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-slate-100 px-8 py-3.5 font-semibold text-slate-heading transition-colors hover:bg-slate-200"
          >
            View Projects{" "}
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>

      {/* Right Side: Mockup */}
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
              router.js
            </span>
          </div>

          <div className="space-y-2 p-6 font-mono text-sm text-slate-600 relative z-10">
            <p>
              <span className="text-purple-600">const</span>{" "}
              <span className="font-bold text-slate-heading">resolveRoute</span>{" "}
              = (path) =&gt; {"{"}
            </p>
            <p className="pl-4">
              <span className="text-purple-600">if</span> (!routes.
              <span className="text-blue-600">has</span>(path)) {"{"}
            </p>
            <p className="pl-8">
              <span className="text-purple-600">return</span> {"{"}
            </p>
            <p className="pl-12">
              status: <span className="text-rose-600">404</span>,
            </p>
            <p className="pl-12">
              error:{" "}
              <span className="text-green-700">{"'PAGE_NOT_FOUND'"}</span>,
            </p>
            <p className="pl-12">
              message:{" "}
              <span className="text-green-700">{"'Destination unmapped'"}</span>
            </p>
            <p className="pl-8">{"};"}</p>
            <p className="pl-4">{"}"}</p>
            <p className="pl-4">
              <span className="text-slate-400">{"// ..."}</span>
            </p>
            <p>{"};"}</p>
          </div>

          <span
            className="material-symbols-outlined absolute bottom-0 right-0 p-8 text-6xl! text-primary opacity-10 rotate-12 pointer-events-none"
            aria-hidden="true"
          >
            question_mark
          </span>
        </div>
      </div>
    </section>
  );
}
