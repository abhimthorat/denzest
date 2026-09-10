# DenZest - GitHub Pages website mockup v2

This version translates the approved multi-page visual direction into a real lightweight static website.

## Pages
- Home
- Services
- Zirconia Crowns
- How It Works
- Partner With Us (Dental Clinics)
- Lab Partners
- About DenZest
- Contact
- Resources / Blog
- Pune local SEO pages: Dental Lab Pune, Zirconia Dental Lab Pune, Pickup & Delivery Pune
- Privacy starter page

## Design direction
- Teal / deep navy / white palette
- Rounded cards and soft shadows
- Large editorial hero sections
- Strong clinic-focused CTAs
- Responsive mobile layout
- Shared navigation and footer
- Tooth-inspired visual treatment without requiring a heavy image library

## Google Forms
The clinic, lab-partner and contact forms are visual/static forms for layout approval. They do NOT collect or transmit data yet.

After the final form structure is agreed, the recommended setup is:
1. Create the form in a DenZest Google Workspace account.
2. Add the Google Form URL to `assets/config.js`.
3. Either redirect the CTA to the form or replace the visual form with an embedded Google Form iframe.
4. Send responses to separate Google Sheets for clinic leads, lab partners and general enquiries.

## Before publishing
Update in `assets/config.js`:
- domain
- email
- phone / WhatsApp
- clinicFormUrl
- labFormUrl
- contactFormUrl
- GA4 Measurement ID
- Microsoft Clarity Project ID

Also update canonical URLs, CNAME, logo, favicon and privacy terms to match the final domain/business details.

## GitHub Pages
Upload the contents of this folder to the repository root and enable GitHub Pages from the repository's Pages settings. Connect the final custom domain after DNS is configured.


## Google Forms integration

The Partner Clinic, Lab Partner, and Contact pages now embed the live Google Forms supplied for the temporary DenZest setup. The website itself remains static and hosted on GitHub Pages; submissions continue to be handled by Google Forms/Sheets.

Before launch, review the form sharing settings and move ownership to a DenZest Google Workspace account when available.

## Approved visual assets

The website uses the approved DenZest sample website visuals supplied during design review. Both PNG and SVG versions are included in `assets/`. The SVG files preserve the supplied artwork inside an SVG container so the same visual can be scaled consistently.

Primary domain: `www.denzest.com`


## Approved brand assets
The logo/favicon are based on the primary DenZest logo supplied by the owner (Crafting Dentistry). The pickup asset has been cropped to remove the black strip visible in the previous version. Form page outer headings were removed so the Google Forms provide their own titles.


## Final v8 visual corrections
- Replaced the website header/footer logo with the supplied original Primary Option logo: DenZest + Crafting Dentistry.
- Removed duplicate outer form headings from Partner Clinic, Laboratory Partner, and Contact pages because the embedded Google Forms already provide their own titles.
- Added favicon based on the supplied tooth mark.
- Corrected the Pickup & Delivery asset by removing the black crop strip.
- Kept www.denzest.com as the canonical/custom domain.
