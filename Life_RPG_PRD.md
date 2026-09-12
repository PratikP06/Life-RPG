# Life RPG --- Product Requirements Document

**Version:** 1.0\
**Product:** Life RPG\
**Platform:** Web Application\
**Stack:** JavaScript + Next.js + JSX + Tailwind CSS + Supabase\
**Status:** Development Ready

------------------------------------------------------------------------

## 1. Product Overview

Life RPG is a gamified productivity web application that turns
real-world activities into RPG-style quests. Users complete quests to
earn XP, Gold, character attributes, streaks, achievements, and
inventory rewards.

The product addresses the delayed-gratification problem of traditional
productivity tools by providing immediate feedback and visible
progression.

------------------------------------------------------------------------

## 2. Problem Statement

Traditional to-do lists, productivity tools, and habit trackers can feel
like chores because the benefits of activities such as studying,
reading, or exercising may take months to become visible.

Life RPG applies game-like feedback loops, progression, and rewards to
everyday activities.

------------------------------------------------------------------------

## 3. Product Vision

> Turn everyday self-improvement into a game worth playing.

------------------------------------------------------------------------

## 4. Target Users

-   Students and young professionals.
-   People building study, coding, fitness, reading, and
    personal-development habits.
-   Users who respond well to visible progression and game-style
    rewards.

------------------------------------------------------------------------

## 5. Product Goals

1.  Turn real-world tasks into RPG quests.
2.  Provide immediate feedback when quests are completed.
3.  Maintain persistent user progression.
4.  Provide secure authentication.
5.  Prevent users from easily manipulating XP and stats.
6.  Implement non-linear level progression.
7.  Implement streaks and character attributes.
8.  Implement an in-app reward economy.
9.  Work across desktop and mobile.
10. Deliver a polished, cohesive visual experience.

------------------------------------------------------------------------

## 6. Final Technology Stack

-   **Language:** JavaScript
-   **Framework:** Next.js
-   **UI:** React + JSX
-   **Styling:** Tailwind CSS
-   **Backend/API:** Next.js Route Handlers
-   **Database:** Supabase PostgreSQL
-   **Authentication:** Supabase Auth
-   **Supporting library:** Framer Motion for animations

------------------------------------------------------------------------

## 7. High-Level Architecture

``` text
Browser
   ↓
Next.js
   ├── React + JSX
   ├── Tailwind CSS
   └── Route Handlers
   ↓
Supabase
   ├── Authentication
   ├── PostgreSQL
   ├── Row Level Security
   └── Storage (optional)
```

------------------------------------------------------------------------

## 8. Core User Journey

1.  Landing Page
2.  Sign Up / Login
3.  Create Character
4.  Dashboard
5.  Create Quest
6.  Complete Quest
7.  Receive XP + Gold + Attribute Reward
8.  Progress toward the next level
9.  Maintain Streak
10. Spend Gold in Shop
11. Unlock Items / Badges
12. Continue Progression

------------------------------------------------------------------------

## 9. Information Architecture

``` text
Life RPG
├── Landing
├── Authentication
│   ├── Login
│   └── Sign Up
└── Application
    ├── Dashboard
    ├── Quests
    ├── Character
    ├── Shop
    ├── Inventory
    └── Achievements
```

------------------------------------------------------------------------

## 10. Authentication

Users must be able to:

-   Sign up
-   Log in
-   Log out
-   Maintain an authenticated session
-   Access their account across devices

### Acceptance Criteria

-   Unauthenticated users cannot access protected application pages.
-   Users can only access their own data.
-   Invalid credentials show a clear error.
-   Sessions survive a page refresh.
-   Logout ends the active session.

------------------------------------------------------------------------

## 11. Dashboard

The dashboard is the primary screen and should immediately communicate
the user's progression.

### Dashboard Elements

-   Current level
-   Current XP and XP required for next level
-   Gold
-   Current streak
-   Today's quests
-   Character attributes
-   Recent achievements
-   Quick actions

Example:

