import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OpenClaw GTM Skills - The Ultimate Sales Toolkit",
  description:
    "Turn your OpenClaw into a sales machine. 10 skills, 2,500+ prompts, battle-tested by top performers.",
  openGraph: {
    title: "OpenClaw GTM Skills - The Ultimate Sales Toolkit",
    description:
      "Turn your OpenClaw into a sales machine. 10 skills, 2,500+ prompts.",
    url: "https://gtm-skills.com/openclaw",
  },
};

const skills = [
  {
    name: "gtm-prompts",
    emoji: "🎯",
    title: "GTM Prompts",
    description: "Access 2,500+ battle-tested B2B sales prompts",
    example: '"Find me a cold email template for VPs"',
  },
  {
    name: "gtm-cold-email",
    emoji: "📧",
    title: "Cold Email",
    description: "Generate personalized cold emails that get responses",
    example: '"Write a cold email to Sarah at Acme Corp"',
  },
  {
    name: "gtm-linkedin",
    emoji: "💼",
    title: "LinkedIn",
    description: "Connection requests and InMails that get accepted",
    example: '"Draft a connection request for this VP of Sales"',
  },
  {
    name: "gtm-discovery",
    emoji: "🔍",
    title: "Discovery",
    description: "MEDDPICC, SPIN, and Challenger discovery questions",
    example: '"Generate MEDDPICC questions for a CFO"',
  },
  {
    name: "gtm-objections",
    emoji: "🛡️",
    title: "Objections",
    description: "Handle any sales objection with proven responses",
    example: '"They said they don\'t have budget"',
  },
  {
    name: "gtm-meeting-prep",
    emoji: "📋",
    title: "Meeting Prep",
    description: "Briefs, agendas, and talking points in 60 seconds",
    example: '"Prepare me for tomorrow\'s discovery call"',
  },
  {
    name: "gtm-research",
    emoji: "🔬",
    title: "Research",
    description: "Prospect and company research for personalization",
    example: '"Research this company before my call"',
  },
  {
    name: "gtm-voice",
    emoji: "📞",
    title: "Voice",
    description: "Cold call scripts, voicemails, and talk tracks",
    example: '"Give me a cold call opener for CTOs"',
  },
  {
    name: "gtm-battlecards",
    emoji: "⚔️",
    title: "Battlecards",
    description: "Competitive intelligence and trap questions",
    example: '"How do we compare to Competitor X?"',
  },
  {
    name: "gtm-sequences",
    emoji: "🔄",
    title: "Sequences",
    description: "Multi-touch outreach cadences over 14-21 days",
    example: '"Build a 5-touch sequence for enterprise"',
  },
];

