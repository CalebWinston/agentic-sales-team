# Prospeda Pro: Private Moltbot Deployment Guide

Deploy a private agentic BDR for your sales team. Your data, your channels, our GTM tools.

---

## What You Get

| Feature | Description |
|---------|-------------|
| Private Moltbot Instance | Your own AI agent on your infrastructure |
| Multi-Channel | Telegram, WhatsApp, Slack, Discord, MS Teams |
| Persistent Memory | Remembers every conversation, every deal |
| GTM Skills Integration | Access to 2,500+ sales prompts, 24 tonalities |
| Your Data | Connected to your CRM, your docs, your playbooks |
| Voice Cloning | Cold calls and LinkedIn voice messages in your voice |

---

## Deployment Options

### Option 1: Managed Cloud (Recommended)

We deploy and manage everything. You just connect your channels.

**Setup time:** 1 hour
**Monthly:** Included in Prospeda Pro

```
You provide:
- Anthropic API key
- Channel tokens (Telegram bot, Slack app, etc.)
- Your sales playbooks/docs

We handle:
- Server provisioning
- Security hardening
- Updates and maintenance
- Monitoring
```

### Option 2: Self-Hosted (Docker)

Run on your own infrastructure. Full control.

**Setup time:** 2-4 hours
**Requirements:** Docker, 2GB RAM, Anthropic API key

---

## Quick Start: Docker Deployment

### 1. Create docker-compose.yml

```yaml
version: '3.8'

services:
  moltbot:
    image: ghcr.io/prospeda/moltbot-pro:latest
    container_name: prospeda-moltbot
    restart: unless-stopped
    ports:
      - "18789:18789"
    environment:
      # Required
      - ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}

      # Channels (add as needed)
      - TELEGRAM_BOT_TOKEN=${TELEGRAM_BOT_TOKEN}
      - SLACK_BOT_TOKEN=${SLACK_BOT_TOKEN}
      - SLACK_APP_TOKEN=${SLACK_APP_TOKEN}

      # GTM Skills Integration
      - GTM_SKILLS_API_KEY=${GTM_SKILLS_API_KEY}

      # Optional
      - MOLTBOT_MODEL=claude-sonnet-4-20250514
      - MOLTBOT_PORT=18789
    volumes:
      # Persistent data
      - moltbot_data:/home/moltbot/.clawdbot
      - moltbot_workspace:/home/moltbot/workspace
      # Your custom files
      - ./playbooks:/home/moltbot/workspace/playbooks:ro
      - ./personas:/home/moltbot/workspace/personas:ro
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:18789/health"]
      interval: 30s
      timeout: 10s
      retries: 3

volumes:
  moltbot_data:
  moltbot_workspace:
```

### 2. Create .env file

```bash
# .env - DO NOT COMMIT THIS FILE

# Required: Your Anthropic API key
ANTHROPIC_API_KEY=sk-ant-api03-xxxxx

# Telegram (get from @BotFather)
TELEGRAM_BOT_TOKEN=123456789:AABBccDDeeFF

# Slack (get from api.slack.com/apps)
SLACK_BOT_TOKEN=xoxb-xxxxx
SLACK_APP_TOKEN=xapp-xxxxx

# GTM Skills API (get from prospeda.com/settings)
GTM_SKILLS_API_KEY=gtm_xxxxx
```

### 3. Deploy

```bash
docker-compose up -d
```

### 4. Approve Your Access

Message your Telegram bot. It will give you a pairing code.

```bash
docker exec prospeda-moltbot npx clawdbot pairing approve telegram YOUR_CODE
```

---

## Channel Setup

### Telegram

1. Message @BotFather on Telegram
2. Send `/newbot`
3. Name it (e.g., "Acme Sales Bot")
4. Copy the token to `.env`
5. Restart: `docker-compose restart`
6. Message your bot, approve the pairing code

### Slack

1. Go to api.slack.com/apps
2. Create New App → From Scratch
3. Name it, select your workspace
4. OAuth & Permissions:
   - Add Bot Token Scopes: `chat:write`, `channels:history`, `im:history`, `users:read`
5. Install to Workspace
6. Copy Bot Token (`xoxb-...`) to `.env`
7. Socket Mode → Enable → Copy App Token (`xapp-...`) to `.env`
8. Restart: `docker-compose restart`

### WhatsApp (Business)

1. Go to developers.facebook.com
2. Create App → Business → WhatsApp
3. Get Phone Number ID and Access Token
4. Add webhook URL: `https://your-domain.com/webhook/whatsapp`
5. Add to environment and restart

### Discord

1. Go to discord.com/developers/applications
2. Create Application
3. Bot → Add Bot → Copy Token
4. OAuth2 → Generate invite URL with `bot` + `applications.commands`
5. Add bot to your server
6. Add token to `.env`, restart

---

## Workspace Configuration

### Directory Structure

```
workspace/
├── SOUL.md           # Agent personality
├── IDENTITY.md       # Name, avatar, vibe
├── AGENTS.md         # Workspace rules
├── USER.md           # Info about the team
├── MEMORY.md         # Long-term memory
├── POASTING.md       # Content ghostwriting workflow
├── playbooks/        # Your sales playbooks
│   ├── discovery.md
│   ├── objections.md
│   └── closing.md
├── personas/         # Buyer personas
│   ├── cfo.md
│   ├── vp-sales.md
│   └── founder.md
└── memory/           # Daily logs
    └── 2026-01-30.md
```

### SOUL.md Template

