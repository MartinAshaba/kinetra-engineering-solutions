# Kinetra Engineering Solutions — corrected website files

## Files
- `index.html` — company website and the single quotation form
- `styles.css` — responsive styling
- `script.js` — mobile navigation and current year only; it does not intercept form submissions
- `logo.svg` — Kinetra logo
- `thank-you.html` — confirmation page after a successful FormSubmit submission

## Publish the correction to Cloudflare Pages
1. Download and extract this ZIP.
2. Open the GitHub repository: https://github.com/MartinAshaba/kinetra-engineering-solutions
3. Upload the files inside this ZIP to the repository root (the same level as the existing `index.html`), replacing files with the same names.
4. Commit the changes.
5. Wait for Cloudflare Pages to redeploy, then test: https://kinetra-engineering-solutions.pages.dev/

## Quotation form
The site contains one form with:
- FormSubmit destination: `kinetraengineeringsolutions@gmail.com`
- Named fields for name, phone, email, service, project location, preferred timeline and project description
- Table-format email template and a thank-you redirect
- No JavaScript `preventDefault()` handler, so the form can submit to FormSubmit normally

## Required test
After deployment, fill in every required field with sample details and submit the form. Confirm the notification email includes the details. If FormSubmit asks for first-time activation, click the activation link in the business inbox and submit another test. Check Spam/Junk if needed. Do not rely on the form until the test details arrive correctly.

FormSubmit is a third-party service. Review its current privacy and usage terms before collecting customer information. Do not collect sensitive information such as passwords or payment card details.
