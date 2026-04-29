# Kehl's Family Boating — Design Instructions

## Project Overview

Multi-page website for **Kehl's Family Boating Center** built with vanilla HTML, Bootstrap 4.6, jQuery, and Owl Carousel. All pages share the same header, footer, CSS, and JS files.

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Bootstrap | 4.6.2 | Grid & utilities |
| jQuery | 3.7.1 | DOM & event handling |
| Owl Carousel | 2.3.4 | Sliders & carousels |
| Fancybox | 3.5.7 | Lightbox (video/images) |
| Font Awesome | 6.5.0 | Icons |

---

## File Structure

```
Kahl's Family/
├── kehl-home.html          # Home page
├── service.html            # Service page
├── assets/
│   ├── css/
│   │   └── style.css       # All CSS (shared across pages)
│   ├── js/
│   │   └── script.js       # All JS/jQuery (shared across pages)
│   ├── fonts/
│   │   ├── tw-cen-mt/      # Tw Cen MT font
│   │   ├── century-schoolbook/ # Century Schoolbook font
│   │   └── acumin-pro/     # Acumin Pro font
│   ├── images/
│   │   ├── home/           # Assets for the home page
│   │   └── service/        # Assets for the service page
│   └── videos/             # Video files
```

---

## Design Tokens (Figma)

### Colors

| Name | Hex |
|---|---|
| Navy (primary) | `#272262` |
| Aqua (accent) | `#00ADEF` |
| Black | `#111111` |
| White | `#FFFFFF` |
| Light Gray | `#D9D9D9` |
| Light Gray E6 | `#E6E6E6` |
| Lightest Gray | `#FAFAFA` |

### Typography

| Token | Family | Weight | Size | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| H1 | Century Schoolbook | Bold 700 | 64px | 72px | 6.4px |
| H2 | Century Schoolbook | Bold 700 | 40px | 40px | 2px |
| H3 | Century Schoolbook | Bold 700 | 24px | 28px | 0 |
| H5 | Tw Cen MT | Regular 400 | 24px | — | 0 |
| H6 / Button | Tw Cen MT | Bold 700 | 16px | — | 1.6px |
| Paragraph | Tw Cen MT | Regular 400 | 16px | 24px | 0 |
| Specs / Cards | Acumin Pro | Regular / Bold / Light | 16–18px | 24–25px | 0 |

### CSS Classes (shared utilities)

```css
.kehlH1           /* H1 typography */
.kehlH2           /* H2 typography */
.kehlH3           /* H3 typography */
.kehlPara         /* Body paragraph */
.kehlNavyText     /* color: #272262 */
.kehlBlackText    /* color: #111 */
.kehlAquaText     /* color: #00ADEF */
.kehlAquaBtn      /* Aqua fill button */
.kehlNavyBtn      /* Navy fill button */
.kehlWhiteFilledBtn /* White fill button */
```

---

## Page Creation Rules

### 1. Always use the same header & footer

Every page must include:

- **Desktop header** (`.kehlDesktopHeader`) — Fixed, solid navy `#272262`, 80px tall
  - Left: Kehl's logo → `./assets/images/home/header-logo.png`
  - Center: Nav links (Inventory / Service / Storage / Resources) — Tw Cen MT Bold, 16px, white, uppercase, letter-spacing 1.6px
  - Right: "Call or Text" label (aqua) + `(631) 226-4747` (white, 22px)

- **Desktop side menu** (`.kehlSideMenu`) — Slides in from left on hamburger click (if added)

- **Mobile header** (`.kehlMobileHeader`) — Fixed, navy, shows only on `< 992px`
  - Left: hamburger (`.kehlMobileHamburger`)
  - Center: logo
  - Right: phone icon

- **Mobile side menu** (`.kehlMobileSideMenu`) — Slides in from left

- **Footer** — 2-column split:
  - Left 1/3: Navy `#272262` background — "Enter Our World" newsletter section with email input + social icons
  - Right 2/3: `#FAFAFA` background — Boats links column + Company links column + Kehl's logo/address/phone
  - Bottom bar: copyright text, right-aligned, `rgba(17,17,17,0.6)` opacity

### 2. Carousel / Slider sections → Owl Carousel

