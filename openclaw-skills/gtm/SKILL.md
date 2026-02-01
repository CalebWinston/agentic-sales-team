---
name: gtm
description: Complete GTM toolkit. Cold emails, discovery, objections, LinkedIn, research, and more. One skill, everything you need.
homepage: https://gtm-skills.com/openclaw
metadata: {"openclaw":{"emoji":"🚀","requires":{"bins":["curl"]}}}
---

# GTM Skills

The complete sales toolkit. One install, everything you need.

## Commands

### Direct Mode (No Fluff)

```
gtm email [name] [company]
```
Write a cold email. No pleasantries, no "hope this finds you well." Just the message.

```
gtm reply [objection]
```
Handle an objection. Acknowledge, pivot, close.

```
gtm questions [persona]
```
Discovery questions for any persona. Straight to the pain.

```
gtm linkedin [name]
```
Connection request under 300 chars. No fluff.

```
gtm prep [company]
```
60-second meeting brief. What matters, nothing else.

```
gtm research [company]
```
Company intel: funding, hiring, news. Facts only.

---

## Tonalities

### Direct (Default)
No pleasantries. No "I hope this finds you well." Respect their time.

```
You: gtm email Sarah Chen, VP Sales at Acme. They raised Series B. We cut sales cycles 30%.

Output:
Subject: Sales cycles

Sarah - saw the Series B, congrats.

Question: how are you handling longer sales cycles as you scale?

We helped Datadog cut theirs by 30%.

15 min to see if relevant?
```

### Blunt
Even shorter. Almost rude but not quite.

```
You: gtm email --blunt Sarah Chen, Acme

Output:
Subject: Quick question

Sarah - are slow sales cycles costing you deals?

If yes, let's talk. 15 min.

If no, ignore this.
```

### Challenger
Push back. Teach them something.

```
You: gtm email --challenger Sarah Chen, Acme

Output:
Subject: The real problem with Series B scaling

Sarah - most Series B companies focus on hiring more reps.

The ones that win focus on cycle time first.

Worth a contrarian take?
```

### Executive
For C-suite. One paragraph max.

```
You: gtm email --exec Sarah Chen, Acme

Output:
Subject: Acme sales velocity

Sarah - quick hypothesis: your Q2 target requires 30% faster cycles.

We've done this for 3 similar companies. 15 minutes to pressure-test?
```

---

## Quick Examples

### Cold Email
```
You: Write a cold email to James Wilson, CTO at DataFlow.
     They just hired 5 engineers. We do API monitoring.

Subject: API monitoring

James - 5 new engineers shipping code means more API surface area to monitor.

Quick question: how are you handling observability as you scale?

We helped Stripe catch 40% more issues before production.

Worth 15 min?
```

### Objection Handling
```
You: They said "we don't have budget"

Response:
"Understood. Is it that there's no budget for this category, or that it's allocated elsewhere?

[If no category budget]: What would need to be true to create budget for this?

[If allocated]: When's your next planning cycle? I'll follow up then with ROI data from similar companies."
```

### Discovery Questions
```
You: MEDDPICC questions for a VP of Engineering

Metrics:
- How do you measure engineering productivity today?
- What would a 20% improvement mean for your roadmap?

Economic Buyer:
- Who signs off on tooling investments?
- What's their top priority this quarter?

Pain:
- What's slowing your team down most right now?
- What happens if that doesn't get fixed?
```

### LinkedIn
```
You: Connection request for Maria Lopez, Head of RevOps at ScaleUp

Maria - saw your post on forecasting accuracy.
We're solving the same problem at [Company].
Would love to connect.
```

### Meeting Prep
```
You: Prep me for a call with CloudFirst tomorrow

CloudFirst
- Series C, $50M
- 200 employees, hiring 30 in sales
- New CRO started 2 months ago

Questions to ask:
1. What's driving the sales hiring?
2. What does the new CRO want to change?
3. What's the timeline for decisions?

Watch for:
- CRO wants quick wins - position as fast implementation
- Likely evaluating multiple vendors
```

---

## Frameworks

All major sales methodologies built in:

- **MEDDPICC** - `gtm questions --meddpicc [persona]`
- **SPIN** - `gtm questions --spin [persona]`
- **Challenger** - `gtm questions --challenger [persona]`
- **Sandler** - `gtm questions --sandler [persona]`
- **Gap Selling** - `gtm questions --gap [persona]`

---

## Full Reference

| Command | What it does |
|---------|--------------|
| `gtm email` | Cold email |
| `gtm followup` | Follow-up email |
| `gtm breakup` | Final attempt email |
| `gtm linkedin` | Connection request |
| `gtm inmail` | LinkedIn InMail |
| `gtm questions` | Discovery questions |
| `gtm reply` | Handle objection |
| `gtm prep` | Meeting brief |
| `gtm research` | Company research |
| `gtm call` | Cold call script |
| `gtm voicemail` | Voicemail script |
| `gtm battlecard` | Competitive intel |
| `gtm sequence` | Multi-touch cadence |

### Flags

| Flag | Effect |
|------|--------|
| `--direct` | No fluff (default) |
| `--blunt` | Even shorter |
| `--challenger` | Push back, teach |
| `--exec` | C-suite brevity |
| `--friendly` | Add warmth |
| `--meddpicc` | Use MEDDPICC framework |
| `--spin` | Use SPIN framework |

---

## Links

- [gtm-skills.com](https://gtm-skills.com) - Full prompt library
- [API Docs](https://gtm-skills.com/developers) - Build your own
- [GitHub](https://github.com/Prospeda/gtm-skills) - Source code