``` text
┌─────────────────────────────────────────┐
│ Character       Level 7                 │
│                 ████████░░ 1240/1500 XP│
├─────────────────────────────────────────┤
│ 🔥 12 Day Streak                        │
├─────────────────────────────────────────┤
│ Today's Quests                          │
│                                         │
│ ☐ Study DSA              +50 XP         │
│ ☐ Gym Workout            +40 XP         │
│ ☐ Read 20 Pages          +25 XP         │
├─────────────────────────────────────────┤
│ Attributes                              │
│                                         │
│ INT  ████████░░                         │
│ STR  ██████░░░░                         │
│ DIS  ███████░░░                         │
└─────────────────────────────────────────┘
```

------------------------------------------------------------------------

## 12. Quest System

Quests are the core interaction of Life RPG.

### Quest Fields

-   Title
-   Description
-   Category
-   Difficulty
-   Attribute

Example:

``` text
Title:
Complete 2 LeetCode problems

Category:
Coding

Difficulty:
Medium

Attribute:
Intellect
```

Quest rewards can be determined by difficulty so users cannot simply
assign themselves unlimited rewards.

------------------------------------------------------------------------

## 13. Quest CRUD

Users must be able to:

-   Create a quest
-   Read/view active and completed quests
-   Update/edit a quest
-   Delete a quest
-   Complete a quest

------------------------------------------------------------------------

## 14. Quest Categories & Attributes

  Category   Attribute
  ---------- ------------
  Coding     Intellect
  Study      Knowledge
  Fitness    Strength
  Wellness   Discipline
  Creative   Creativity
  Work       Discipline
  Reading    Knowledge
  Personal   Discipline

------------------------------------------------------------------------

## 15. XP System

XP represents overall character progression.

### Proposed Initial Rewards

  Difficulty      XP
  ------------ -----
  Easy            20
  Medium          50
  Hard           100
  Epic           200

These values can be tuned during testing.

------------------------------------------------------------------------

## 16. Leveling System

The leveling system must be non-linear, with each subsequent level
requiring more XP than the previous one.

### Proposed Formula

``` text
XP Required = 100 × Level²
```

Example:

``` text
Level 1 → 100 XP
Level 2 → 400 XP
Level 3 → 900 XP
Level 4 → 1600 XP
Level 5 → 2500 XP
```

The exact tuning can be adjusted during testing.

------------------------------------------------------------------------

## 17. Level-Up Experience

When a user reaches the next level:

``` text
       ✨ LEVEL UP ✨

          LEVEL 8

       +1 Skill Point
       +100 Gold

     New reward unlocked!
```

The event should include:

-   Animated XP bar
-   Level-up modal
-   Particle effects
-   Reward notification
-   Optional sound effects

------------------------------------------------------------------------

## 18. Character Attributes

Initial attributes:

-   Strength
-   Intellect
-   Discipline
-   Creativity
-   Knowledge

Completing a quest increases the attribute associated with that quest
category.

Example:

``` text
Complete Gym Quest
       ↓
+3 Strength
```

``` text
Complete Coding Quest
       ↓
+3 Intellect
```

------------------------------------------------------------------------

## 19. Streak System

Track consecutive days of activity.

Example:

``` text
Mon  ✅
Tue  ✅
Wed  ✅
Thu  ✅
Fri  ✅

🔥 5 DAY STREAK
```

Store:

-   `current_streak`
-   `longest_streak`
-   `last_activity_date`

Optional milestone rewards can include badges, XP bonuses, rare items,
and legendary badges.

------------------------------------------------------------------------

## 20. Economy

Users earn Gold by completing quests.

``` text
Quest completed
       ↓
+50 XP
+20 Gold
```

Gold is spent on virtual rewards in the Shop.

------------------------------------------------------------------------

## 21. Shop

The Shop can contain:

### Virtual Items

-   Iron Sword
-   Shield
-   XP Potion
-   Crown

### Themes

-   Cyberpunk
-   Medieval
-   Forest
-   Dark Mode

### Badges

-   7-Day Warrior
-   Code Master
-   Scholar
-   Quest Hunter

------------------------------------------------------------------------

## 22. Inventory

Purchased items must appear in the user's inventory and persist in
Supabase.