- Write **all** Owl Carousel initialization code inside `script.js`
- Check if element exists before initializing: `if ($('.carouselClass').length) { ... }`
- Mobile carousels: `items: 1.1`, `margin: 24`, no dots, no nav
- Promotion/hero carousels: `loop: true`, `dots: true`, custom prev/next buttons outside the carousel

### 3. Video sections → YouTube via Fancybox

- Wrap video thumbnail in `<a href="https://www.youtube.com/watch?v=VIDEO_ID" data-fancybox="videos">`
- Fancybox auto-detects YouTube links and opens them in an iframe lightbox
- Use the play button overlay SVG: `./assets/images/home/Mask group.svg`
- Replace `PLACEHOLDER_1`, `PLACEHOLDER_2`, `PLACEHOLDER_3` with actual YouTube video IDs

### 4. CSS → append to `style.css`

- All CSS lives in a single `style.css`
- Basic reset, `@font-face` declarations, and shared utility classes are already defined at the top — **do not duplicate them**
- Add page-specific CSS at the bottom, clearly commented:

```css
/* ============================================================
   PAGE NAME — CSS
   ============================================================ */
```

### 5. JS → append to `script.js`

- All JavaScript lives in a single `script.js`
- Wrap all code inside `$(document).ready(function () { ... });`
- Add page-specific code clearly commented

### 6. Assets

- All image assets are in `./assets/images/<page-name>/` folder
- Videos are in `./assets/videos/`
- Use **exact filenames** as they appear in the folder (e.g., `Rectangle 7.png`, `Mask group.svg`)
- Fonts are pre-loaded via `@font-face` — do not add new font imports

---

## Page Layouts

### Home Page (`kehl-home.html`) — Figma node `4002:961`

| Section | Description |
|---|---|
| Hero | Full-screen video (`home-header-video.mp4`), 40% dark overlay, H1 + aqua button |
| New / Pre-Owned | 50/50 image split with gradient overlay + white-fill buttons |
| New Arrivals | 4-column card grid (desktop) / Owl Carousel (mobile). Cards: image + border info (title, price, specs row) |
| Services | 4-column image grid with gradient overlay: Boat Sales / Service / Storage / Sell Trade |
| Features Row | 3 blocks: Financing / News & Articles / Events & Promos — navy icon boxes + vertical dividers |
| Promotion | Full-width Owl Carousel with custom prev/next arrows + dot indicators |
| Videos | 3 YouTube video cards with play button overlay + Fancybox lightbox |
| About | 50/50: large image left + text right |
| Footer | Standard footer (see above) |

### Service Page (`service.html`) — Figma node `1:635`

| Section | Description |
|---|---|
| Hero Banner | 600px, `Rectangle 2.png`, 60% dark overlay, H1 + aqua "Request Service" button |
| Intro | Text left + image right (`Rectangle 340.png`), navy H2 + paragraph + navy button |
| Why Choose | Left 50% image (`Rectangle 343.png`) + Right 50% navy bg — 2-column checklist with `Group.png` icons |
| Winter Services | Image left (`Rectangle 345.png`) + bullet list right + navy "Request Service Quote" button |
| Spring Services | Bullet list left + image right (`Rectangle 344.png`) + navy button |
| Warranty | Image left (`Rectangle 346.png`) + text right + navy button |
| Winter Storage | Navy bg left 50% (text + white-outline button) + image right (`Rectangle 347.png`) |
| Request Form | Centered, max-width 520px — 5 inputs + 1 textarea + navy Submit button |
| Footer | Standard footer |

---

## Responsive Breakpoints

| Breakpoint | Behaviour |
|---|---|
| `≥ 992px` | Desktop layout — all sections side-by-side, desktop header visible |
| `< 992px` | Tablet/mobile — desktop header hidden, mobile header shown, stacked columns |
| `< 576px` | Small mobile — reduced font sizes, shorter hero heights |

---

## Figma Links

| Page | Figma Node | URL |
|---|---|---|
| Home | `4002:961` | https://www.figma.com/design/8hqsIauJIv7byigCc1W2Nw/Kehl-s-Family-Boating?node-id=4002-961 |
| Service | `1:635` | https://www.figma.com/design/8hqsIauJIv7byigCc1W2Nw/Kehl-s-Family-Boating?node-id=1-635 |

---

## Contact Info (used across all pages)

- **Address:** 541 W Montauk Hwy, Lindenhurst, NY 11757
- **Phone:** (631) 226-4747
- **Email form:** Newsletter in footer
