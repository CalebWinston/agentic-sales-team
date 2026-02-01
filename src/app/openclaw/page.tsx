import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "OpenClaw GTM Skills - The Ultimate Sales Toolkit",
  description:
    "One install. Complete sales toolkit. Cold emails, discovery, objections, LinkedIn, research — all inside your OpenClaw.",
  openGraph: {
    title: "OpenClaw GTM Skills - The Ultimate Sales Toolkit",
    description: "One install. Complete sales toolkit for OpenClaw.",
    url: "https://gtm-skills.com/openclaw",
  },
};

const commands = [
  { cmd: "gtm email", desc: "Cold email", example: "gtm email Sarah Chen, VP Sales at Acme" },
  { cmd: "gtm reply", desc: "Handle objection", example: 'gtm reply "we don\'t have budget"' },
  { cmd: "gtm questions", desc: "Discovery questions", example: "gtm questions VP of Engineering" },
  { cmd: "gtm linkedin", desc: "Connection request", example: "gtm linkedin James Wilson, TechFlow" },
  { cmd: "gtm prep", desc: "Meeting brief", example: "gtm prep CloudFirst - meeting with CTO" },
  { cmd: "gtm research", desc: "Company intel", example: "gtm research DataSync" },
  { cmd: "gtm call", desc: "Cold call script", example: "gtm call CTO at a fintech" },
  { cmd: "gtm voicemail", desc: "Voicemail script", example: "gtm voicemail follow-up" },
  { cmd: "gtm battlecard", desc: "Competitive intel", example: "gtm battlecard vs Salesforce" },
  { cmd: "gtm sequence", desc: "Multi-touch cadence", example: "gtm sequence enterprise 14-day" },
];

const tonalities = [
  {
    name: "Direct",
    flag: "--direct",
    desc: "No fluff. Default.",
    example: `Subject: Sales cycles

Sarah - saw the Series B.

Question: how are you handling longer sales cycles as you scale?

We helped Datadog cut theirs by 30%.

15 min to see if relevant?`,
  },
  {
    name: "Blunt",
    flag: "--blunt",
    desc: "Shortest possible.",
    example: `Subject: Quick question

Sarah - are slow sales cycles costing you deals?

If yes, let's talk. If no, ignore this.`,
  },
  {
    name: "Challenger",
    flag: "--challenger",
    desc: "Push back, teach.",
    example: `Subject: The real problem with Series B scaling

Sarah - most companies focus on hiring more reps.

The ones that win focus on cycle time first.

Worth a contrarian take?`,
  },
  {
    name: "Executive",
    flag: "--exec",
    desc: "C-suite brevity.",
    example: `Subject: Acme sales velocity

Sarah - quick hypothesis: your Q2 target requires 30% faster cycles.

We've done this for 3 similar companies. 15 minutes to pressure-test?`,
  },
];

