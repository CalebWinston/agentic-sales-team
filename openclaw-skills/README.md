# Meet the Team

Three AI agents. Three channels. Your 24/7 sales team.

| Agent | Role | Email | Personality |
|-------|------|-------|-------------|
| **Mira** | Research | mira@gtm-skills.com | Curious, sharp, relentless |
| **Sloane** | Outreach | sloane@gtm-skills.com | Direct, creative, persistent |
| **Vera** | Deals | vera@gtm-skills.com | Strategic, perceptive, closes |

## How It Works

```
You: "Find me SaaS companies hiring SDRs"
Mira: "On it. What size? What stage? VP level or Director?"

You: "Series B, VP of Sales"
Mira: "Found 10. Top pick is Sarah Chen at Acme - just raised $25M,
       hiring 5 SDRs. Want me to get her email and brief Sloane?"

You: "Yes"
Mira: "Done. Sloane, here's Sarah Chen. Angle: SDR ramp time."

You → Sloane: "Email Sarah"
Sloane: "Got it from Mira. What tone - direct, challenger, blunt?"

You: "Challenger"
Sloane: [Writes email] "Ready. Want a sequence too, or just this one?"

[Sarah responds: "We're already using a competitor"]

You → Sloane: "She said they're using a competitor"
Sloane: "Classic. Here are 3 responses. The Chris Voss one usually
         works best. Also - how long have they been with them?"

[Meeting happens, she's interested]

You → Vera: "She wants a proposal"
Vera: "Great. Before I write this - who else needs to approve?
       And what did she say the main pain is?"

You: "She's the decision maker. Pain is SDR ramp time"
Vera: [Writes proposal] "Done. But before you send - do we know
       the timeline? That affects how I'd position the pricing."
```

## They're Proactive

Every agent:
- Asks clarifying questions before acting
- Suggests next steps after delivering
- Flags problems before they become issues
- Pushes the deal forward, not just responds

**They never end a response without a question or suggestion.**

## They Use GTM Skills

All agents pull from **gtm-skills.com**:

| Resource | URL |
|----------|-----|
| 420+ Prompts | gtm-skills.com/prompts |
| 24 Tonalities | gtm-skills.com/free-tools/tonalities |
| Voice Templates | gtm-skills.com/voice-templates |
| Methodologies | gtm-skills.com/methodology |
| Workflows | gtm-skills.com/workflow |
| Agentic BDR | gtm-skills.com/agentic-bdr |

## Setup

### Option 1: Claude Projects
Create 3 projects, paste each SKILL.md:

1. **Mira** → `scout/SKILL.md`
2. **Sloane** → `rep/SKILL.md`
3. **Vera** → `closer/SKILL.md`

### Option 2: OpenClaw
```bash
npx clawdhub install gtm-skills/mira
npx clawdhub install gtm-skills/sloane
npx clawdhub install gtm-skills/vera
```

### Option 3: Slack/Telegram
Deploy as bots to 3 channels. Use `bots/telegram/` as a starting point.

## The Flow

```
         MIRA                    SLOANE                    VERA
    ┌────────────┐          ┌────────────┐          ┌────────────┐
    │  Research  │          │  Outreach  │          │   Deals    │
    │            │          │            │          │            │
    │ • Find     │   ───▶   │ • Email    │   ───▶   │ • Propose  │
    │ • Research │          │ • Call     │          │ • Negotiate│
    │ • Enrich   │          │ • Follow   │          │ • Close    │
    │ • Signal   │          │ • Handle   │          │ • Invoice  │
    └────────────┘          └────────────┘          └────────────┘
          │                       │                       │
          └───────────────────────┴───────────────────────┘
                                  │
                                  ▼
                        ┌─────────────────────┐
                        │   gtm-skills.com    │
                        │ prompts • tonalities │
                        │ templates • methods  │
                        └─────────────────────┘
```

## Talk to Them Like Teammates

Don't give commands. Have conversations.

| Instead of... | Try... |
|---------------|--------|
| "Write email" | "Email Sarah at Acme - she's hiring SDRs" |
| "Handle objection" | "She said they're not interested" |
| "Send proposal" | "She wants pricing. $2K/mo range?" |

They'll ask for what they need.

---

**Mira** finds. **Sloane** engages. **Vera** closes.

*What are we working on today?*
