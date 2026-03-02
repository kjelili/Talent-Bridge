# TalentBridge — Freelancing Platform

A production-quality freelancing platform connecting top freelancers with clients. Built as a modern React single-page application with job posting, bidding, team assembly, and project management.

---

## Quick Start

### Option 1: Open in Browser (Standalone)
Open `talentbridge.html` directly in any modern browser — no server or build step required.

### Option 2: React Artifact
Import `talentbridge-app.jsx` into any React 18+ environment. It exports a single default component with zero external dependencies (beyond React itself).

```jsx
import TalentBridgeApp from './talentbridge-app';
// Render <TalentBridgeApp /> in your app
```

---

## Demo Accounts

| Role       | Email                  | Password    |
|------------|------------------------|-------------|
| Freelancer | sarah@example.com      | Password123 |
| Freelancer | john@example.com       | Password123 |
| Client     | alex@techcorp.com      | Password123 |
| Client     | maria@startup.io       | Password123 |

---

## Features

### Authentication & Registration
- Role-based registration (Freelancer / Client)
- Two-step onboarding for freelancers: account creation → profile setup with skill selection
- Email/password login with validation
- Session management and logout

### Freelancer Profiles
- Professional profile with title, bio, location, hourly rate
- Skill tags from 30+ predefined options with autocomplete
- Star ratings and review counts
- Availability status badges (Available / Busy)
- Avatar generated from initials

### Job Marketplace
- Clients post jobs with full details (description, budget, skills, deadline)
- Category filtering and keyword search
- Fixed or hourly pricing models
- Team size specification (solo or 2–5 people)
- Location type: Remote / On-site / Hybrid

### Bidding System
- Freelancers browse and bid on open jobs
- Bids include: proposed amount, delivery timeline, cover letter
- Duplicate bid prevention
- Clients review all bids with freelancer ratings and profiles

### Project Management
- Create projects with description, budget, and category
- Team assembly: select up to 4 freelancers per project
- Visual team picker with profile cards
- Project status tracking (Active / Completed)

### Dashboard
- **Freelancer dashboard**: profile summary, active bids, projects, skills, earnings (released escrow), bid success rate, profile views
- **Client dashboard**: posted jobs, incoming bids, active projects, total spending
- Bid history with status indicators
- Quick navigation to jobs and profile

### Messaging / Chat
- Built-in Messages page: list conversations, open thread, send/receive messages
- Start a conversation from a freelancer profile (Message) or from a bid row (Message)
- Conversations persist in session

### Notifications
- Bell icon in navbar with unread count
- Notifications for: new bid received, you were hired, bid rejected
- Mark as read / Mark all read
- **Notification preferences** (user menu): toggles for New bids, Hired/project updates, Messages (email-style prefs)

### Bid acceptance workflow
- Clients see Accept / Reject on each pending bid
- Accept: job closes, project is created with that freelancer, freelancer is notified
- Reject: bid marked rejected, freelancer notified

### Profile view pages
- Click any freelancer card on Find Talent → full profile page
- Full profile: about, skills, **portfolio/work samples**, **reviews & testimonials**, **badges** (identity verified, top rated, verified skills)
- Leave a review (clients who have worked with the freelancer)
- Message button

### Search & filtering
- **Jobs**: category, skill filter, budget min/max, sort (newest, budget high/low, deadline)
- **Freelancers**: skill filter, rate min/max, sort (top rated, rate low/high)

### Portfolio, reviews, escrow, contracts, badges
- **Portfolio**: freelancers can have work samples (title, description, link); shown on profile
- **Reviews**: leave and view reviews; average rating and count update
- **Escrow**: client can "Release payment (Escrow)" on a project; simulated flow
- **Contract flow**: accept bid → project created (contract in effect)
- **Badges**: identity verified, top rated, verified skills on profile and cards

### Saved / favorited jobs and freelancers
- Heart icon on job cards and freelancer cards to save/unsave
- **Saved** page (nav): list saved jobs and saved freelancers; remove or view

### Dark mode
- Toggle in navbar (sun/moon icon)
- Preference persisted in localStorage

### Onboarding tour
- First time visiting Dashboard (freelancer or client): welcome overlay with quick actions (Browse Jobs / Post Job, Find Talent, Got it)
- Dismissal persisted so it does not show again

### Analytics (freelancer dashboard)
- Earnings (from released escrow share)
- Bid success rate
- Profile views (simulated)

### Mobile-optimized navigation
- Hamburger menu on small screens (≤768px) opens drawer with nav links
- Desktop: full nav bar

---

## Architecture

### Tech Stack
- **React 18** — Hooks-based functional components
- **CSS-in-JS** — CSS custom properties (design tokens) injected via `<style>`
- **In-memory state** — Simulated database with seeded data
- **Zero dependencies** — Only requires React; no external packages

### Design System

| Token | Value |
|-------|-------|
| Primary Font | DM Sans (300–700 weight) |
| Mono Font | Space Mono (prices, stats) |
| Brand Blue | #338bff (50–950 scale) |
| Accent Orange | #ff6b35 |
| Success | #10b981 |
| Error | #ef4444 |
| Border Radius | 6px (sm) → 9999px (full) |
| Shadow Scale | xs → xl (rgba(16,24,40)) |

### File Structure

```
talentbridge.html          ← Standalone browser-ready version
talentbridge-app.jsx       ← React component (artifact format)
BUILD_DOCUMENTATION.md     ← Full technical documentation
README.md                  ← This file
```

### Production Decomposition

For a production codebase, this would split into:
```
src/
├── components/      Navbar, Footer, Toast, common UI
├── pages/           Landing, Login, Register, Dashboard, etc.
├── store/           State management (Redux/Zustand)
├── hooks/           Custom React hooks
├── utils/           Helpers, formatters
├── api/             REST/GraphQL client
└── styles/          Design tokens, global CSS
```

---

## Pages

| Page | Route | Access |
|------|-------|--------|
| Landing | `landing` | Public |
| Login | `login` | Public |
| Register | `register` | Public |
| Dashboard | `dashboard` | Freelancer |
| Client Dashboard | `client-dashboard` | Client |
| Browse Freelancers | `freelancers` | All logged-in |
| Freelancer Profile | `profile` | All logged-in (via view) |
| Jobs | `jobs` | All logged-in |
| Saved | `saved` | All logged-in |
| Messages | `messages` | All logged-in |
| Post Job | `post-job` | Client |
| Projects | `projects` | All logged-in |
| About | `about` | Public |

---

## Security Notes

This is a client-side demo with in-memory state. For production deployment:

- JWT authentication with refresh tokens and secure httpOnly cookies
- Server-side password hashing (bcrypt/argon2)
- API rate limiting and request validation
- Input sanitization on both client and server
- HTTPS enforcement with HSTS headers
- Content Security Policy (CSP) headers
- CORS configuration
- Account lockout after failed login attempts
- CSRF protection on state-changing operations

---

## Accessibility

- Semantic HTML (`nav`, `main`, `footer`, `button`, `label`)
- WCAG AA color contrast ratios
- Touch-friendly targets (minimum 44px)
- Form labels and validation messages
- Focus management on page navigation
- Screen-reader-friendly status badges

---

## Browser Support

Tested and working in all modern browsers:
- Chrome 90+
- Firefox 90+
- Safari 15+
- Edge 90+

---

**Version:** 2.0.0  
**Last Updated:** March 2026
