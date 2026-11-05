/**
 * HAIR BY LEELAH - LUXURY HAIR SALON & BOOKING SYSTEM
 * Complete Client Booking Engine, Portfolio, and Stylist Management
 * Pure Vanilla JavaScript with LocalStorage Persistence
 */

// =============================================================================
// 1. DATA CATALOGS: SERVICES, PORTFOLIO & REVIEWS
// =============================================================================

const SERVICES_CATALOG = [
  {
    id: 'knotless-braids',
    category: 'knotless',
    title: 'Knotless Braids',
    subtitle: 'Signature Painless Braiding',
    basePrice: 180,
    baseDurationHours: '4 – 6 hours',
    baseDurationMinutes: 300,
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=700&q=80',
    description: 'Our most requested protective style! Clean, lightweight, and painless knotless braids seamlessly fed in from the root for maximum scalp comfort and edge preservation.',
    featured: true
  },
  {
    id: 'box-braids',
    category: 'box-braids',
    title: 'Classic Box Braids',
    subtitle: 'Crisp Partings & Longevity',
    basePrice: 150,
    baseDurationHours: '4 – 5 hours',
    baseDurationMinutes: 270,
    image: 'https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?auto=format&fit=crop&w=700&q=80',
    description: 'Timeless, neat square-parted box braids designed to last 6–8 weeks. Sealed with hot water dip for silky, flexible movement and lightweight wear.',
    featured: true
  },
  {
    id: 'cornrows',
    category: 'cornrows',
    title: 'Stitch & Fulani Cornrows',
    subtitle: 'Intricate Scalp Artistry',
    basePrice: 60,
    baseDurationHours: '1 – 2 hours',
    baseDurationMinutes: 90,
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=700&q=80',
    description: 'Ultra-clean, sharp stitch cornrows or traditional Fulani braided crowns. Includes precision razor-clean partings and optional gold cuff accents.',
    featured: true
  },
  {
    id: 'wig-installation',
    category: 'wigs',
    title: 'Lace Wig Installation & Melt',
    subtitle: 'Flawless Undetectable Lace',
    basePrice: 100,
    baseDurationHours: '1.5 – 2 hours',
    baseDurationMinutes: 105,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80',
    description: 'HD lace customization, bleached knots, plucked hairline, flat foundation cornrow base, scalp melt, and precision styling (straightened or layered wand curls).',
    featured: true
  },
  {
    id: 'hair-revamp',
    category: 'revamp',
    title: 'Hair & Wig Revamp Treatment',
    subtitle: 'Hydration & Rejuvenation',
    basePrice: 120,
    baseDurationHours: '2 – 3 hours',
    baseDurationMinutes: 150,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=700&q=80',
    description: 'Intense steam hydration, clarifying wash, deep protein conditioning treatment, detangling, and trimming to restore natural curls or revitalize old wig units.',
    featured: false
  },
  {
    id: 'passion-twists',
    category: 'knotless',
    title: 'Bohemian Passion Twists',
    subtitle: 'Effortless Textured Curls',
    basePrice: 160,
    baseDurationHours: '3 – 4 hours',
    baseDurationMinutes: 210,
    image: 'https://images.unsplash.com/photo-1584297091622-af8e5bd81b21?auto=format&fit=crop&w=700&q=80',
    description: 'Fluffy, bohemian-textured water wave twists with loose curling tendrils. Ultra lightweight, beach-ready, and gentle on delicate hairlines.',
    featured: true
  }
];

const PORTFOLIO_ITEMS = [
  {
    category: 'knotless',
    title: 'Waist-Length Honey Blonde Knotless',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80',
    tag: 'Knotless Braids'
  },
  {
    category: 'box',
    title: 'Classic Midnight Black Box Braids',
    image: 'https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?auto=format&fit=crop&w=800&q=80',
    tag: 'Box Braids'
  },
  {
    category: 'cornrow',
    title: 'Fulani Beaded Crown Cornrows',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
    tag: 'Cornrows'
  },
  {
    category: 'wig',
    title: 'Lace Frontal Silk Press Melt',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    tag: 'Wig Installation'
  },
  {
    category: 'twists',
    title: 'Bohemian Curls & Passion Twists',
    image: 'https://images.unsplash.com/photo-1584297091622-af8e5bd81b21?auto=format&fit=crop&w=800&q=80',
    tag: 'Passion Twists'
  },
  {
    category: 'knotless',
    title: 'Smedium Butt-Length Caramel Braids',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    tag: 'Knotless Braids'
  }
];

const INITIAL_REVIEWS = [
  {
    name: 'Tasha K.',
    service: 'Waist-Length Knotless Braids',
    rating: 5,
    date: '2 days ago',
    comment: 'Leelah has the most gentle touch of any braider in Scarborough! Zero tension on my edges, crisp partings, and she was so welcoming. I fell asleep in her chair and woke up with the neatest braids ever.'
  },
  {
    name: 'Amina D.',
    service: 'Stitch Cornrows with Cuffs',
    rating: 5,
    date: '1 week ago',
    comment: 'The booking process was so clear with the 30% deposit system. Her Scarborough studio is clean, private, and smells amazing. My cornrows lasted over a month without any itching or pulling!'
  },
  {
    name: 'Chloe V.',
    service: 'HD Lace Wig Melt & Style',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Where is the lace?! Leelah melted my lace frontal completely into my skin for my birthday dinner. Received compliments all night. Worth every single penny.'
  }
];

// Default Stylist Settings
const DEFAULT_STYLIST_SETTINGS = {
  prepBufferMinutes: 30, // 30 mins cleaning/sanitizing between appointments
  depositPercent: 30,    // 30% deposit
  studioAddress: '2250 Markham Road, Suite 204, Scarborough, ON M1B 2W4',
  workingHours: {
    0: { name: 'Sunday', enabled: true, start: '10:00', end: '16:00' },
    1: { name: 'Monday', enabled: false, start: '09:00', end: '17:00' }, // Closed
    2: { name: 'Tuesday', enabled: true, start: '09:00', end: '19:00' },
    3: { name: 'Wednesday', enabled: true, start: '09:00', end: '19:00' },
    4: { name: 'Thursday', enabled: true, start: '09:00', end: '19:00' },
    5: { name: 'Friday', enabled: true, start: '09:00', end: '19:00' },
    6: { name: 'Saturday', enabled: true, start: '08:30', end: '18:30' }
  }
};

// =============================================================================
// 2. LOCAL STORAGE MANAGERS
// =============================================================================

function getStoredBookings() {
  const data = localStorage.getItem('hbl_bookings');
  return data ? JSON.parse(data) : [];
}

function saveStoredBookings(bookings) {
  localStorage.setItem('hbl_bookings', JSON.stringify(bookings));
}

function getStoredSettings() {
  const data = localStorage.getItem('hbl_settings');
  return data ? JSON.parse(data) : DEFAULT_STYLIST_SETTINGS;
}

function saveStoredSettings(settings) {
  localStorage.setItem('hbl_settings', JSON.stringify(settings));
}

function getStoredBlockedDates() {
  const data = localStorage.getItem('hbl_blocked_dates');
  return data ? JSON.parse(data) : [
    { date: '2026-12-25', reason: 'Christmas Day' },
    { date: '2026-12-26', reason: 'Boxing Day' },
    { date: '2026-01-01', reason: 'New Year Day' }
  ];
}

function saveStoredBlockedDates(blockedDates) {
  localStorage.setItem('hbl_blocked_dates', JSON.stringify(blockedDates));
}

function getStoredReviews() {
  const data = localStorage.getItem('hbl_reviews');
  return data ? JSON.parse(data) : INITIAL_REVIEWS;
}