```markdown
# SOUL.md - Your Sales AI

You are the AI sales assistant for [COMPANY NAME].

## Core Mission
Help the sales team close more deals faster by handling research,
outreach drafting, and administrative tasks.

## Personality
- Direct and efficient
- Knows our product inside and out
- Speaks like a seasoned sales rep, not a chatbot
- Proactive — flags opportunities, doesn't wait to be asked

## Boundaries
- Never send external messages without human approval
- Never share pricing without approval
- Always verify before booking meetings
- Keep deal details confidential between reps

## Our Products
[Add your product descriptions, pricing tiers, key differentiators]

## Our ICP
[Add your ideal customer profile, industries, company sizes]

## Competitors
[Add competitor info, how we differentiate]
```

### Playbook Example: discovery.md

```markdown
# Discovery Call Playbook

## Before the Call
1. Research the company (10-K, news, job postings)
2. Map the org chart
3. Identify likely pain points based on industry

## Opening (2 min)
- Thank them for time
- Confirm agenda and time
- "What would make this call valuable for you?"

## Discovery Questions (15 min)

### Situation
- Walk me through your current process for [X]
- How long have you been doing it this way?
- Who's involved in that process?

### Problem
- What's the biggest challenge with that approach?
- What happens when [pain point] occurs?
- How does that impact the team?

### Implication
- If you don't solve this, what happens in 6 months?
- What's that costing you in time/money/deals?

### Need-Payoff
- If you could wave a magic wand, what would ideal look like?
- What would solving this mean for your team?

## Qualification (5 min)
- Decision process
- Timeline
- Budget
- Other stakeholders

## Close (3 min)
- Summarize what you heard
- Propose next step
- Confirm attendees for next meeting
```

---

## GTM Skills Integration

Your Moltbot has access to the full GTM Skills library:

### Available Commands

```
/prompts [industry] [role] [workflow]
→ Get specific prompts for your situation

/tonality [name]
→ Switch writing voice (hormozi, voss, sandler, etc.)

/research [company]
→ Pull comprehensive account research

/email [context]
→ Draft personalized outreach

/objection [objection]
→ Get handling strategies
```

### Example Interactions

```
You: Research Acme Corp before my call tomorrow

Bot: Here's what I found on Acme Corp:
- Series B, raised $45M in March
- Hiring 12 SDRs (growth mode)
- CEO quoted in TechCrunch about "scaling outbound"
- Main competitor to [X], differentiates on [Y]
- Key pain points likely: [Z]

Suggested angles for your call:
1. ...
2. ...
3. ...
```

```
You: [screenshot of competitor's LinkedIn post]
cop this linkedin

Bot: **LINKEDIN**

[Fully rewritten post using your angle and examples]

Mechanics adapted:
- Hook structure (contrarian statement)
- List format with specifics
- Soft CTA at end
```

---

## Multi-Channel Memory

Your Moltbot remembers across all channels:

| Channel | Same Memory | Same Context |
|---------|-------------|--------------|
| Telegram | ✓ | ✓ |
| WhatsApp | ✓ | ✓ |
| Slack | ✓ | ✓ |
| Discord | ✓ | ✓ |

Start a conversation on Telegram, continue on Slack. Same deal context, same prospect memory.

---

## Security & Compliance

### Data Isolation
- Your instance is completely isolated
- No data shared with other customers
- All data encrypted at rest and in transit

### Access Control
- Pairing codes required for each user
- Admin can revoke access anytime
- Audit logs available

### API Key Security
- Keys stored encrypted
- Never logged or exposed
- Rotate via Prospeda dashboard

### SOC 2 Considerations
- Self-hosted option for maximum control
- Can run in your VPC
- No data leaves your infrastructure

---

## Monitoring & Logs

### Health Check
```bash
docker exec prospeda-moltbot npx clawdbot health
```

### View Logs
```bash
docker exec prospeda-moltbot npx clawdbot logs --follow
```

### Status Dashboard
```bash
docker exec prospeda-moltbot npx clawdbot status
```

---

## Support

### Managed Customers
- Slack: #prospeda-support
- Email: support@prospeda.com
- Response time: < 4 hours

### Self-Hosted
- Docs: docs.prospeda.com
- GitHub Issues: github.com/Prospeda/moltbot-pro
- Community Discord: discord.gg/prospeda

---

## Pricing

| Plan | Channels | Memory | Support | Price |
|------|----------|--------|---------|-------|
| Pro | 2 | 90 days | Email | $99/mo |
| Team | 5 | Unlimited | Slack | $299/mo |
| Enterprise | Unlimited | Unlimited | Dedicated | Custom |

All plans include:
- Full GTM Skills library access
- Unlimited team members
- API access
- Weekly product updates

---

## Quick Reference

### Start Instance
```bash
docker-compose up -d
```

### Stop Instance
```bash
docker-compose down
```

### View Status
```bash
docker exec prospeda-moltbot npx clawdbot status
```

### Approve User
```bash
docker exec prospeda-moltbot npx clawdbot pairing approve [channel] [code]
```

### Update
```bash
docker-compose pull && docker-compose up -d
```

### Backup
```bash
docker run --rm -v moltbot_data:/data -v $(pwd):/backup alpine tar cvf /backup/moltbot-backup.tar /data
```

---

## Next Steps

1. [ ] Get your Anthropic API key from console.anthropic.com
2. [ ] Create your Telegram bot via @BotFather
3. [ ] Deploy using docker-compose
4. [ ] Approve your access via pairing code
5. [ ] Add your playbooks to the workspace
6. [ ] Invite your team

Questions? Email setup@prospeda.com or book an onboarding call.

---

*Last updated: 2026-01-30*
