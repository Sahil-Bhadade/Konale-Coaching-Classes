KONALE COACHING CLASSES — WEBSITE
==================================

HOW TO OPEN IT
---------------
Just double-click index.html to open the site in your browser. All pages
link to each other, so once index.html opens, every button/link on the
site will work as long as this whole folder stays together (don't move
css/, js/ or img/ out of this folder).

FOLDER STRUCTURE
-----------------
index.html      -> Home page
results.html    -> Full results page
faculty.html    -> Full faculty page
contact.html    -> Contact / enquiry form page
course.html     -> One page that shows details for WHICHEVER course you
                    clicked on the home page (uses a link like
                    course.html?course=jee)
css/style.css   -> All the styling (colors, fonts, spacing, shadows, etc.)
js/main.js      -> Menu, scroll animations, stat counter, contact form
js/course-data.js -> The actual text shown on each course's page
js/course.js    -> Reads the link and fills course.html with the right data
img/            -> Put your images here (see "ABOUT IMAGES" below)

EASIEST THINGS TO CUSTOMIZE
-----------------------------
1. Colors and fonts:
   Open css/style.css and look at the very top — there's a ":root" block
   with all the colors and fonts named clearly (--color-accent,
   --font-heading, etc). Change a value there and it updates the whole site.

2. Course page content (fees, syllabus points, description):
   Open js/course-data.js — every course's text lives there in one place.

3. Text on the home page, results, or faculty:
   Just edit the words directly inside the matching .html file — the
   content is plain text between HTML tags, e.g. <h3>IIT-JEE</h3>.

4. Contact details (phone/email/address):
   These appear in a few places — contact.html and the footer of every
   page. Use "Find & Replace" in your text editor to update them everywhere
   at once.

ABOUT IMAGES
-------------
The original file names have been kept (img/1.png ... img/7.png for the
homepage slider, img/KCC-logo.png for the logo, img/book.png for the
course icons). Add your actual image files into the img/ folder using
those exact names and they'll appear automatically. (The original file
paths used backslashes like "img\1.png", which only work on Windows —
they've been changed to "img/1.png" style, which works correctly in a
web browser.)

ABOUT THE CONTACT FORM
------------------------
Right now, submitting the form just shows a "Thanks!" message — it does
NOT send the data anywhere yet, because a plain website like this has no
server to receive it (this also means nobody's information can leak,
since it never leaves the visitor's browser). When you're ready to
actually receive enquiries, connect a form service such as Formspree or
EmailJS (or your own server), following their setup instructions, then
update the "submit" section inside js/main.js. Avoid pasting any private
API key directly into this file if the service ever gives you one that's
meant to stay secret.

WHAT WAS CHANGED FROM YOUR ORIGINAL FILE
-------------------------------------------
- Same navy/gold color theme, same layout — just added shadows, hover
  lift effects, and smooth transitions on cards, buttons, and links.
- Fonts changed from "Bahnschrift Light" (Windows-only, so it looked
  different on other computers) to Manrope (body text) and Playfair
  Display (headings) — loaded properly from Google Fonts this time.
- Fixed a couple of small bugs from the original CSS (a mistyped
  "cube-beizer" instead of "cubic-bezier", and a "Sekuya" font that
  was never actually loaded).
- Added a mobile menu (hamburger button) — on the original, nav links
  simply disappeared on small screens with no way to reach them.
- Added scroll-reveal animation, a back-to-top button, and a subtle
  header shadow on scroll.
- Broke the site into separate pages (results.html, faculty.html,
  contact.html, course.html) and linked all the buttons that used to go
  nowhere ("#" or "").
- Rewrote all image paths from backslashes to forward slashes so they
  will actually work in a browser.
