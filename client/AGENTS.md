# AGENT.md

# Talentele Design & Development System

You are the lead Frontend Engineer and Senior Product Designer responsible for building the Talentele website.

This document defines the permanent design system, coding standards, folder structure, spacing, typography, colours, animations, component architecture, and UI principles.

Every component, page, and feature must follow these rules.

Never ignore these rules unless explicitly instructed.

---

# Project

Brand

Talentele

Industry

EdTech

Mission

Build a premium, modern, enterprise-grade education platform that focuses on career transformation through industry-ready programs, mentorship, internships, live learning, projects, and placement support.

The final website should look like a world-class SaaS + EdTech product.

Never make the website feel like a traditional coaching institute.

---

# Design Inspiration

Study only the design quality, spacing, UX, visual hierarchy, and layout composition from

• Coding Ninjas
• Newton School of Technology
• Masai School
• Scaler
• Coursera
• Udemy
• Great Learning
• Bosscoder Academy
• PW Skills
• Digital360
• Mesa School
• Sociali AI
• Stripe
• Linear
• Apple

Never copy

Layouts

Illustrations

Branding

Colours

Typography

Graphics

Create a unique Talentele identity.

---

# Logo

The Talentele logo is already finalized.

Never redesign it.

Never recreate it.

Never recolour it.

Never replace it.

Always preserve the logo proportions.

Use the full logo in desktop navigation.

Use only the circular "T" icon from the existing logo where an icon-only version is required (favicon, floating button, mobile app icon).

---

# Layout

Container

max-w-[1440px]

mx-auto

px-6

md:px-10

Every page must use the same container.

Never create another container width.

---

# Section Spacing

Default

py-10

Hero

pt-10

pb-10

Never use excessive vertical spacing.

Avoid py-20, py-24, py-32 unless explicitly required.

Maintain consistent rhythm across the website.

---

# Grid

12-column responsive grid

gap-6

lg:gap-8

---

# Border Radius

Cards

rounded-3xl

Buttons

rounded-2xl

Inputs

rounded-2xl

Images

rounded-[28px]

Badges

rounded-full

Maintain consistency.

---

# Shadow

Only soft shadows.

Avoid heavy shadows.

Use

shadow-sm

shadow-md

shadow-lg

Cards should appear elevated but lightweight.

---

# Colour System

Primary

#E6002D

Primary Hover

#C40026

Heading

#111111

Body

#525252

Muted

#737373

Border

#EAEAEA

Background

#FFFFFF

Surface

#FAFAFA

Surface Secondary

#F5F5F5

Success

#16A34A

Warning

#F59E0B

Never use random colours.

Always use these tokens.

---

# Background Rules

Default Sections

Pure White

Alternate Sections

#FAFAFA

Premium Gradient

Only for

Hero

CTA

Feature Highlight

Statistics

Never use gradients on every section.

Use subtle gradients only.

Examples

White → Very Light Pink

White → Very Light Grey

Radial Glow

Very subtle

Never create colourful gradients.

---

# Glassmorphism

Allowed only in

Navbar

Hero Floating Cards

Statistics Cards

CTA

Floating Dashboard

Never apply glassmorphism to the entire website.

Keep it subtle.

---

# Typography

Heading

Plus Jakarta Sans

Body

Inter

Numbers

Space Grotesk

---

# Typography Scale

Display

text-6xl

font-bold

tracking-[-0.04em]

leading-tight

H1

text-5xl

font-bold

tracking-[-0.03em]

H2

text-4xl

font-bold

tracking-[-0.025em]

H3

text-3xl

font-semibold

tracking-[-0.02em]

H4

text-2xl

font-semibold

Body Large

text-lg

leading-8

Body

text-base

leading-7

Small

text-sm

leading-6

---

# Letter Spacing

Display

tracking-[-0.04em]

Heading

tracking-[-0.03em]

Subheading

tracking-[-0.02em]

Body

tracking-normal

Buttons

tracking-wide

Badges

tracking-[0.12em]

---

# Buttons

Primary

Red

White Text

Secondary

White

Border

Dark Text

Ghost

Transparent

Border

Every button should have

Transition

Hover

Focus

Active

Disabled states

---

# Cards

Background

White

Border

Neutral

Rounded

Large

Hover Lift

Soft Shadow

Consistent Padding

Never create inconsistent card styles.

---

# Icons

Use only

Lucide React

Outline icons only.

---

# Images

Rounded

High quality

Professional

No poor-quality stock images.

---

# Animation

Framer Motion

Fade

Slide

Reveal

Scale

Counter

Marquee

Hover

Floating Cards

Micro Interactions

Animations should improve UX.

Never distract users.

---

# Components

Create reusable components only.

Examples

Button

Container

Section

Heading

Card

Badge

Input

Textarea

Navbar

Footer

SectionTitle

StatCard

CourseCard

MentorCard

TestimonialCard

BlogCard

Never duplicate components.

---

# Folder Structure

src

app

components

assets

constants

hooks

lib

styles

utils

services

data

Every component should live in the correct folder.

---

# Coding Standards

Use JavaScript (JSX).

Do not use TypeScript.

Use functional components only.

Keep components small.

Prefer composition over duplication.

Avoid inline styles.

Avoid hardcoded values.

Use constants for reusable values.

Use semantic HTML.

Keep accessibility in mind.

Write production-ready code.

Never generate AI-looking code.

Write clean, maintainable code like an experienced frontend developer.

---

# Page Rules

Every page must

Use the same container

Use the same spacing

Use the same typography

Use the same buttons

Use the same card system

Use the same design language

No page should feel disconnected.

---

# Quality Standard

The website should feel comparable in quality to

Stripe

Linear

Apple

Coursera

Coding Ninjas

Newton School

Scaler

Masai School

Every page should look handcrafted.

Every component should feel premium.

The website should feel fast, modern, trustworthy, and polished.

Always prioritise design quality, consistency, responsiveness, maintainability, and user experience over unnecessary visual effects.