function saveStoredReviews(reviews) {
  localStorage.setItem('hbl_reviews', JSON.stringify(reviews));
}

// =============================================================================
// 3. WIZARD STATE (ONLINE BOOKING SESSION)
// =============================================================================

let currentWizardStep = 1;

let bookingDraft = {
  // Step 1: Client Information
  client: {
    fullName: '',
    email: '',
    phone: '',
    preferredContact: 'SMS',
    clientStatus: 'First-Time Client'
  },
  // Step 2: Service Selection & Dynamic Adjustments
  service: null,
  lengthOption: 'mid-back',
  lengthPrice: 0,
  lengthTimeMinutes: 0,
  sizeOption: 'medium',
  sizePrice: 0,
  sizeTimeMinutes: 0,
  addons: [],
  calculatedTotal: 0,
  calculatedDeposit: 0,
  calculatedBalance: 0,
  calculatedDurationText: '',
  // Step 3: Hair Preferences & Inspo
  hairColor: '#1B - Natural Black',
  extensionSupply: 'Client Bringing Own Hair',
  inspoImageData: null,
  allergiesRequirements: '',
  // Step 4: Schedule
  selectedDateStr: null, // 'YYYY-MM-DD'
  selectedTimeSlot: null, // '09:00 AM'
  slotStartMinutes: 0,
  slotEndMinutes: 0,
  // Step 5: Policy Agreement
  policiesAgreed: false,
  // Step 6: Payment Details
  paymentMethod: 'Card (Simulated)',
  paymentStatus: 'Pending',
  referenceCode: ''
};

// Calendar navigation state
let calCurrentYear = 2026;
let calCurrentMonth = 10; // 0-indexed (10 = November)

// =============================================================================
// 4. INITIALIZATION & DOM READY
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Sync year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Initialize Calendar state to current month
  const today = new Date();
  calCurrentYear = today.getFullYear();
  calCurrentMonth = today.getMonth();

  // Render Page Components
  renderServicesCatalog('all');
  renderPortfolioGrid('all');
  renderReviewsGrid();
  renderHoursListOnPage();

  // Setup Star Rating in Review Modal
  setupStarRatingPicker();

  // Setup Mobile Nav Toggle
  setupMobileNav();

  // Setup Stylist Portal Trigger Buttons
  setupStylistPortalEvents();

  // Pre-load default service in draft
  selectServiceById('knotless-braids', false);
});

// =============================================================================
// 5. RENDERING PUBLIC SITE SECTIONS
// =============================================================================