export default function OpenClawPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
              <span>🦞</span>
              <span>OpenClaw Integration</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              OpenClaw +{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                GTM Skills
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-zinc-400">
              Turn your OpenClaw into a sales machine.{" "}
              <span className="text-white">10 skills</span>,{" "}
              <span className="text-white">2,500+ prompts</span>, battle-tested
              by top performers.
            </p>

            {/* Quick Install */}
            <div className="mx-auto max-w-2xl rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
              <p className="mb-2 text-sm text-zinc-500">Quick install</p>
              <code className="block overflow-x-auto text-left text-sm text-orange-400">
                npx clawdhub install gtm-skills/gtm-prompts
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="border-b border-zinc-800 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
              <div className="mb-4 text-3xl">2,500+</div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                Battle-Tested Prompts
              </h3>
              <p className="text-sm text-zinc-400">
                Not generic templates. Real prompts used by top performers at
                Salesforce, HubSpot, and Gong.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
              <div className="mb-4 text-3xl">10</div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                Specialized Skills
              </h3>
              <p className="text-sm text-zinc-400">
                From cold email to competitive intel. Every step of the sales
                workflow covered.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
              <div className="mb-4 text-3xl">API</div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                Always Current
              </h3>
              <p className="text-sm text-zinc-400">
                Connected to gtm-skills.com. New prompts added weekly from the
                community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold text-white">
            The Complete GTM Toolkit
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-zinc-400">
            Install individual skills or grab the whole suite. Each skill is
            purpose-built for a specific sales workflow.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group rounded-lg border border-zinc-800 bg-zinc-900/50 p-5 transition-all hover:border-orange-500/50 hover:bg-zinc-900"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-2xl">{skill.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-white">{skill.title}</h3>
                    <code className="text-xs text-zinc-500">{skill.name}</code>
                  </div>
                </div>
                <p className="mb-3 text-sm text-zinc-400">{skill.description}</p>
                <p className="text-xs italic text-zinc-600">{skill.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="border-y border-zinc-800 bg-zinc-900/30 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">
            See It In Action
          </h2>

          {/* Demo 1 */}
          <div className="mb-8 overflow-hidden rounded-lg border border-zinc-800 bg-black">
            <div className="border-b border-zinc-800 bg-zinc-900 px-4 py-2">
              <span className="text-sm text-zinc-400">Cold Email Generation</span>
            </div>
            <div className="p-4 font-mono text-sm">
              <p className="text-zinc-500">
                <span className="text-orange-400">You:</span> Write a cold email
                to Jennifer Martinez, VP of Revenue at CloudScale. They just
                raised Series C and are hiring 20 SDRs.
              </p>
              <div className="my-4 border-l-2 border-orange-500/50 pl-4">
                <p className="mb-2 text-xs text-zinc-600">
                  [Uses gtm-cold-email skill]
                </p>
                <p className="text-zinc-300">
                  <strong>Subject:</strong> Congrats on the Series C, Jennifer
                </p>
                <p className="mt-2 text-zinc-300">Hi Jennifer,</p>
                <p className="mt-2 text-zinc-300">
                  Saw CloudScale just closed Series C - congrats on the momentum.
                </p>
                <p className="mt-2 text-zinc-300">
                  With 20 new SDRs ramping, you&apos;re probably thinking about how
                  to get them productive fast. We&apos;ve helped teams like Datadog
                  cut ramp time by 40%.
                </p>
                <p className="mt-2 text-zinc-300">
                  Worth a 15-min chat to see if there&apos;s a fit?
                </p>
                <p className="mt-2 text-zinc-300">Best,</p>
                <p className="text-zinc-300">[Your name]</p>
              </div>
            </div>
          </div>

          {/* Demo 2 */}
          <div className="overflow-hidden rounded-lg border border-zinc-800 bg-black">
            <div className="border-b border-zinc-800 bg-zinc-900 px-4 py-2">
              <span className="text-sm text-zinc-400">Objection Handling</span>
            </div>
            <div className="p-4 font-mono text-sm">
              <p className="text-zinc-500">
                <span className="text-orange-400">You:</span> The prospect said
                &quot;We&apos;re already using Competitor X and happy with them&quot;
              </p>
              <div className="my-4 border-l-2 border-orange-500/50 pl-4">
                <p className="mb-2 text-xs text-zinc-600">
                  [Uses gtm-objections skill]
                </p>
                <p className="text-zinc-300">Great response:</p>
                <p className="mt-2 text-zinc-300">
                  &quot;That&apos;s great to hear - Competitor X is solid for [use
                  case]. Out of curiosity, what made you choose them
                  originally?&quot;
                </p>
                <p className="mt-2 text-zinc-300">[Wait for response, then:]</p>
                <p className="mt-2 text-zinc-300">
                  &quot;Makes sense. The reason I reached out is that companies like
                  [similar customer] came to us specifically because [key
                  differentiator]. Would it be worth a quick look to see if
                  that&apos;s relevant to where you&apos;re headed?&quot;
                </p>
                <p className="mt-4 text-xs text-zinc-500">
                  The key is to not attack the competitor - validate their
                  choice, then plant a seed about what they might be missing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">
            Installation
          </h2>

          <div className="space-y-6">
            {/* ClawHub Install */}
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">
                Via ClawHub (Recommended)
              </h3>
              <div className="space-y-2 font-mono text-sm">
                {skills.map((skill) => (
                  <div key={skill.name} className="text-orange-400">
                    npx clawdhub install gtm-skills/{skill.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Manual Install */}
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">
                Manual Installation
              </h3>
              <div className="space-y-2 font-mono text-sm text-zinc-400">
                <p className="text-zinc-500"># Clone the repo</p>
                <p className="text-orange-400">
                  git clone https://github.com/Prospeda/gtm-skills
                </p>
                <p className="mt-2 text-zinc-500"># Copy skills to OpenClaw</p>
                <p className="text-orange-400">
                  cp -r gtm-skills/openclaw-skills/* ~/.openclaw/skills/
                </p>
              </div>
            </div>

            {/* GitHub Link */}
            <div className="text-center">
              <a
                href="https://github.com/Prospeda/gtm-skills/tree/main/openclaw-skills"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Frameworks */}
      <section className="border-t border-zinc-800 bg-zinc-900/30 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">
            Frameworks Included
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "MEDDPICC",
              "SPIN Selling",
              "Challenger",
              "Sandler",
              "Gap Selling",
              "BANT",
              "Command of the Message",
              "Force Management",
            ].map((framework) => (
              <span
                key={framework}
                className="rounded-full border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm text-zinc-300"
              >
                {framework}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Ready to Level Up Your Sales Game?
          </h2>
          <p className="mb-8 text-zinc-400">
            Install the skills and start closing more deals today.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://github.com/Prospeda/gtm-skills/tree/main/openclaw-skills"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 px-8 py-3 font-semibold text-white transition-opacity hover:opacity-90"
            >
              Get the Skills
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
            <Link
              href="/prompts"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800 px-8 py-3 font-semibold text-white transition-colors hover:bg-zinc-700"
            >
              Browse All Prompts
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="border-t border-zinc-800 py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500">
            <Link href="/prompts" className="hover:text-white">
              Prompt Library
            </Link>
            <Link href="/developers" className="hover:text-white">
              API Docs
            </Link>
            <Link href="/leaderboard" className="hover:text-white">
              Leaderboard
            </Link>
            <a
              href="https://openclaw.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              OpenClaw.ai
            </a>
            <a
              href="https://github.com/openclaw/openclaw"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              OpenClaw GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