Example:

``` text
🎒 INVENTORY

⚔️ Iron Sword
🛡️ Shield
🧪 XP Potion
🏆 Quest Hunter Badge
```

------------------------------------------------------------------------

## 23. Achievements

Potential achievements:

-   First Quest
-   7-Day Streak
-   50 Coding Quests
-   Reach Level 10
-   Complete 100 Quests

Achievements are a high-value enhancement and should come after the
mandatory core systems.

------------------------------------------------------------------------

## 24. Security Requirements

The frontend must not be trusted to determine final rewards. Quest
completion should be validated server-side.

``` text
Frontend
   ↓
"Complete quest #123"
   ↓
Server
   ↓
Authenticate user
   ↓
Verify quest ownership
   ↓
Verify quest status
   ↓
Calculate rewards
   ↓
Update Supabase
   ↓
Return result
```

Requirements:

1.  Authenticate the user.
2.  Verify the quest belongs to that user.
3.  Verify the quest is not already completed.
4.  Calculate XP, Gold, and attribute rewards on the server.
5.  Update Supabase.
6.  Return resulting progression to the client.
7.  Use Supabase Row Level Security so users can access only their own
    records.
8.  Never expose sensitive server credentials to the client.

------------------------------------------------------------------------

## 25. Database Requirements

Core tables:

``` text
profiles
quests
quest_history
attributes
inventory
items
streaks
achievements
user_achievements
```

### Relationships

``` text
User
 ├── Profile
 ├── Attributes
 ├── Quests
 │    └── Quest History
 ├── Streak
 ├── Inventory
 │    └── Items
 └── Achievements
```

------------------------------------------------------------------------

## 26. Proposed Data Models

### `profiles`

``` text
id
username
display_name
avatar
level
xp
gold
created_at
updated_at
```

### `quests`

``` text
id
user_id
title
description
category
difficulty
attribute
xp_reward
gold_reward
is_completed
created_at
completed_at
```

### `attributes`

``` text
id
user_id
strength
intellect
discipline
creativity
knowledge
```

### `quest_history`

``` text
id
user_id
quest_id
xp_earned
gold_earned
attribute
attribute_xp
completed_at
```

------------------------------------------------------------------------

## 27. UX & Visual Direction

Recommended direction: **dark futuristic RPG / cyberpunk theme**.

The interface should feel alive, tactile, responsive, and cohesive
rather than like a generic SaaS dashboard.

### Visual Style

-   Dark background
-   Glass/metal panels
-   Neon accents
-   Large XP progress bar
-   Character visualization
-   Animated cards
-   Glowing progress indicators
-   Particle effects

### Suggested Terminology

  Generic        Life RPG
  -------------- ----------------
  Tasks          Quests
  Points         XP
  Money          Gold / Credits
  Statistics     Attributes
  Store          Shop
  Items          Loot
  Profile        Character
  Achievements   Titles

------------------------------------------------------------------------

## 28. Responsive & Accessible UI

The application must support:

-   Mobile
-   Tablet
-   Laptop
-   Desktop
-   Keyboard navigation with Tab, Enter, and Space
-   Semantic HTML
-   Accessible labels
-   Screen-reader-friendly structure
-   Visible focus states
-   Sufficient visual contrast

------------------------------------------------------------------------

## 29. Performance

Implement:

-   Loading skeletons
-   Optimistic UI where appropriate
-   Lazy loading where useful
-   Optimized assets
-   Smooth transitions
-   Efficient Supabase queries
-   Graceful network error handling

------------------------------------------------------------------------

## 30. Error Handling

The application must gracefully handle:

-   Empty quest → show validation error.
-   Network failure → show save/retry feedback.
-   Unauthorized request → reject the operation.
-   Already completed quest → prevent duplicate rewards.
-   Insufficient Gold → prevent purchase and explain why.

------------------------------------------------------------------------

## 31. MVP Scope

### P0 --- Absolutely Required

-   Authentication
-   User profiles
-   Quest CRUD
-   Quest completion
-   XP
-   Non-linear leveling
-   Character attributes
-   Gold
-   Streaks
-   Database persistence
-   Secure user-specific data
-   Responsive UI
-   Production deployment