function renderServicesCatalog(filterCategory = 'all') {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;

  const items = filterCategory === 'all' 
    ? SERVICES_CATALOG 
    : SERVICES_CATALOG.filter(s => s.category === filterCategory);

  grid.innerHTML = items.map(service => `
    <div class="service-card" data-category="${service.category}">
      <div class="service-card-media">
        <img src="${service.image}" alt="${service.title}" class="service-card-img" loading="lazy">
        <span class="service-badge">${service.subtitle}</span>
      </div>
      <div class="service-card-body">
        <div class="service-meta-strip">
          <h3 class="service-title">${service.title}</h3>
          <span class="service-price-tag">$${service.basePrice}+</span>
        </div>
        <span class="service-duration-badge">
          <i class="fa-regular fa-clock"></i> Est. Duration: ${service.baseDurationHours}
        </span>
        <p class="service-desc">${service.description}</p>
        <div class="service-card-footer">
          <button class="btn btn-primary btn-block" onclick="startBookingWithService('${service.id}')">
            <i class="fa-regular fa-calendar-check"></i> Book This Style
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Setup Service Filter Buttons
  const filterBtns = document.querySelectorAll('.service-tab-btn');
  filterBtns.forEach(btn => {
    btn.onclick = () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderServicesCatalog(btn.dataset.category);
    };
  });
}

function selectServiceCategory(cat) {
  const btn = document.querySelector(`.service-tab-btn[data-category="${cat}"]`);
  if (btn) btn.click();
}

function renderPortfolioGrid(filter = 'all') {
  const grid = document.getElementById('portfolioGrid');
  if (!grid) return;

  const items = filter === 'all' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(p => p.category === filter);

  grid.innerHTML = items.map(item => `
    <div class="gallery-card" onclick="openLightbox('${item.image}', '${item.title}')">
      <img src="${item.image}" alt="${item.title}" class="gallery-img" loading="lazy">
      <div class="gallery-overlay">
        <h4>${item.title}</h4>
        <span><i class="fa-solid fa-scissors"></i> ${item.tag}</span>
      </div>
      <div class="gallery-zoom-icon">
        <i class="fa-solid fa-magnifying-glass-plus"></i>
      </div>
    </div>
  `).join('');

  // Setup Portfolio Filter Buttons
  const pFilterBtns = document.querySelectorAll('.portfolio-filter-btn');
  pFilterBtns.forEach(btn => {
    btn.onclick = () => {
      pFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPortfolioGrid(btn.dataset.filter);
    };
  });
}

function renderReviewsGrid() {
  const grid = document.getElementById('reviewsGrid');
  if (!grid) return;

  const reviews = getStoredReviews();
  grid.innerHTML = reviews.map(rev => `
    <div class="review-card">
      <div class="review-header">
        <div class="reviewer-meta">
          <div class="reviewer-avatar">${rev.name.charAt(0)}</div>
          <div class="reviewer-info">
            <strong>${rev.name}</strong>
            <small>${rev.date || 'Recent Client'}</small>
          </div>
        </div>
        <div class="review-stars">
          ${Array(rev.rating).fill('<i class="fa-solid fa-star"></i>').join('')}
        </div>
      </div>
      <span class="review-style-tag"><i class="fa-solid fa-tag"></i> ${rev.service}</span>
      <p>"${rev.comment}"</p>
      <span class="review-verified-badge">
        <i class="fa-solid fa-circle-check"></i> Verified Appointment
      </span>
    </div>
  `).join('');
}

function renderHoursListOnPage() {
  const listEl = document.getElementById('contactHoursList');
  if (!listEl) return;

  const settings = getStoredSettings();
  const days = [2, 3, 4, 5, 6, 0, 1]; // Tue to Mon order

  listEl.innerHTML = days.map(dayIdx => {
    const day = settings.workingHours[dayIdx];
    if (!day) return '';
    const timeText = day.enabled 
      ? `${formatTime12h(day.start)} – ${formatTime12h(day.end)}` 
      : '<span class="closed-tag">Closed</span>';
    return `<li><span>${day.name}</span> <span>${timeText}</span></li>`;
  }).join('');
}

// =============================================================================
// 6. MULTI-STEP BOOKING WIZARD ENGINE
// =============================================================================

function openBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (!modal) return;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Render services in step 2 picker if not already rendered
  renderBookingServicesPicker();
  calculateDynamicBookingPrice();
  showStep(currentWizardStep);
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function startBookingWithService(serviceId) {
  selectServiceById(serviceId, true);
  openBookingModal();
  goToStep(2); // Jump directly to customization
}

function renderBookingServicesPicker() {
  const picker = document.getElementById('bookingServicesPicker');
  if (!picker) return;

  picker.innerHTML = SERVICES_CATALOG.map(svc => `
    <div class="service-pick-card ${bookingDraft.service?.id === svc.id ? 'selected' : ''}" 
         onclick="selectServiceById('${svc.id}', true)">
      <img src="${svc.image}" alt="${svc.title}">
      <h4>${svc.title}</h4>
      <div class="svc-meta">
        <span class="svc-price">$${svc.basePrice}+</span>
        <span class="svc-time">${svc.baseDurationHours}</span>
      </div>
    </div>
  `).join('');
}

function selectServiceById(serviceId, triggerRecalc = true) {
  const found = SERVICES_CATALOG.find(s => s.id === serviceId);
  if (!found) return;

  bookingDraft.service = found;

  // Update UI selection highlight
  const cards = document.querySelectorAll('.service-pick-card');
  cards.forEach(c => c.classList.remove('selected'));
  const activeCard = Array.from(cards).find(c => c.querySelector('h4')?.textContent === found.title);
  if (activeCard) activeCard.classList.add('selected');

  if (triggerRecalc) {
    calculateDynamicBookingPrice();
    showToast(`Selected ${found.title}`, 'info');
  }
}

// Dynamic Pricing & Duration Calculation
function calculateDynamicBookingPrice() {
  if (!bookingDraft.service) {
    bookingDraft.service = SERVICES_CATALOG[0];
  }

  const lengthSelect = document.getElementById('customLengthSelect');
  const sizeSelect = document.getElementById('customSizeSelect');

  let lengthPrice = 0;
  let lengthMinutes = 0;
  if (lengthSelect) {
    const selectedOpt = lengthSelect.selectedOptions[0];
    lengthPrice = parseFloat(selectedOpt?.dataset.price || '0');
    lengthMinutes = parseInt(selectedOpt?.dataset.time || '0', 10);
    bookingDraft.lengthOption = selectedOpt?.text || 'Mid-Back Length';
  }

  let sizePrice = 0;
  let sizeMinutes = 0;
  if (sizeSelect) {
    const selectedOpt = sizeSelect.selectedOptions[0];
    sizePrice = parseFloat(selectedOpt?.dataset.price || '0');
    sizeMinutes = parseInt(selectedOpt?.dataset.time || '0', 10);
    bookingDraft.sizeOption = selectedOpt?.text || 'Medium';
  }

  // Add-ons
  const addonCheckboxes = document.querySelectorAll('.addon-cb:checked');
  let addonsTotal = 0;
  let addonsTimeMinutes = 0;
  const selectedAddonsList = [];

  addonCheckboxes.forEach(cb => {
    const p = parseFloat(cb.dataset.price || '0');
    const t = parseInt(cb.dataset.time || '0', 10);
    addonsTotal += p;
    addonsTimeMinutes += t;
    selectedAddonsList.push({ name: cb.value, price: p, timeMinutes: t });
  });

  bookingDraft.addons = selectedAddonsList;
  bookingDraft.lengthPrice = lengthPrice;
  bookingDraft.lengthTimeMinutes = lengthMinutes;
  bookingDraft.sizePrice = sizePrice;
  bookingDraft.sizeTimeMinutes = sizeMinutes;

  // Total calculation
  const total = bookingDraft.service.basePrice + lengthPrice + sizePrice + addonsTotal;
  const settings = getStoredSettings();
  const depositPercent = settings.depositPercent || 30;
  const deposit = Math.round(total * (depositPercent / 100));
  const balance = total - deposit;

  // Duration calculation
  const totalMinutes = bookingDraft.service.baseDurationMinutes + lengthMinutes + sizeMinutes + addonsTimeMinutes;
  const durationText = formatMinutesToHours(totalMinutes);

  bookingDraft.calculatedTotal = total;
  bookingDraft.calculatedDeposit = deposit;
  bookingDraft.calculatedBalance = balance;
  bookingDraft.calculatedDurationMinutes = totalMinutes;
  bookingDraft.calculatedDurationText = durationText;

  // Update UI Displays
  updateSummaryDisplays();
}

function updateSummaryDisplays() {
  const total = bookingDraft.calculatedTotal;
  const deposit = bookingDraft.calculatedDeposit;
  const balance = bookingDraft.calculatedBalance;
  const styleName = bookingDraft.service ? bookingDraft.service.title : 'None';

  // Live top banner inside wizard
  const liveStyle = document.getElementById('liveSummaryStyle');
  const liveTotal = document.getElementById('liveSummaryTotal');
  const liveDeposit = document.getElementById('liveSummaryDeposit');
  const liveBalance = document.getElementById('liveSummaryBalance');

  if (liveStyle) liveStyle.textContent = styleName;
  if (liveTotal) liveTotal.textContent = `$${total}.00`;
  if (liveDeposit) liveDeposit.textContent = `$${deposit}.00`;
  if (liveBalance) liveBalance.textContent = `$${balance}.00`;

  // Step 2 banner
  const bannerTotal = document.getElementById('bannerTotal');
  const bannerDeposit = document.getElementById('bannerDeposit');
  const bannerBalance = document.getElementById('bannerBalance');
  const bannerDuration = document.getElementById('bannerDuration');

  if (bannerTotal) bannerTotal.textContent = `$${total}.00`;
  if (bannerDeposit) bannerDeposit.textContent = `$${deposit}.00`;
  if (bannerBalance) bannerBalance.textContent = `$${balance}.00`;
  if (bannerDuration) bannerDuration.textContent = bookingDraft.calculatedDurationText;

  // Step 6 payment summary
  const payClient = document.getElementById('paySummaryClient');
  const payService = document.getElementById('paySummaryService');
  const payDetails = document.getElementById('paySummaryDetails');
  const payDate = document.getElementById('paySummaryDate');
  const payTime = document.getElementById('paySummaryTime');
  const payTotal = document.getElementById('payTotalAmount');
  const payDeposit = document.getElementById('payDepositAmount');
  const payBalance = document.getElementById('payBalanceAmount');
  const payBtnLabel = document.getElementById('payBtnDepositLabel');

  if (payClient) payClient.textContent = bookingDraft.client.fullName || 'Client';
  if (payService) payService.textContent = styleName;
  if (payDetails) payDetails.textContent = `${bookingDraft.lengthOption} &bull; ${bookingDraft.sizeOption}`;
  if (payDate) payDate.textContent = bookingDraft.selectedDateStr || 'TBD';
  if (payTime) payTime.textContent = bookingDraft.selectedTimeSlot || 'TBD';
  if (payTotal) payTotal.textContent = `$${total}.00`;
  if (payDeposit) payDeposit.textContent = `$${deposit}.00`;
  if (payBalance) payBalance.textContent = `$${balance}.00`;
  if (payBtnLabel) payBtnLabel.textContent = `$${deposit}.00`;
}

// =============================================================================
// 7. WIZARD STEP NAVIGATION & VALIDATION
// =============================================================================

function showStep(stepNumber) {
  currentWizardStep = stepNumber;

  // Step Tag
  const tag = document.getElementById('wizardStepTag');
  if (tag) tag.textContent = `Step ${stepNumber} of 7`;

  // Hide all panels, show current
  document.querySelectorAll('.wizard-step-panel').forEach(panel => panel.classList.remove('active'));
  const currentPanel = document.getElementById(`stepPanel${stepNumber}`);
  if (currentPanel) currentPanel.classList.add('active');

  // Update progress tracker
  document.querySelectorAll('.progress-step').forEach(stepEl => {
    const stepIdx = parseInt(stepEl.dataset.step, 10);
    stepEl.classList.remove('active', 'completed');
    if (stepIdx === stepNumber) {
      stepEl.classList.add('active');
    } else if (stepIdx < stepNumber) {
      stepEl.classList.add('completed');
    }
  });

  // Footer buttons state
  const backBtn = document.getElementById('wizardBackBtn');
  const nextBtn = document.getElementById('wizardNextBtn');
  const wizardFooter = document.getElementById('wizardFooter');

  if (wizardFooter) {
    // Hide default footer on step 6 (has its own payment submit button) & step 7 (confirmation screen)
    wizardFooter.style.display = (stepNumber === 6 || stepNumber === 7) ? 'none' : 'flex';
  }

  if (backBtn) {
    backBtn.style.visibility = (stepNumber === 1 || stepNumber === 7) ? 'hidden' : 'visible';
  }

  if (nextBtn) {
    if (stepNumber === 5) {
      nextBtn.innerHTML = '<span>Proceed to Deposit</span> <i class="fa-solid fa-credit-card"></i>';
    } else {
      nextBtn.innerHTML = '<span>Continue</span> <i class="fa-solid fa-arrow-right"></i>';
    }
  }

  // Step specific preparations
  if (stepNumber === 4) {
    renderCalendar(calCurrentYear, calCurrentMonth);
  } else if (stepNumber === 6) {
    updateSummaryDisplays();
  }
}

function nextStep() {
  if (!validateStep(currentWizardStep)) return;

  if (currentWizardStep < 7) {
    showStep(currentWizardStep + 1);
  }
}

function prevStep() {
  if (currentWizardStep > 1) {
    showStep(currentWizardStep - 1);
  }
}

function goToStep(step) {
  showStep(step);
}

function validateStep(step) {
  if (step === 1) {
    const nameInput = document.getElementById('clientFullName');
    const emailInput = document.getElementById('clientEmail');
    const phoneInput = document.getElementById('clientPhone');
    const prefContact = document.getElementById('clientPreferredContact');
    const clientStatusRadio = document.querySelector('input[name="clientStatus"]:checked');

    if (!nameInput?.value.trim()) {
      showToast('Please enter your full name.', 'error');
      nameInput.focus();
      return false;
    }
    if (!emailInput?.value.trim() || !validateEmail(emailInput.value)) {
      showToast('Please enter a valid email address.', 'error');
      emailInput.focus();
      return false;
    }
    if (!phoneInput?.value.trim() || phoneInput.value.length < 7) {
      showToast('Please enter a valid phone number.', 'error');
      phoneInput.focus();
      return false;
    }

    bookingDraft.client.fullName = nameInput.value.trim();
    bookingDraft.client.email = emailInput.value.trim();
    bookingDraft.client.phone = phoneInput.value.trim();
    bookingDraft.client.preferredContact = prefContact?.value || 'SMS';
    bookingDraft.client.clientStatus = clientStatusRadio?.value || 'First-Time Client';
    return true;
  }

  if (step === 2) {
    if (!bookingDraft.service) {
      showToast('Please select a hairstyle to proceed.', 'error');
      return false;
    }
    calculateDynamicBookingPrice();
    return true;
  }

  if (step === 3) {
    const colorSelect = document.getElementById('hairColorSelect');
    const supplyRadio = document.querySelector('input[name="extensionSupply"]:checked');
    const allergies = document.getElementById('allergiesSpecialReqs');

    bookingDraft.hairColor = colorSelect?.value || '#1B - Natural Black';
    bookingDraft.extensionSupply = supplyRadio?.value || 'Client Bringing Own Hair';
    bookingDraft.allergiesRequirements = allergies?.value.trim() || 'None reported';
    return true;
  }

  if (step === 4) {
    if (!bookingDraft.selectedDateStr) {
      showToast('Please select an appointment date from the calendar.', 'error');
      return false;
    }
    if (!bookingDraft.selectedTimeSlot) {
      showToast('Please pick an available start time slot.', 'error');
      return false;
    }
    return true;
  }

  if (step === 5) {
    const agreementCheckbox = document.getElementById('policyAgreementCheckbox');
    if (!agreementCheckbox?.checked) {
      showToast('Please read and agree to the salon policies to continue.', 'error');
      agreementCheckbox?.focus();
      return false;
    }
    bookingDraft.policiesAgreed = true;
    return true;
  }

  return true;
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// =============================================================================
// 8. STEP 3: INSPIRATION IMAGE UPLOAD (LOCAL FILE TO DATA-URL)
// =============================================================================

function handleInspoUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  if (file.size > 5 * 1024 * 1024) {
    showToast('File size must be under 5MB.', 'error');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    bookingDraft.inspoImageData = dataUrl;

    const previewWrap = document.getElementById('inspoPreviewWrap');
    const previewImg = document.getElementById('inspoImagePreview');
    const dropContent = document.getElementById('dropzoneContent');

    if (previewImg && previewWrap && dropContent) {
      previewImg.src = dataUrl;
      previewWrap.style.display = 'inline-block';
      dropContent.style.display = 'none';
    }
    showToast('Inspiration photo uploaded successfully!', 'success');
  };
  reader.readAsDataURL(file);
}

function removeInspoImage() {
  bookingDraft.inspoImageData = null;
  const previewWrap = document.getElementById('inspoPreviewWrap');
  const previewImg = document.getElementById('inspoImagePreview');
  const dropContent = document.getElementById('dropzoneContent');
  const fileInput = document.getElementById('inspoFileInput');

  if (previewImg) previewImg.src = '';
  if (previewWrap) previewWrap.style.display = 'none';
  if (dropContent) dropContent.style.display = 'flex';
  if (fileInput) fileInput.value = '';
}

// =============================================================================
// 9. STEP 4: INTERACTIVE CALENDAR, AVAILABILITY & BUFFER ENGINE
// =============================================================================

function navigateMonth(direction) {
  calCurrentMonth += direction;
  if (calCurrentMonth > 11) {
    calCurrentMonth = 0;
    calCurrentYear++;
  } else if (calCurrentMonth < 0) {
    calCurrentMonth = 11;
    calCurrentYear--;
  }
  renderCalendar(calCurrentYear, calCurrentMonth);
}

function renderCalendar(year, month) {
  const monthLabel = document.getElementById('calendarMonthLabel');
  const daysGrid = document.getElementById('calendarDaysGrid');
  if (!monthLabel || !daysGrid) return;

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  monthLabel.textContent = `${monthNames[month]} ${year}`;

  const firstDayIndex = new Date(year, month, 1).getDay(); // 0 is Sunday
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const settings = getStoredSettings();
  const blockedDates = getStoredBlockedDates();
  const bookings = getStoredBookings();

  let cellsHtml = '';

  // Empty leading cells
  for (let i = 0; i < firstDayIndex; i++) {
    cellsHtml += '<div class="cal-day-cell empty"></div>';
  }

  // Days in month
  for (let day = 1; day <= daysInMonth; day++) {
    const cellDate = new Date(year, month, day);
    const dateStr = formatDateString(year, month + 1, day); // 'YYYY-MM-DD'
    const dayOfWeek = cellDate.getDay();

    const isPast = cellDate < today;
    const isStylistWorkingDay = settings.workingHours[dayOfWeek]?.enabled;
    const isBlocked = blockedDates.some(b => b.date === dateStr);
    const isSelected = bookingDraft.selectedDateStr === dateStr;

    // Check if fully booked
    const isFullyBooked = !isPast && isStylistWorkingDay && !isBlocked 
      ? checkDayFullyBooked(dateStr, dayOfWeek, settings, bookings) 
      : false;

    let cellClass = 'cal-day-cell ';
    let clickHandler = '';

    if (isPast) {
      cellClass += 'disabled';
    } else if (isBlocked) {
      cellClass += 'blocked';
    } else if (!isStylistWorkingDay) {
      cellClass += 'disabled';
    } else if (isFullyBooked) {
      cellClass += 'fully-booked';
    } else {
      cellClass += 'available';
      clickHandler = `onclick="selectAppointmentDate('${dateStr}', ${dayOfWeek})"`;
    }

    if (isSelected) {
      cellClass += ' selected';
    }

    cellsHtml += `<div class="${cellClass}" ${clickHandler} title="${dateStr}">${day}</div>`;
  }

  daysGrid.innerHTML = cellsHtml;

  // Refresh slots display
  if (bookingDraft.selectedDateStr) {
    const d = new Date(bookingDraft.selectedDateStr + 'T00:00:00');
    renderTimeSlots(bookingDraft.selectedDateStr, d.getDay());
  } else {
    const slotsList = document.getElementById('slotsList');
    if (slotsList) {
      slotsList.innerHTML = `
        <div class="no-date-selected">
          <i class="fa-regular fa-calendar-days"></i>
          <p>Click any green or available date on the calendar to view start times.</p>
        </div>
      `;
    }
  }
}

function selectAppointmentDate(dateStr, dayOfWeek) {
  bookingDraft.selectedDateStr = dateStr;
  bookingDraft.selectedTimeSlot = null; // Reset time slot when changing date

  // Update date header display
  const displayEl = document.getElementById('selectedDateDisplay');
  if (displayEl) {
    const d = new Date(dateStr + 'T00:00:00');
    displayEl.textContent = d.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' });
  }

  // Update visual selection on calendar cells
  document.querySelectorAll('.cal-day-cell').forEach(cell => cell.classList.remove('selected'));
  const clickedCell = Array.from(document.querySelectorAll('.cal-day-cell')).find(c => c.getAttribute('title') === dateStr);
  if (clickedCell) clickedCell.classList.add('selected');

  renderTimeSlots(dateStr, dayOfWeek);
}

function renderTimeSlots(dateStr, dayOfWeek) {
  const slotsList = document.getElementById('slotsList');
  if (!slotsList) return;

  const settings = getStoredSettings();
  const daySchedule = settings.workingHours[dayOfWeek];
  if (!daySchedule || !daySchedule.enabled) {
    slotsList.innerHTML = '<p class="text-muted p-3">Stylist is off on this day.</p>';
    return;
  }

  const durationMinutes = bookingDraft.calculatedDurationMinutes || 240;
  const bufferMinutes = parseInt(settings.prepBufferMinutes || 30, 10);
  const totalOccupiedMinutes = durationMinutes + bufferMinutes;

  const startMinutes = parseTimeToMinutes(daySchedule.start); // e.g. 9:00 -> 540
  const endMinutes = parseTimeToMinutes(daySchedule.end);     // e.g. 19:00 -> 1140

  // Existing bookings on this date
  const allBookings = getStoredBookings();
  const dayBookings = allBookings.filter(b => b.schedule.date === dateStr && b.status !== 'Cancelled');

  // Candidate start slots every 60 or 90 minutes
  const candidateSlots = [];
  const slotInterval = 60; // Check starts every hour

  for (let time = startMinutes; time + durationMinutes <= endMinutes; time += slotInterval) {
    const slotEndTime = time + totalOccupiedMinutes;
    
    // Check collision with existing bookings + their buffers
    const isCollision = dayBookings.some(b => {
      const bStart = b.schedule.startMinutes;
      const bEnd = b.schedule.endMinutes + bufferMinutes; // buffer included
      return (time < bEnd && slotEndTime > bStart);
    });

    candidateSlots.push({
      timeMinutes: time,
      timeString: formatMinutesTo12h(time),
      isAvailable: !isCollision
    });
  }

  if (candidateSlots.length === 0) {
    slotsList.innerHTML = '<p class="text-muted p-3">No available slots for a service of this duration on this day.</p>';
    return;
  }

  slotsList.innerHTML = candidateSlots.map(slot => `
    <button type="button" 
      class="slot-btn ${bookingDraft.selectedTimeSlot === slot.timeString ? 'selected' : ''}" 
      ${!slot.isAvailable ? 'disabled title="Slot already booked or overlaps"' : ''}
      onclick="selectTimeSlot('${slot.timeString}', ${slot.timeMinutes})">
      <i class="fa-regular fa-clock"></i> ${slot.timeString}
    </button>
  `).join('');
}

function selectTimeSlot(timeStr, startMinutes) {
  bookingDraft.selectedTimeSlot = timeStr;
  bookingDraft.slotStartMinutes = startMinutes;
  bookingDraft.slotEndMinutes = startMinutes + (bookingDraft.calculatedDurationMinutes || 240);

  // Update UI button highlights
  const buttons = document.querySelectorAll('.slot-btn');
  buttons.forEach(b => b.classList.remove('selected'));
  const activeBtn = Array.from(buttons).find(b => b.textContent.includes(timeStr));
  if (activeBtn) activeBtn.classList.add('selected');

  showToast(`Time slot set to ${timeStr}`, 'success');
}

function checkDayFullyBooked(dateStr, dayOfWeek, settings, bookings) {
  const daySchedule = settings.workingHours[dayOfWeek];
  if (!daySchedule || !daySchedule.enabled) return false;

  const startMinutes = parseTimeToMinutes(daySchedule.start);
  const endMinutes = parseTimeToMinutes(daySchedule.end);
  const totalWorkMinutes = endMinutes - startMinutes;

  const dayBookings = bookings.filter(b => b.schedule.date === dateStr && b.status !== 'Cancelled');
  let bookedMinutes = 0;
  dayBookings.forEach(b => {
    bookedMinutes += (b.schedule.endMinutes - b.schedule.startMinutes + (settings.prepBufferMinutes || 30));
  });

  return bookedMinutes >= totalWorkMinutes;
}

// =============================================================================
// 10. STEP 6: SIMULATED DEPOSIT PAYMENT & VERIFICATION
// =============================================================================

function formatCardNumber(input) {
  let val = input.value.replace(/\D/g, '').substring(0, 16);
  val = val.match(/.{1,4}/g)?.join(' ') || val;
  input.value = val;
}

function formatExpiry(input) {
  let val = input.value.replace(/\D/g, '').substring(0, 4);
  if (val.length >= 2) {
    val = val.substring(0, 2) + '/' + val.substring(2);
  }
  input.value = val;
}

function simulateExpressPay(method) {
  bookingDraft.paymentMethod = method;
  showToast(`Connecting to ${method}...`, 'info');
  setTimeout(() => {
    executeSuccessfulBooking(method);
  }, 1000);
}

function handlePaymentSubmit(event) {
  event.preventDefault();

  const cardholderName = document.getElementById('cardholderName')?.value.trim();
  const cardNumber = document.getElementById('cardNumber')?.value.replace(/\s+/g, '');
  const cardExpiry = document.getElementById('cardExpiry')?.value.trim();
  const cardCvc = document.getElementById('cardCvc')?.value.trim();

  if (!cardholderName || !cardNumber || cardNumber.length < 15 || !cardExpiry || !cardCvc) {
    showToast('Please fill in complete card details.', 'error');
    return;
  }

  const payBtn = document.getElementById('paySubmitBtn');
  if (payBtn) {
    payBtn.disabled = true;
    payBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Verifying Deposit Payment...';
  }

  // Simulate payment gateway verification (1.2 seconds)
  setTimeout(() => {
    if (payBtn) {
      payBtn.disabled = false;
      payBtn.innerHTML = '<i class="fa-solid fa-lock"></i> Pay Deposit';
    }
    executeSuccessfulBooking('Credit / Debit Card');
  }, 1200);
}

function executeSuccessfulBooking(paymentMethodUsed = 'Card') {
  // Generate unique Reference Code
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const refCode = `HBL-2026-${randomSuffix}`;
  bookingDraft.referenceCode = refCode;
  bookingDraft.paymentMethod = paymentMethodUsed;
  bookingDraft.paymentStatus = 'Verified (Paid 30% Deposit)';

  // Build final booking record
  const newBooking = {
    id: refCode,
    createdAt: new Date().toISOString(),
    status: 'Confirmed',
    client: { ...bookingDraft.client },
    service: {
      id: bookingDraft.service.id,
      title: bookingDraft.service.title,
      basePrice: bookingDraft.service.basePrice,
      durationText: bookingDraft.calculatedDurationText,
      durationMinutes: bookingDraft.calculatedDurationMinutes
    },
    customization: {
      lengthOption: bookingDraft.lengthOption,
      sizeOption: bookingDraft.sizeOption,
      addons: bookingDraft.addons,
      hairColor: bookingDraft.hairColor,
      extensionSupply: bookingDraft.extensionSupply,
      inspoImageData: bookingDraft.inspoImageData,
      allergies: bookingDraft.allergiesRequirements
    },
    schedule: {
      date: bookingDraft.selectedDateStr,
      timeSlot: bookingDraft.selectedTimeSlot,
      startMinutes: bookingDraft.slotStartMinutes,
      endMinutes: bookingDraft.slotEndMinutes
    },
    payment: {
      total: bookingDraft.calculatedTotal,
      depositPaid: bookingDraft.calculatedDeposit,
      balanceDue: bookingDraft.calculatedBalance,
      method: paymentMethodUsed,
      status: 'Deposit Verified'
    }
  };

  // Save into LocalStorage
  const bookings = getStoredBookings();
  bookings.unshift(newBooking);
  saveStoredBookings(bookings);

  // Render Step 7 Confirmation Screen
  renderConfirmationStep(newBooking);

  // Move wizard to Step 7
  showStep(7);
  showToast('Deposit verified! Your appointment is confirmed.', 'success');
}

// =============================================================================
// 11. STEP 7: CONFIRMATION SCREEN & ACTION TRIGGERS
// =============================================================================

function renderConfirmationStep(booking) {
  const refEl = document.getElementById('confirmRefNumber');
  const nameEl = document.getElementById('confirmClientName');
  const contactEl = document.getElementById('confirmClientContact');
  const serviceEl = document.getElementById('confirmService');
  const customEl = document.getElementById('confirmCustomDetails');
  const dateTimeEl = document.getElementById('confirmDateTime');
  const addressEl = document.getElementById('confirmAddress');
  const totalCostEl = document.getElementById('confirmTotalCost');
  const depositPaidEl = document.getElementById('confirmDepositPaid');
  const balanceDueEl = document.getElementById('confirmBalanceDue');

  if (refEl) refEl.textContent = booking.id;
  if (nameEl) nameEl.textContent = booking.client.fullName;
  if (contactEl) contactEl.textContent = `${booking.client.phone} • ${booking.client.email}`;
  if (serviceEl) serviceEl.textContent = booking.service.title;
  
  const addonsSummary = booking.customization.addons.length > 0 
    ? ` + Add-ons: ${booking.customization.addons.map(a => a.name).join(', ')}` 
    : '';
  if (customEl) customEl.textContent = `${booking.customization.lengthOption}, ${booking.customization.sizeOption}, Color: ${booking.customization.hairColor}${addonsSummary}`;
  
  if (dateTimeEl) dateTimeEl.textContent = `${booking.schedule.date} at ${booking.schedule.timeSlot} (${booking.service.durationText})`;
  
  const settings = getStoredSettings();
  if (addressEl) addressEl.textContent = settings.studioAddress;

  if (totalCostEl) totalCostEl.textContent = `$${booking.payment.total}.00`;
  if (depositPaidEl) depositPaidEl.textContent = `$${booking.payment.depositPaid}.00 (Verified)`;
  if (balanceDueEl) balanceDueEl.textContent = `$${booking.payment.balanceDue}.00`;
}

function simulateSendEmail() {
  const email = bookingDraft.client.email || 'your email';
  showToast(`Simulated confirmation & receipt email dispatched to ${email}!`, 'success');
}

function simulateSendSMS() {
  const phone = bookingDraft.client.phone || 'your phone';
  showToast(`Simulated SMS appointment reminder sent to ${phone}!`, 'success');
}

function downloadCalendarInvite() {
  if (!bookingDraft.selectedDateStr || !bookingDraft.selectedTimeSlot) {
    showToast('Appointment schedule missing.', 'error');
    return;
  }

  // Construct iCalendar (.ics) content
  const startDateTime = new Date(`${bookingDraft.selectedDateStr}T${formatTimeTo24h(bookingDraft.selectedTimeSlot)}:00`);
  const endDateTime = new Date(startDateTime.getTime() + (bookingDraft.calculatedDurationMinutes || 240) * 60000);

  const formatICSDate = (d) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Hair By Leelah//Appointment Booking//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${bookingDraft.referenceCode}@hairbyleelah.ca`,
    `DTSTAMP:${formatICSDate(new Date())}`,
    `DTSTART:${formatICSDate(startDateTime)}`,
    `DTEND:${formatICSDate(endDateTime)}`,
    `SUMMARY:Hair By Leelah: ${bookingDraft.service?.title}`,
    `DESCRIPTION:Appointment for ${bookingDraft.client.fullName}. Deposit paid: $${bookingDraft.calculatedDeposit}. Remaining balance on arrival: $${bookingDraft.calculatedBalance}. Ref: ${bookingDraft.referenceCode}`,
    'LOCATION:2250 Markham Road, Suite 204, Scarborough, ON M1B 2W4',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `HairByLeelah-${bookingDraft.referenceCode}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast('Calendar invite (.ics) downloaded!', 'success');
}

function finishBookingFlow() {
  closeBookingModal();
  // Reset draft to step 1
  currentWizardStep = 1;
  const form1 = document.getElementById('step1Form');
  if (form1) form1.reset();
  removeInspoImage();
  bookingDraft.selectedDateStr = null;
  bookingDraft.selectedTimeSlot = null;
}

// =============================================================================
// 12. STYLIST PORTAL (OFFLINE LOCALSTORAGE CONTROLS)
// =============================================================================

function openStylistPortal() {
  const modal = document.getElementById('stylistModal');
  if (!modal) return;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  loadStylistPortalData();
}

function closeStylistPortal() {
  const modal = document.getElementById('stylistModal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function setupStylistPortalEvents() {
  const portalBtn = document.getElementById('stylistPortalBtn');
  const mobilePortalBtn = document.getElementById('mobileStylistPortalBtn');
  if (portalBtn) portalBtn.onclick = openStylistPortal;
  if (mobilePortalBtn) mobilePortalBtn.onclick = openStylistPortal;
}

function switchStylistTab(tabId) {
  document.querySelectorAll('.stylist-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });
  document.querySelectorAll('.stylist-tab-content').forEach(content => {
    content.classList.toggle('active', content.id === tabId);
  });
}

function loadStylistPortalData() {
  renderStylistBookingsTable();
  renderStylistHoursForm();
  renderBlockedDatesList();
  renderStylistSettingsForm();
}

function renderStylistBookingsTable(filterQuery = '') {
  const tbody = document.getElementById('stylistBookingsTableBody');
  const countBadge = document.getElementById('stylistBookingCount');
  if (!tbody) return;

  const bookings = getStoredBookings();
  if (countBadge) countBadge.textContent = bookings.length;

  let filtered = bookings;
  if (filterQuery) {
    const q = filterQuery.toLowerCase();
    filtered = bookings.filter(b => 
      b.client.fullName.toLowerCase().includes(q) ||
      b.id.toLowerCase().includes(q) ||
      b.client.phone.includes(q) ||
      b.service.title.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" class="text-center p-4 text-muted">
          No bookings found. Click "Load Sample Bookings" above to preview realistic client appointments!
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(b => `
    <tr>
      <td><strong>${b.id}</strong></td>
      <td>
        <strong>${b.client.fullName}</strong><br>
        <small class="text-muted">${b.client.phone} • ${b.client.preferredContact}</small>
      </td>
      <td>
        <strong>${b.service.title}</strong><br>
        <small class="text-muted">${b.customization.lengthOption}, ${b.customization.sizeOption}</small>
        ${b.customization.inspoImageData ? '<br><a href="#" onclick="openLightbox(\'' + b.customization.inspoImageData + '\', \'Client Inspiration Photo\'); return false;" class="text-primary text-sm"><i class="fa-solid fa-image"></i> View Inspo Photo</a>' : ''}
      </td>
      <td>
        <strong>${b.schedule.date}</strong><br>
        <span class="text-muted">${b.schedule.timeSlot}</span>
      </td>
      <td>
        <span class="text-success">Paid: $${b.payment.depositPaid}</span><br>
        <small>Due: $${b.payment.balanceDue}</small>
      </td>
      <td>
        <span class="status-badge ${b.status.toLowerCase()}">${b.status}</span>
      </td>
      <td>
        <div style="display:flex; gap:6px;">
          ${b.status !== 'Completed' ? `<button class="btn btn-outline btn-sm" onclick="updateBookingStatus('${b.id}', 'Completed')" title="Mark as Done"><i class="fa-solid fa-check"></i></button>` : ''}
          ${b.status !== 'Cancelled' ? `<button class="btn btn-outline btn-sm text-danger" onclick="updateBookingStatus('${b.id}', 'Cancelled')" title="Cancel Appointment"><i class="fa-solid fa-xmark"></i></button>` : ''}
        </div>
      </td>
    </tr>
  `).join('');
}

function filterStylistBookings() {
  const query = document.getElementById('bookingSearchInput')?.value.trim();
  renderStylistBookingsTable(query);
}

function updateBookingStatus(bookingId, newStatus) {
  const bookings = getStoredBookings();
  const idx = bookings.findIndex(b => b.id === bookingId);
  if (idx !== -1) {
    bookings[idx].status = newStatus;
    saveStoredBookings(bookings);
    renderStylistBookingsTable();
    showToast(`Booking ${bookingId} marked as ${newStatus}`, 'info');
  }
}

function populateSampleBookings() {
  const sampleBookings = [
    {
      id: 'HBL-2026-9012',
      createdAt: new Date().toISOString(),
      status: 'Confirmed',
      client: {
        fullName: 'Keisha Wright',
        email: 'keisha.w@example.com',
        phone: '(416) 555-8921',
        preferredContact: 'SMS',
        clientStatus: 'Returning Client'
      },
      service: {
        id: 'knotless-braids',
        title: 'Knotless Braids',
        basePrice: 180,
        durationText: '4.5 Hours',
        durationMinutes: 270
      },
      customization: {
        lengthOption: 'Waist Length (+$30)',
        sizeOption: 'Medium / Classic',
        addons: [{ name: 'Bohemian Curls', price: 45 }],
        hairColor: '#1B - Natural Black',
        extensionSupply: 'Stylist to Provide Hair',
        inspoImageData: null,
        allergies: 'None'
      },
      schedule: {
        date: formatDateString(calCurrentYear, calCurrentMonth + 1, 15),
        timeSlot: '09:00 AM',
        startMinutes: 540,
        endMinutes: 810
      },
      payment: {
        total: 255,
        depositPaid: 76,
        balanceDue: 179,
        method: 'Visa •••• 4242',
        status: 'Deposit Verified'
      }
    },
    {
      id: 'HBL-2026-7834',
      createdAt: new Date().toISOString(),
      status: 'Confirmed',
      client: {
        fullName: 'Nia Campbell',
        email: 'nia.c@example.com',
        phone: '(416) 555-4389',
        preferredContact: 'WhatsApp',
        clientStatus: 'First-Time Client'
      },
      service: {
        id: 'cornrows',
        title: 'Stitch & Fulani Cornrows',
        basePrice: 60,
        durationText: '1.5 Hours',
        durationMinutes: 90
      },
      customization: {
        lengthOption: 'Mid-Back Length',
        sizeOption: 'Classic',
        addons: [{ name: 'Beads & Gold Cuffs', price: 15 }],
        hairColor: '#27 - Honey Blonde',
        extensionSupply: 'Client Bringing Own Hair',
        inspoImageData: null,
        allergies: 'Sensitive edges'
      },
      schedule: {
        date: formatDateString(calCurrentYear, calCurrentMonth + 1, 18),
        timeSlot: '01:00 PM',
        startMinutes: 780,
        endMinutes: 870
      },
      payment: {
        total: 75,
        depositPaid: 22,
        balanceDue: 53,
        method: 'Mastercard •••• 8821',
        status: 'Deposit Verified'
      }
    }
  ];

  const existing = getStoredBookings();
  const merged = [...sampleBookings, ...existing];
  saveStoredBookings(merged);
  renderStylistBookingsTable();
  showToast('Sample realistic bookings populated!', 'success');
}

function exportBookingsCSV() {
  const bookings = getStoredBookings();
  if (bookings.length === 0) {
    showToast('No bookings to export.', 'error');
    return;
  }

  const headers = ['Booking ID', 'Status', 'Client Name', 'Phone', 'Email', 'Hairstyle', 'Length & Size', 'Date', 'Time', 'Total ($)', 'Deposit Paid ($)', 'Balance Due ($)'];
  const rows = bookings.map(b => [
    b.id,
    b.status,
    `"${b.client.fullName}"`,
    `"${b.client.phone}"`,
    `"${b.client.email}"`,
    `"${b.service.title}"`,
    `"${b.customization.lengthOption} / ${b.customization.sizeOption}"`,
    b.schedule.date,
    b.schedule.timeSlot,
    b.payment.total,
    b.payment.depositPaid,
    b.payment.balanceDue
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `HairByLeelah_Bookings_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Stylist Hours Configuration Form
function renderStylistHoursForm() {
  const container = document.getElementById('stylistDaysConfigList');
  if (!container) return;

  const settings = getStoredSettings();
  const days = [0, 1, 2, 3, 4, 5, 6];

  container.innerHTML = days.map(idx => {
    const d = settings.workingHours[idx];
    return `
      <div class="day-row-config">
        <label class="day-toggle-label">
          <input type="checkbox" id="dayCheck_${idx}" ${d.enabled ? 'checked' : ''}>
          <span>${d.name}</span>
        </label>
        <div class="day-time-inputs">
          <label>Opens:</label>
          <input type="time" id="dayStart_${idx}" value="${d.start}">
          <label>Closes:</label>
          <input type="time" id="dayEnd_${idx}" value="${d.end}">
        </div>
      </div>
    `;
  }).join('');
}

function saveStylistHours(event) {
  event.preventDefault();
  const settings = getStoredSettings();

  for (let idx = 0; idx <= 6; idx++) {
    const chk = document.getElementById(`dayCheck_${idx}`);
    const start = document.getElementById(`dayStart_${idx}`);
    const end = document.getElementById(`dayEnd_${idx}`);

    if (settings.workingHours[idx]) {
      settings.workingHours[idx].enabled = chk?.checked || false;
      settings.workingHours[idx].start = start?.value || '09:00';
      settings.workingHours[idx].end = end?.value || '18:00';
    }
  }

  saveStoredSettings(settings);
  renderHoursListOnPage();
  showToast('Working hours successfully updated in local storage!', 'success');
}

// Block Holidays / Personal Days Management
function renderBlockedDatesList() {
  const ul = document.getElementById('blockedDatesList');
  if (!ul) return;

  const blocked = getStoredBlockedDates();
  if (blocked.length === 0) {
    ul.innerHTML = '<li class="text-muted p-2">No dates currently blocked.</li>';
    return;
  }

  ul.innerHTML = blocked.map((item, idx) => `
    <li class="blocked-item">
      <span><strong>${item.date}</strong> &bull; ${item.reason || 'Personal Day'}</span>
      <button type="button" class="btn btn-outline btn-sm text-danger" onclick="removeBlockedDate(${idx})">
        <i class="fa-solid fa-trash"></i>
      </button>
    </li>
  `).join('');
}

function addBlockedDate() {
  const dateInput = document.getElementById('blockDateInput');
  const reasonInput = document.getElementById('blockReasonInput');
  const dateVal = dateInput?.value;
  const reasonVal = reasonInput?.value.trim() || 'Stylist Off / Holiday';

  if (!dateVal) {
    showToast('Please select a date to block.', 'error');
    return;
  }

  const blocked = getStoredBlockedDates();
  blocked.push({ date: dateVal, reason: reasonVal });
  saveStoredBlockedDates(blocked);

  dateInput.value = '';
  reasonInput.value = '';
  renderBlockedDatesList();
  showToast(`Blocked date ${dateVal} from booking calendar.`, 'success');
}

function removeBlockedDate(index) {
  const blocked = getStoredBlockedDates();
  blocked.splice(index, 1);
  saveStoredBlockedDates(blocked);
  renderBlockedDatesList();
  showToast('Blocked date removed.', 'info');
}

// Buffer & General Settings Form
function renderStylistSettingsForm() {
  const settings = getStoredSettings();
  const bufferSelect = document.getElementById('prepBufferSelect');
  const depositSelect = document.getElementById('depositPercentSelect');
  const addressInput = document.getElementById('stylistAddressInput');

  if (bufferSelect) bufferSelect.value = settings.prepBufferMinutes || '30';
  if (depositSelect) depositSelect.value = settings.depositPercent || '30';
  if (addressInput) addressInput.value = settings.studioAddress || DEFAULT_STYLIST_SETTINGS.studioAddress;
}

function saveStylistSettings(event) {
  event.preventDefault();
  const settings = getStoredSettings();
  const bufferSelect = document.getElementById('prepBufferSelect');
  const depositSelect = document.getElementById('depositPercentSelect');
  const addressInput = document.getElementById('stylistAddressInput');

  settings.prepBufferMinutes = parseInt(bufferSelect?.value || '30', 10);
  settings.depositPercent = parseInt(depositSelect?.value || '30', 10);
  settings.studioAddress = addressInput?.value.trim() || DEFAULT_STYLIST_SETTINGS.studioAddress;

  saveStoredSettings(settings);
  showToast('Settings saved to local storage.', 'success');
}

function clearAllDemoData() {
  if (confirm('Are you sure you want to reset all saved bookings, reviews, and custom settings back to initial defaults?')) {
    localStorage.removeItem('hbl_bookings');
    localStorage.removeItem('hbl_settings');
    localStorage.removeItem('hbl_blocked_dates');
    localStorage.removeItem('hbl_reviews');
    showToast('All local storage data has been reset to defaults.', 'info');
    loadStylistPortalData();
    renderReviewsGrid();
  }
}

// =============================================================================
// 13. REVIEWS & TESTIMONIAL SUBMISSION
// =============================================================================

function openReviewModal() {
  const modal = document.getElementById('reviewModal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeReviewModal() {
  const modal = document.getElementById('reviewModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function setupStarRatingPicker() {
  const stars = document.querySelectorAll('.star-pick');
  const ratingInput = document.getElementById('revRatingVal');

  stars.forEach(star => {
    star.addEventListener('click', () => {
      const rating = parseInt(star.dataset.rating, 10);
      if (ratingInput) ratingInput.value = rating;

      stars.forEach(s => {
        const sVal = parseInt(s.dataset.rating, 10);
        s.classList.toggle('active', sVal <= rating);
      });
    });
  });
}

function handleReviewSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('revClientName')?.value.trim();
  const service = document.getElementById('revService')?.value.trim();
  const rating = parseInt(document.getElementById('revRatingVal')?.value || '5', 10);
  const comment = document.getElementById('revComment')?.value.trim();

  if (!name || !service || !comment) {
    showToast('Please complete all review fields.', 'error');
    return;
  }

  const newRev = {
    name,
    service,
    rating,
    date: 'Just now',
    comment
  };

  const reviews = getStoredReviews();
  reviews.unshift(newRev);
  saveStoredReviews(reviews);

  renderReviewsGrid();
  closeReviewModal();
  document.getElementById('newReviewForm')?.reset();
  showToast('Thank you! Your review has been saved.', 'success');
}

// =============================================================================
// 14. POLICIES MODAL, LIGHTBOX & CONTACT FORM
// =============================================================================

function openPolicyModal() {
  const modal = document.getElementById('policyModal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closePolicyModal() {
  const modal = document.getElementById('policyModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function openLightbox(imageUrl, title) {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');
  if (!modal || !img) return;

  img.src = imageUrl;
  if (caption) caption.textContent = title;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(event) {
  if (event && event.target.tagName === 'IMG') return; // Don't close if clicking image
  const modal = document.getElementById('lightboxModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function handleContactSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('cName')?.value.trim();
  showToast(`Thank you ${name}! Leelah will reply to your inquiry shortly.`, 'success');
  event.target.reset();
}

// Mobile Nav Drawer Toggle
function setupMobileNav() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const closeBtn = document.getElementById('closeMobileNavBtn');
  const drawer = document.getElementById('mobileNavDrawer');
  const overlay = document.getElementById('drawerOverlay');

  function openMenu() {
    drawer?.classList.add('open');
    overlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer?.classList.remove('open');
    overlay?.classList.remove('active');
    document.body.style.overflow = '';
  }

  menuBtn?.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// =============================================================================
// 15. HELPER UTILITIES: TOASTS, DATE & TIME FORMATTERS
// =============================================================================

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const icon = type === 'success' ? 'fa-circle-check' : (type === 'error' ? 'fa-circle-exclamation' : 'fa-bell');
  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function formatDateString(year, month, day) {
  const m = month < 10 ? `0${month}` : `${month}`;
  const d = day < 10 ? `0${day}` : `${day}`;
  return `${year}-${m}-${d}`;
}

function parseTimeToMinutes(timeStr) {
  if (!timeStr) return 0;
  const parts = timeStr.split(':');
  return parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
}

function formatMinutesTo12h(totalMinutes) {
  let hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 should be 12
  const mStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
  return `${hours}:${mStr} ${ampm}`;
}

function formatTime12h(time24) {
  if (!time24) return '';
  const [h, m] = time24.split(':');
  let hour = parseInt(h, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 || 12;
  return `${hour}:${m} ${ampm}`;
}

function formatTimeTo24h(time12) {
  if (!time12) return '09:00';
  const parts = time12.split(' ');
  const [h, m] = parts[0].split(':');
  let hour = parseInt(h, 10);
  if (parts[1] === 'PM' && hour < 12) hour += 12;
  if (parts[1] === 'AM' && hour === 12) hour = 0;
  const hStr = hour < 10 ? `0${hour}` : `${hour}`;
  return `${hStr}:${m}`;
}

function formatMinutesToHours(minutes) {
  const hrs = Math.floor(minutes / 60);
  const remMin = minutes % 60;
  if (remMin === 0) return `${hrs} Hours`;
  return `${hrs} Hours ${remMin} mins`;
}

