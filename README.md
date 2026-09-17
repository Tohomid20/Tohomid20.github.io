# Polished Personal Website

This is a static personal profile/link website designed around the supplied reference video.

## Features

- Dark cinematic UI with purple glow
- Animated aurora background
- Glowing circular profile area
- Floating glass cards
- Typing text effect
- Scroll reveal animations
- Responsive hamburger menu
- Dark/light mode with localStorage
- Inline SVG social icons
- Custom SVG favicon
- About / personal facts
- Social links
- Projects section
- Contact mail button
- Mobile-first responsive layout
- No backend, database, VPS or paid storage required

## Files

index.html
style.css
script.js
assets/favicon.svg
assets/profile.jpg  <-- add your own photo here

## Customize

Open `script.js` and edit the `SITE` object.

Change:
- name
- initials
- role
- email
- bio
- about
- contactText
- typingWords
- facts
- socials
- links
- projects

For the profile photo, put your image at:
assets/profile.jpg

## Run in Termux

Install packages:

pkg update
pkg install python

Go into the website folder and run:

python -m http.server 8080

Open:

http://127.0.0.1:8080

Stop with Ctrl+C.

## Free publishing

Because this site is static, it can be published with a static hosting provider such as GitHub Pages, Cloudflare Pages or Netlify.

No database is required.

## Safety

Only publish information you are comfortable making public. Do not place passwords, API keys, NID numbers, bank information or other private secrets in this website.
