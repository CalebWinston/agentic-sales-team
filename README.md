# Agentic Sales Team

**5 autonomous AI agents that run your entire GTM operation 24/7.**

A self-maintaining fleet of specialized sales agents built on [OpenClaw](https://docs.openclaw.ai). Each agent has its own personality, memory, and strategy — and they coordinate work through shared files, not databases.

Scout finds the prospects. Writer crafts the copy. Rep runs outreach. Closer wins the deals. Mission Control keeps everything running.

Total cost: **~$15-30/month** for 24/7 autonomous operation.

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      MISSION CONTROL                            │
│                     Chief of Staff                              │
│                                                                 │
│   Fleet management  ·  Security audits  ·  Daily standups       │
│   Strategy updates  ·  Pipeline coordination                    │
└─────────────────────────────────────────────────────────────────┘
                              │
           ┌──────────────────┼──────────────────┐
           │                  │                  │
           ▼                  ▼                  ▼
     ┌──────────┐      ┌──────────┐      ┌──────────┐
     │  SCOUT   │ ───► │  WRITER  │ ───► │   REP    │
     │          │      │          │      │          │
     │ Research │      │   Copy   │      │ Outreach │
     └──────────┘      └──────────┘      └──────────┘
                                               │
                                               ▼
                                        ┌──────────┐
                                        │  CLOSER  │
                                        │          │
                                        │  Deals   │
                                        └──────────┘
```

### How It Works

Agents wake on **staggered 15-minute heartbeats** via cron. On each wake, they:

1. Read their personality file (who they are)
2. Read their strategy file (how they operate)
3. Check the shared pipeline file (what needs doing)
4. Execute work or reply `HEARTBEAT_OK`
5. Go back to sleep

Memory is **files, not databases**. Every agent reads and writes to human-readable markdown files. You can inspect, edit, or override anything at any time.

---

## The Agents

### Scout — Research & Intelligence

The hunter. Scout finds prospects, researches companies, and spots buying signals others miss. Never delivers raw data — always comes with an opinion and a suggested next move.

- Qualifies prospects against your ICP
- Tracks funding, hiring, leadership changes, and competitive signals
- Briefs Writer and Rep with actionable research
- Proactively flags opportunities and problems

**Personality:** Curious, proactive, sharp, opinionated, relentless.

### Writer — Sales Copy & Content

The wordsmith. Writer crafts cold emails that get replies, LinkedIn posts that drive engagement, and follow-up sequences that convert. Every word earns its place.

- 50-75 word cold emails (3-4 sentences max)
- 4-touch follow-up sequences that get shorter over time
- LinkedIn posts with hooks that stop the scroll
- 24 writing tonalities from Executive Briefing to Challenger

**Personality:** Sharp, creative, concise, persuasive, proactive.

### Rep — Outreach & Engagement

The door-opener. Rep executes multi-channel outreach, handles objections, manages follow-ups, and books meetings. Knows when to push and when to try a different angle.

- Multi-channel sequences (email, LinkedIn, phone, voicemail)
- Objection handling with diagnosis (real objection vs. brush-off)
- Call scripts and voicemail templates (12-18 seconds max)
- CRM logging and deal stage management

**Personality:** Direct, creative, persistent, empathetic, proactive.

### Closer — Deals & Revenue

The finisher. Closer handles proposals, negotiations, stalled deals, and revenue. Sees the whole deal, not just the next step. Asks for the business.

- Proposal generation with ROI justification
- MEDDPICC qualification framework
- Price objection handling and negotiation tactics
- Stalled deal revival campaigns
- Win/loss analysis

**Personality:** Strategic, direct, perceptive, patient, proactive.

### Mission Control — Fleet Coordination

The immune system. Mission Control doesn't do sales work. It maintains the fleet — updates strategies, audits security, runs daily standups, and ensures smooth handoffs between agents.

- Fleet health monitoring every 30 minutes
- Daily standup compiled and delivered at 23:30
- Security audits on code changes and workspace access
- Strategy propagation when you change direction
- Pipeline bottleneck identification

**Personality:** Methodical, vigilant, operator-first.

---

## Heartbeat Schedule

| Agent | Cron | Model | Cost |
|-------|------|-------|------|
| Mission Control | `:00, :30` | Sonnet | ~$3/mo |
| Scout | `:00, :15, :30, :45` | Haiku | ~$3/mo |
| Writer | `:02, :17, :32, :47` | Haiku | ~$3/mo |
| Rep | `:04, :19, :34, :49` | Haiku | ~$3/mo |
| Closer | `:06, :21, :36, :51` | Haiku | ~$3/mo |

**Total: ~$15-30/month** depending on creative work volume.

Staggered schedule prevents thundering herd and ensures orderly handoffs between agents.

---

## Memory System

No vector databases. No black boxes. Just files.

```
workspace/
├── SOUL.md             # Agent identity and personality
├── MEMORY.md           # Long-term learnings and patterns
├── STRATEGY-*.md       # Operational playbooks
├── WORKING.md          # Live pipeline state (single source of truth)
├── PROGRESS.md         # Metrics and system health
├── HEARTBEAT.md        # Wake-up checklists
└── memory/
    └── YYYY-MM-DD.md   # Daily activity logs
```

The compounding effect:
- **Week 1:** Basic ICP, generic outreach
- **Week 4:** Learned patterns, refined targeting
- **Week 12:** Knows deals better than your CRM
- **Week 24:** Predictive insights, proactive suggestions

---

## Deploy

### Prerequisites

- [OpenClaw](https://docs.openclaw.ai) installed (`npm install -g clawdbot`)
- Anthropic API key
- Telegram bot (from @BotFather)
- Server or Mac running 24/7

### Quick Start

```bash
# Clone this repo
git clone https://github.com/CalebWinston/agentic-sales-team.git
cd agentic-sales-team

# Copy config template
cp deployment/config.template.json ~/.clawdbot/clawdbot.json

# Edit with your API keys and Telegram bot token
nano ~/.clawdbot/clawdbot.json

# Copy workspace files to agent workspace
mkdir -p ~/clawd/memory
cp deployment/*.md ~/clawd/
cp agents/*.md ~/clawd/

# Set environment variables
export ANTHROPIC_API_KEY="your-key"

# Start the gateway
clawdbot gateway start

# Run setup script (configures all cron jobs)
cd deployment && chmod +x setup.sh && ./setup.sh
```

### Security

- Telegram locked to specific chat and user IDs
- Each agent isolated to its own workspace
- No sudo or system-level access
- Mission Control audits all changes before deployment
- Human-in-the-loop approval for strategy changes

See `deployment/ARCHITECTURE.md` for the full security model.

---

## Repo Structure

```
agentic-sales-team/
├── agents/
│   ├── scout.md              # Scout personality and behavior
│   ├── writer.md             # Writer personality and behavior
│   ├── rep.md                # Rep personality and behavior
│   ├── closer.md             # Closer personality and behavior
│   └── mission-control.md    # Mission Control personality and behavior
├── deployment/
│   ├── ARCHITECTURE.md       # Full system architecture docs
│   ├── HEARTBEAT.md          # Agent wake-up checklists
│   ├── MEMORY.md             # Long-term memory template
│   ├── WORKING.md            # Pipeline state template
│   ├── PROGRESS.md           # Metrics and health template
│   ├── STRATEGY-SCOUT.md     # Scout operational playbook
│   ├── STRATEGY-WRITER.md    # Writer operational playbook
│   ├── STRATEGY-REP.md       # Rep operational playbook
│   ├── STRATEGY-CLOSER.md    # Closer operational playbook
│   ├── config.template.json  # OpenClaw config template
│   └── setup.sh              # Automated cron setup script
├── README.md
└── LICENSE
```

---

## Cost Breakdown

| Component | Monthly Cost |
|-----------|-------------|
| Haiku heartbeats (4 agents x 96/day) | ~$11.50 |
| Sonnet heartbeats (Mission Control x 48/day) | ~$3.00 |
| Creative work (email drafting, research) | ~$5-15 |
| **Total** | **~$15-30** |

Compare that to hiring one SDR.

---

## License

MIT License. See [LICENSE](./LICENSE).

---

## Author

Built by [Caleb Winston](https://github.com/CalebWinston).

Part of the [Prospeda](https://prospeda.com) ecosystem — AI-native tools for modern sales teams.