### P1 --- Important Polish

-   Shop
-   Inventory
-   Achievements
-   Level-up animation
-   Quest completion animation
-   Optimistic updates
-   Loading skeletons
-   Error and empty states

### P2 --- Future Enhancements

-   Character customization
-   Equipment system
-   Daily challenges
-   Boss battles
-   Skill trees
-   Leaderboards
-   Social features
-   AI-generated quests
-   Seasonal events

------------------------------------------------------------------------

## 32. Success Criteria

A new user must be able to:

1.  Sign up.
2.  Log in.
3.  Create a quest.
4.  View the quest.
5.  Complete the quest.
6.  Receive XP and Gold.
7.  Increase an attribute.
8.  Progress toward a level.
9.  Maintain a streak.
10. Refresh the page and see all progress preserved.

------------------------------------------------------------------------

## 33. Deployment Requirements

### Repository

-   Public GitHub repository
-   Complete application source code
-   README.md with setup instructions
-   `.env.example`
-   At least 3 chronological commits

### Deployment

Recommended:

``` text
GitHub
   ↓
Vercel
   ↓
Next.js
   ↓
Supabase
```

The production application must successfully connect to the Supabase
database.

------------------------------------------------------------------------

## 34. Demo Video Requirements

The final walkthrough must be:

-   90--180 seconds
-   Under 100 MB
-   Publicly accessible

It must demonstrate:

``` text
Signup/Login
     ↓
Add Task
     ↓
Complete Task
     ↓
XP / Level progression
     ↓
Refresh page
     ↓
Persistent database data
```

------------------------------------------------------------------------

## 35. Definition of Done

### Functionality

-   [ ] Signup, login, and logout work.
-   [ ] Quest CRUD works.
-   [ ] Quest completion works.
-   [ ] XP and non-linear leveling work.
-   [ ] Attributes, Gold, streaks, Shop, Inventory, and Achievements
    work.
-   [ ] Database persistence works.

### Security

-   [ ] Supabase Auth configured.
-   [ ] RLS enabled.
-   [ ] Users cannot access another user's data.
-   [ ] Rewards validated server-side.
-   [ ] Sensitive keys are not exposed to the client.

### UX

-   [ ] Mobile responsive.
-   [ ] Keyboard accessible.
-   [ ] Loading, error, and empty states implemented.
-   [ ] Animations implemented.
-   [ ] Cohesive theme implemented.

### Submission

-   [ ] Public GitHub repository.
-   [ ] 3+ chronological commits.
-   [ ] README and `.env.example`.
-   [ ] Live deployment.
-   [ ] 90--180 second demo video under 100 MB.
-   [ ] No runtime crashes.

------------------------------------------------------------------------

## 36. Recommended Build Order

1.  Create Next.js project.
2.  Set up Tailwind and visual theme.
3.  Create Supabase project.
4.  Design database schema and RLS policies.
5.  Implement authentication.
6.  Build dashboard.
7.  Build Quest CRUD.
8.  Implement quest completion.
9.  Implement XP and leveling engine.
10. Implement character attributes.
11. Implement streak system.
12. Implement Gold and Shop.
13. Implement Inventory.
14. Implement Achievements.
15. Add animations and polish.
16. Test mobile, accessibility, and edge cases.
17. Deploy.
18. Record demo video.

------------------------------------------------------------------------

## 37. Core Product Loop

``` text
CREATE QUEST
      ↓
COMPLETE QUEST
      ↓
SERVER VALIDATES
      ↓
+XP / +GOLD / +ATTRIBUTE
      ↓
LEVEL CHECK
      ↓
STREAK
      ↓
REWARDS
      ↓
PLAY AGAIN
```

------------------------------------------------------------------------

## 38. Reference to Original Brief

This PRD is based on the provided Life RPG problem statement. The
original brief requires a robust full-stack application, secure
authentication, persistent database storage, non-linear progression,
streaks, attributes, a reward economy, responsive/accessibility support,
a public repository, live deployment, and a 90--180 second walkthrough
video.