export default function OpenClawPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 text-4xl">
              <span>🦞</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              One Install. Done.
            </h1>
            <p className="mx-auto mb-8 max-w-xl text-lg text-zinc-400">
              Complete sales toolkit for OpenClaw. Cold emails, discovery, objections, LinkedIn, research — everything.
            </p>

            {/* Install Command */}
            <div className="mx-auto max-w-md rounded-xl border border-orange-500/30 bg-zinc-900 p-6">
              <code className="block text-lg text-orange-400 font-mono">
                npx clawdhub install gtm-skills/gtm
              </code>
              <p className="mt-3 text-sm text-zinc-500">That's it. You're done.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Usage */}
      <section className="py-16 border-b border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-white text-center">Usage</h2>

          <div className="grid gap-3 sm:grid-cols-2">
            {commands.slice(0, 6).map((cmd) => (
              <div
                key={cmd.cmd}
                className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <code className="text-orange-400 font-mono text-sm">{cmd.cmd}</code>
                  <span className="text-xs text-zinc-500">{cmd.desc}</span>
                </div>
                <code className="text-xs text-zinc-400 font-mono block truncate">
                  {cmd.example}
                </code>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-4">
            {commands.slice(6).map((cmd) => (
              <div
                key={cmd.cmd}
                className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-3 text-center"
              >
                <code className="text-orange-400 font-mono text-sm">{cmd.cmd}</code>
                <p className="text-xs text-zinc-500 mt-1">{cmd.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tonalities */}
      <section className="py-16 border-b border-zinc-800 bg-zinc-900/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">Tonalities</h2>
            <p className="text-zinc-400">Choose your style. Default is direct — no fluff.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {tonalities.map((tone) => (
              <div
                key={tone.name}
                className="rounded-xl border border-zinc-800 bg-black overflow-hidden"
              >
                <div className="border-b border-zinc-800 bg-zinc-900 px-4 py-3 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-white">{tone.name}</span>
                    <code className="ml-2 text-xs text-orange-400">{tone.flag}</code>
                  </div>
                  <span className="text-xs text-zinc-500">{tone.desc}</span>
                </div>
                <pre className="p-4 text-sm text-zinc-300 font-mono whitespace-pre-wrap overflow-x-auto">
                  {tone.example}
                </pre>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks */}
      <section className="py-16 border-b border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-white text-center">Frameworks</h2>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["MEDDPICC", "SPIN", "Challenger", "Sandler", "Gap Selling", "BANT"].map((fw) => (
              <span
                key={fw}
                className="rounded-full border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm text-zinc-300"
              >
                {fw}
              </span>
            ))}
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 font-mono text-sm">
            <div className="text-zinc-400 mb-2"># Use any framework:</div>
            <div className="text-orange-400">gtm questions --meddpicc VP of Engineering</div>
            <div className="text-orange-400">gtm questions --spin CFO</div>
            <div className="text-orange-400">gtm questions --challenger Head of Sales</div>
          </div>
        </div>
      </section>

      {/* Full Command Reference */}
      <section className="py-16 border-b border-zinc-800 bg-zinc-900/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-white text-center">All Commands</h2>

          <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            {[
              { cmd: "gtm email", desc: "Cold email" },
              { cmd: "gtm followup", desc: "Follow-up email" },
              { cmd: "gtm breakup", desc: "Final attempt" },
              { cmd: "gtm linkedin", desc: "Connection request" },
              { cmd: "gtm inmail", desc: "LinkedIn InMail" },
              { cmd: "gtm questions", desc: "Discovery questions" },
              { cmd: "gtm reply", desc: "Handle objection" },
              { cmd: "gtm prep", desc: "Meeting brief" },
              { cmd: "gtm research", desc: "Company intel" },
              { cmd: "gtm call", desc: "Cold call script" },
              { cmd: "gtm voicemail", desc: "Voicemail script" },
              { cmd: "gtm battlecard", desc: "Competitive intel" },
              { cmd: "gtm sequence", desc: "Outreach cadence" },
            ].map((item) => (
              <div
                key={item.cmd}
                className="flex items-center justify-between rounded-lg border border-zinc-800 bg-black px-4 py-3"
              >
                <code className="text-orange-400 font-mono text-sm">{item.cmd}</code>
                <span className="text-xs text-zinc-500">{item.desc}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Flags</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { flag: "--direct", desc: "No fluff" },
                { flag: "--blunt", desc: "Shortest" },
                { flag: "--challenger", desc: "Push back" },
                { flag: "--exec", desc: "C-suite" },
                { flag: "--friendly", desc: "Add warmth" },
                { flag: "--meddpicc", desc: "Framework" },
                { flag: "--spin", desc: "Framework" },
              ].map((item) => (
                <div
                  key={item.flag}
                  className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-sm"
                >
                  <code className="text-orange-400">{item.flag}</code>
                  <span className="text-zinc-500 ml-2">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-white">Get Started</h2>

          <div className="rounded-xl border border-orange-500/30 bg-zinc-900 p-6 mb-6">
            <code className="block text-lg text-orange-400 font-mono">
              npx clawdhub install gtm-skills/gtm
            </code>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/Prospeda/gtm-skills/tree/main/openclaw-skills"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-800 border border-zinc-700 px-6 py-3 font-medium text-white hover:bg-zinc-700 transition-colors"
            >
              View on GitHub
            </a>
            <Link
              href="/prompts"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
            >
              Browse all prompts
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="border-t border-zinc-800 py-8">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500">
            <a href="https://openclaw.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              OpenClaw.ai
            </a>
            <Link href="/developers" className="hover:text-white">
              API Docs
            </Link>
            <Link href="/prompts" className="hover:text-white">
              Prompts
            </Link>
            <a href="https://github.com/Prospeda/gtm-skills" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
