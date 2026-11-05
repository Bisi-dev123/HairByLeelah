# Hair By Leelah ✂️✨

> **Luxury Hair Braiding Portfolio & Online Appointment Booking System**  
> Built with pure HTML5, CSS3, and Vanilla JavaScript. Zero backend, zero server, zero database, zero logins — 100% persistent in the browser with `localStorage`.

![Hair By Leelah Banner](https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1200&q=80)

---

## 🌟 Highlights & Features

### 📅 7-Step Online Booking System with Deposit Payments
1. **Client Information**: Collects full name, email, phone number, contact preference (SMS, WhatsApp, Email, Phone), and client type (First-time vs. Returning).
2. **Hair Service & Dynamic Customization**:
   - Knotless Braids, Box Braids, Stitch & Fulani Cornrows, Lace Wig Installations, Hair Revamp, and Passion Twists.
   - Dynamic pricing factors: Hair length (Mid-back to Knee length), Braid thickness / size (Jumbo to Micro), and styling add-ons (Bohemian curls, Wash & blowdry, Hair extensions supplied by stylist, Beads/Jewelry).
   - Real-time calculation of **Total Service Price**, **30% Deposit**, and **Remaining Balance Due**.
3. **Hair Preferences & Inspiration**:
   - Hair colour selection (#1B, #1, #2, #4, #27, #30, #613, #99J, Ombre).
   - Bringing own hair vs. stylist-provided hair.
   - **Inspiration photo upload** (saved locally in browser storage as base64 with instant preview).
   - Scalp sensitivity and allergy notes.
4. **Smart Calendar & Time Slots**:
   - Month-by-month interactive calendar.
   - Blocks already-booked appointments and prevents double bookings.
   - Enforces stylist working days and blocked holidays.
   - Automatically factors in a **30-minute studio sanitation & buffer period** between clients.
5. **Salon Policies & Agreement**:
   - Transparent deposit, 48-hour cancellation notice, 1-time rescheduling transfer, late arrival grace period, no-show terms, and stylist cancellation refund guarantee.
   - Mandatory agreement checkbox before payment.
6. **Deposit Payment**:
   - Clear financial breakdown (Total, Deposit, Balance Due on Arrival).
   - Simulated 256-bit SSL encrypted card checkout with auto-formatted inputs and Apple Pay / Google Pay express buttons.
   - Instant verification animation.
7. **Confirmation & Digital Receipt**:
   - Generates unique reference code (e.g. `HBL-2026-XXXX`).
   - Scarborough studio address, date & time, hairstyle details, deposit paid, and balance due.
   - **Simulate Send Email & SMS** triggers with toast notifications.
   - **Add to Calendar (.ics)** download for Apple Calendar, Google Calendar, or Outlook.
   - Print-optimized receipt for PDF export.

---

### 👑 Built-in Stylist Portal (Offline Admin Controls)
Accessible via the header, mobile drawer, or footer ("Stylist Portal"):
* **Appointment Manager**: Search and filter booked appointments, view client info, inspiration pictures, deposit paid, and change status (*Confirmed*, *Completed*, *Cancelled*).
* **Working Days & Hours**: Toggle active days (Mon–Sun) and set custom opening and closing times.
* **Block Holidays & Personal Days**: Blacklist specific dates from the client booking calendar with custom reasons.
* **Buffer & Deposit Settings**: Adjust cleaning time between appointments (15–60 min) and deposit percentages.
* **Export to CSV**: Download complete booking records into a CSV spreadsheet.
* **Sample Data Loader**: Pre-populate realistic client appointments for testing.

---

### 🌐 Showcase Website Sections
* **Hero Page**: Catchy introduction, tension-free styling promises, 4.9-star ratings, and quick CTA buttons.
* **Services & Pricing**: Categorized filter tabs with detailed descriptions, durations, and direct "Book This Style" shortcuts.
* **Portfolio / Gallery**: High-resolution gallery with category filters and interactive zoom Lightbox.
* **About Leelah**: 7+ years of experience, healthy scalp care, tension-free braiding philosophy, and private Scarborough studio amenities.
* **Client Reviews**: Testimonials with star ratings and a live "Write a Review" form that saves to `localStorage`.
* **Contact & Location**: Studio address at *2250 Markham Rd, Suite 204, Scarborough, ON*, embedded Google Map, working hours, and social media links.

---

## 📱 Mobile-First Responsive Design
* Engineered for phone screens with touch-friendly controls (≥ 44px hit targets).
* Sticky bottom quick-book bar on mobile devices.
* Slide-out mobile navigation drawer.

---

## 💻 Tech Stack
* **HTML5**: Semantic markup, accessible modals, and forms.
* **CSS3**: Modern luxury design system with CSS custom properties, grid layouts, and print stylesheets.
* **Vanilla JavaScript (ES6+)**: Custom calendar logic, collision detection, live price calculations, file handling, and `localStorage` synchronization.

---

## 🚀 Getting Started

Simply clone the repository and open `index.html` in your favorite web browser:

```bash
git clone https://github.com/Bisi-dev123/HairByLeelah.git
cd HairByLeelah
# Open index.html in your browser
```

No build step, Node.js runtime, or external web server is required!

---

## 📄 License
MIT License &copy; 2026 Hair By Leelah
