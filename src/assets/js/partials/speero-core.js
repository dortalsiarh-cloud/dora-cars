/**
 * ============================================================================
 * SPEERO CORE ENGINE (Salla Twilight v2)
 * ============================================================================
 * Comprehensive Saudi & GCC Automotive Parts Finder & Vehicle Selector
 * 35+ Manufacturers, 300+ Models, 1995-2026 Year Range, WhatsApp VIN Quotes
 */

(function () {
    'use strict';

    // Comprehensive GCC & Saudi Automotive Dataset
    const SPEERO_VEHICLES_DB = {
        toyota: {
            name: 'تويوتا (Toyota)',
            models: [
                'كامري (Camry)', 'كورولا (Corolla)', 'هايلوكس (Hilux)', 'لاندكروزر (Land Cruiser)',
                'يارس (Yaris)', 'راف فور (RAV4)', 'برادو (Prado)', 'فورتشنر (Fortuner)',
                'إف جي كروزر (FJ Cruiser)', 'أفالون (Avalon)', 'إنوفا (Innova)', 'راش (Rush)',
                'هايلاندر (Highlander)', 'فيلوز (Veloz)', 'كراون (Crown)', 'رايز (Raize)',
                'أوربان كروزر (Urban Cruiser)', 'سوبرا (Supra)', 'هايس (HiAce)', 'كوستر (Coaster)'
            ]
        },
        lexus: {
            name: 'لكزس (Lexus)',
            models: [
                'ES', 'LS', 'IS', 'GS', 'LX 600 / LX 570', 'RX', 'NX', 'GX 460 / GX 550',
                'UX', 'LC 500', 'RC', 'TX'
            ]
        },
        hyundai: {
            name: 'هيونداي (Hyundai)',
            models: [
                'إلنترا (Elantra)', 'سوناتا (Sonata)', 'أكسنت (Accent)', 'توسان (Tucson)',
                'سنتافي (Santa Fe)', 'أزيرا (Azera)', 'كريتا (Creta)', 'باليسيد (Palisade)',
                'كونا (Kona)', 'ستاريا (Staria)', 'كاستو (Custo)', 'فينيو (Venue)', 'H1 فانيت'
            ]
        },
        kia: {
            name: 'كيا (Kia)',
            models: [
                'سيراتو / K3 (Cerato)', 'K5 / أوبتيما (Optima)', 'سبورتاج (Sportage)', 'ريو (Rio)',
                'سورينتو (Sorento)', 'بيجاس (Pegas)', 'سيلتوس (Seltos)', 'تيلورايد (Telluride)',
                'كارنفال (Carnival)', 'سونيت (Sonet)', 'K8', 'K900', 'ستينجر (Stinger)', 'كارنز (Carens)'
            ]
        },
        genesis: {
            name: 'جينيسيس (Genesis)',
            models: ['G70', 'G80', 'G90', 'GV70', 'GV80']
        },
        nissan: {
            name: 'نيسان (Nissan)',
            models: [
                'صني (Sunny)', 'ألتيما (Altima)', 'باترول بطل الدروب (Patrol)', 'باترol سفاري (Patrol Safari)',
                'ماكسيما (Maxima)', 'إكس تريل (X-Trail)', 'باثفايندر (Pathfinder)', 'كيكس (Kicks)',
                'نافارا (Navara)', 'قاشقاي (Qashqai)', 'أورفان (Urvan)', 'سنترا (Sentra)', 'Z370 / Z400'
            ]
        },
        infiniti: {
            name: 'إنفينيتي (Infiniti)',
            models: ['Q50', 'Q60', 'Q70', 'QX50', 'QX55', 'QX60', 'QX80']
        },
        ford: {
            name: 'فورد (Ford)',
            models: [
                'تورس (Taurus)', 'إف 150 (F-150)', 'إكسبلورر (Explorer)', 'إيدج (Edge)',
                'إكسبيديشن (Expedition)', 'تيريتوري (Territory)', 'إسكورت (Escort)',
                'إيفرست (Everest)', 'موستانج (Mustang)', 'رينجر (Ranger)', 'برونكو (Bronco)'
            ]
        },
        chevrolet: {
            name: 'شيفروليه (Chevrolet)',
            models: [
                'تاهو (Tahoe)', 'سوبربان (Suburban)', 'سلفرادو (Silverado)', 'كابريس (Caprice)',
                'لومينا (Lumina)', 'ماليبو (Malibu)', 'كابتيفا (Captiva)', 'كروز (Cruze)',
                'ترافيرس (Traverse)', 'بليزر (Blazer)', 'كامارو (Camaro)', 'كورفيت (Corvette)',
                'جرووف (Groove)', 'سبارك (Spark)', 'أوبترا (Optra)'
            ]
        },
        gmc: {
            name: 'جي إم سي (GMC)',
            models: [
                'يوكن / يوكن دينالي (Yukon)', 'سييرا (Sierra)', 'تيرين (Terrain)',
                'أكاديا (Acadia)', 'سافانا (Savana)', 'كانيون (Canyon)'
            ]
        },
        cadillac: {
            name: 'كاديلاك (Cadillac)',
            models: ['إسكاليد (Escalade)', 'CT4', 'CT5', 'CT6', 'XT4', 'XT5', 'XT6']
        },
        honda: {
            name: 'هوندا (Honda)',
            models: [
                'أكورد (Accord)', 'سيفيك (Civic)', 'CR-V', 'بايلوت (Pilot)',
                'سيتي (City)', 'HR-V', 'أوديسي (Odyssey)', 'ZR-V'
            ]
        },
        mazda: {
            name: 'مازدا (Mazda)',
            models: [
                'مازدا 6 (Mazda 6)', 'مازدا 3 (Mazda 3)', 'CX-9', 'CX-5',
                'CX-30', 'CX-60', 'CX-90', 'BT-50'
            ]
        },
        mitsubishi: {
            name: 'ميتسوبيشي (Mitsubishi)',
            models: [
                'باجيرو (Pajero)', 'L200 ونيت', 'أوتلاندر (Outlander)', 'إكليبس كروس (Eclipse Cross)',
                'إكسباندر (Xpander)', 'أتراج (Attrage)', 'ميراج (Mirage)', 'مونتيرو سبورت (Montero Sport)'
            ]
        },
        suzuki: {
            name: 'سوزوكي (Suzuki)',
            models: [
                'جيمني (Jimny)', 'سويفت (Swift)', 'ديزاير (Dzire)', 'جراند فيتارا (Grand Vitara)',
                'فيتارا (Vitara)', 'بالينو (Baleno)', 'إرتيجا (Ertiga)', 'فرونكس (Fronx)', 'سياز (Ciaz)'
            ]
        },
        isuzu: {
            name: 'إيسوزو (Isuzu)',
            models: ['ديماكس (D-Max)', 'إم يو إكس (Mu-X)', 'شاحنة إل إف آر (N-Series)']
        },
        changan: {
            name: 'شانجان (Changan)',
            models: [
                'CS95', 'CS85', 'CS75 Plus', 'CS35 Plus', 'إيدو بلس (Eado Plus)',
                'السفن (Alsvin)', 'هانتر ونيت (Hunter)', 'يوني تي (UNI-T)',
                'يوني كي (UNI-K)', 'يوني في (UNI-V)'
            ]
        },
        geely: {
            name: 'جيلي (Geely)',
            models: [
                'مونجارو (Monjaro)', 'توجيلا (Tugella)', 'كولراي (Coolray)',
                'أوكافانجو (Okavango)', 'إمجراند (Emgrand)', 'بريفيس (Preface)',
                'ستار راي (Starray)', 'أزكارا (Azkarra)'
            ]
        },
        mg: {
            name: 'إم جي (MG)',
            models: [
                'MG 5', 'MG 6', 'MG GT', 'MG ZS', 'MG RX5', 'MG RX8',
                'MG HS', 'MG ONE', 'MG Whale', 'MG T60 ونيت'
            ]
        },
        haval: {
            name: 'هافال (Haval)',
            models: ['H6', 'H9', 'جولايان (Jolion)', 'دارجو (Dargo)', 'H6 GT']
        },
        chery: {
            name: 'شيري (Chery)',
            models: [
                'تيجو 8 برو (Tiggo 8 Pro)', 'تيجو 7 برو (Tiggo 7 Pro)', 'تيجو 4 برو (Tiggo 4 Pro)',
                'تيجو 2 برو (Tiggo 2 Pro)', 'أريزو 8 (Arrizo 8)', 'أريزو 6 برو (Arrizo 6 Pro)'
            ]
        },
        jetour: {
            name: 'جيتور (Jetour)',
            models: ['داشينج (Dashing)', 'X70 Plus', 'X70', 'X90 Plus', 'T2 ترافيلر (Traveler)']
        },
        tank: {
            name: 'تانك (Tank)',
            models: ['تانك 300 (Tank 300)', 'تانك 500 (Tank 500)']
        },
        greatwall: {
            name: 'جريت وول (GWM)',
            models: ['باور (Poer)', 'وينجل 7 (Wingle 7)', 'وينجل 5 (Wingle 5)']
        },
        byd: {
            name: 'بي واي دي (BYD)',
            models: ['هان (Han)', 'تانغ (Tang)', 'سونغ بلس (Song Plus)', 'كين بلس (Qin Plus)', 'سيل (Seal)', 'أتو 3 (Atto 3)']
        },
        dodge: {
            name: 'دودج (Dodge)',
            models: ['تشارجر (Charger)', 'تشالنجر (Challenger)', 'دورانجو (Durango)', 'رام 1500 (RAM)']
        },
        jeep: {
            name: 'جيب (Jeep)',
            models: [
                'جراند شيروكي (Grand Cherokee)', 'رانجلر (Wrangler)', 'شيروكي (Cherokee)',
                'كومباس (Compass)', 'جلاديتور (Gladiator)', 'جراند واجونير (Grand Wagoneer)'
            ]
        },
        mercedes: {
            name: 'مرسيدس-بنز (Mercedes-Benz)',
            models: [
                'C-Class (C200/C300)', 'E-Class (E200/E300/E350)', 'S-Class (S450/S500/S580)',
                'G-Class (G63/G500)', 'GLE', 'GLC', 'GLS', 'A-Class', 'CLA', 'CLS'
            ]
        },
        bmw: {
            name: 'بي إم دبليو (BMW)',
            models: [
                'الفئة الثالثة (3-Series)', 'الفئة الخامسة (5-Series)', 'الفئة السابعة (7-Series)',
                'X5', 'X6', 'X7', 'X3', 'X1', 'الفئة الرابعة (4-Series)'
            ]
        },
        audi: {
            name: 'أودي (Audi)',
            models: ['A4', 'A6', 'A8', 'Q7', 'Q8', 'Q5', 'Q3', 'A5', 'A7']
        },
        volkswagen: {
            name: 'فولكس واجن (Volkswagen)',
            models: ['طوارق (Touareg)', 'تيجوان (Tiguan)', 'تيرامونت (Teramont)', 'باسات (Passat)', 'جولف (Golf)', 'تي-روك (T-Roc)']
        },
        porsche: {
            name: 'بورش (Porsche)',
            models: ['كايين (Cayenne)', 'باناميرا (Panamera)', 'ماكان (Macan)', '911', 'تايكان (Taycan)']
        },
        landrover: {
            name: 'لاند روفر (Land Rover)',
            models: [
                'رينج روفر (Range Rover Vogue)', 'رينج روفر سبورت (Sport)', 'ديفندر (Defender)',
                'فيلار (Velar)', 'إيفوك (Evoque)', 'ديسكفري (Discovery)'
            ]
        }
    };

    const STORAGE_KEY = 'speero_selected_vehicle';

    // Core Initialization
    function initSpeero() {
        initTabs();
        populateMakesDropdown();
        initMakeModelCascading();
        initSearchActions();
        initVinDirectWhatsApp();
        initStandaloneVinQuote();
        initActiveCarBar();
        initCarsInteractiveSlider();
    }

    // 7. Interactive Draggable & Continuous Cars Slider (Mouse Drag, Touch Swipe, Arrows)
    function initCarsInteractiveSlider() {
        const sections = document.querySelectorAll('[data-component="speero-cars-marquee"]');
        sections.forEach(section => {
            const track = section.querySelector('.speero-cars-marquee__track');
            if (!track) return;

            let isDown = false;
            let startX = 0;
            let scrollLeft = 0;
            let hasDragged = false;
            let isHovered = false;
            let autoScrollRaf = null;
            const scrollSpeed = 0.75; // pixels per frame

            // Auto-scroll loop
            function autoScroll() {
                if (!isHovered && !isDown) {
                    track.scrollLeft += (document.documentElement.dir === 'rtl' ? -scrollSpeed : scrollSpeed);
                    
                    // Infinite loop wrap check
                    const maxScroll = track.scrollWidth - track.clientWidth;
                    if (Math.abs(track.scrollLeft) >= maxScroll - 5) {
                        track.scrollLeft = 0;
                    }
                }
                autoScrollRaf = requestAnimationFrame(autoScroll);
            }
            autoScrollRaf = requestAnimationFrame(autoScroll);

            // Mouse Drag-to-Scroll
            track.addEventListener('mousedown', (e) => {
                isDown = true;
                hasDragged = false;
                track.classList.add('is-grabbing');
                startX = e.pageX - track.offsetLeft;
                scrollLeft = track.scrollLeft;
            });

            track.addEventListener('mouseleave', () => {
                isDown = false;
                isHovered = false;
                track.classList.remove('is-grabbing');
            });

            track.addEventListener('mouseenter', () => {
                isHovered = true;
            });

            window.addEventListener('mouseup', () => {
                if (isDown) {
                    isDown = false;
                    track.classList.remove('is-grabbing');
                }
            });

            track.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - track.offsetLeft;
                const walk = (x - startX) * 1.5; // Drag sensitivity
                if (Math.abs(walk) > 5) {
                    hasDragged = true;
                }
                track.scrollLeft = scrollLeft - walk;
            });

            // Prevent clicking links if user was dragging
            track.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', (e) => {
                    if (hasDragged) {
                        e.preventDefault();
                        e.stopPropagation();
                        hasDragged = false;
                    }
                });
            });

            // Touch events for mobile
            track.addEventListener('touchstart', () => {
                isHovered = true;
            }, { passive: true });

            track.addEventListener('touchend', () => {
                setTimeout(() => {
                    isHovered = false;
                }, 1500);
            }, { passive: true });

            // Nav Buttons (Prev / Next)
            const prevBtn = section.querySelector('.speero-cars-nav-prev');
            const nextBtn = section.querySelector('.speero-cars-nav-next');

            if (prevBtn) {
                prevBtn.addEventListener('click', () => {
                    const step = 280;
                    track.scrollBy({
                        left: document.documentElement.dir === 'rtl' ? step : -step,
                        behavior: 'smooth'
                    });
                });
            }

            if (nextBtn) {
                nextBtn.addEventListener('click', () => {
                    const step = 280;
                    track.scrollBy({
                        left: document.documentElement.dir === 'rtl' ? -step : step,
                        behavior: 'smooth'
                    });
                });
            }
        });
    }

    // 1. Tab Switching
    function initTabs() {
        const tabBtns = document.querySelectorAll('.speero-search-tab');
        if (!tabBtns.length) return;

        tabBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                const targetTab = this.dataset.tab;
                const container = this.closest('.speero-search-card');
                if (!container) return;

                container.querySelectorAll('.speero-search-tab').forEach(b => {
                    b.classList.remove('is-active');
                    b.setAttribute('aria-selected', 'false');
                });
                container.querySelectorAll('.speero-search-pane').forEach(p => {
                    p.classList.remove('is-active');
                });

                this.classList.add('is-active');
                this.setAttribute('aria-selected', 'true');
                const activePane = container.querySelector(`.speero-search-pane[data-pane="${targetTab}"]`);
                if (activePane) {
                    activePane.classList.add('is-active');
                }
            });
        });
    }

    // 2. Populate All Makes in Hero Dropdown
    function populateMakesDropdown() {
        const makeSelect = document.getElementById('speero-make-select');
        if (!makeSelect) return;

        // Clear existing except placeholder
        makeSelect.innerHTML = '<option value="">-- اختر ماركة السيارة --</option>';

        Object.keys(SPEERO_VEHICLES_DB).forEach(key => {
            const opt = document.createElement('option');
            opt.value = key;
            opt.textContent = SPEERO_VEHICLES_DB[key].name;
            makeSelect.appendChild(opt);
        });
    }

    // 3. Make -> Model Cascading Logic
    function initMakeModelCascading() {
        const makeSelect = document.getElementById('speero-make-select');
        const modelSelect = document.getElementById('speero-model-select');

        if (!makeSelect || !modelSelect) return;

        makeSelect.addEventListener('change', function () {
            const selectedMake = this.value;
            modelSelect.innerHTML = '<option value="">-- كافة الموديلات --</option>';

            if (selectedMake && SPEERO_VEHICLES_DB[selectedMake]) {
                modelSelect.disabled = false;
                SPEERO_VEHICLES_DB[selectedMake].models.forEach(model => {
                    const opt = document.createElement('option');
                    opt.value = model;
                    opt.textContent = model;
                    modelSelect.appendChild(opt);
                });
            } else {
                modelSelect.disabled = true;
                modelSelect.innerHTML = '<option value="">-- اختر الماركة أولاً --</option>';
            }
        });
    }

    // 4. Search and State Persistence
    function initSearchActions() {
        const searchBtn = document.getElementById('speero-btn-search-parts');
        if (searchBtn) {
            searchBtn.addEventListener('click', function () {
                const makeSelect = document.getElementById('speero-make-select');
                const modelSelect = document.getElementById('speero-model-select');
                const yearSelect = document.getElementById('speero-year-select');
                const catSelect = document.getElementById('speero-category-select');

                const make = makeSelect ? makeSelect.value : '';
                const model = modelSelect ? modelSelect.value : '';
                const year = yearSelect ? yearSelect.value : '';
                const category = catSelect ? catSelect.value : '';

                if (!make) {
                    if (window.salla && window.salla.notify) {
                        window.salla.notify.error('يرجى اختيار ماركة السيارة أولاً للبحث عن القطع المتوافقة');
                    } else {
                        alert('يرجى اختيار ماركة السيارة أولاً للبحث عن القطع المتوافقة');
                    }
                    return;
                }

                const vehicleData = {
                    make: make,
                    makeName: SPEERO_VEHICLES_DB[make] ? SPEERO_VEHICLES_DB[make].name : make,
                    model: model,
                    year: year,
                    savedAt: new Date().toISOString()
                };

                try {
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(vehicleData));
                } catch (e) {
                    console.warn('LocalStorage error:', e);
                }

                // Construct query URL
                const queryParts = [];
                if (make) queryParts.push(SPEERO_VEHICLES_DB[make] ? SPEERO_VEHICLES_DB[make].name.split(' ')[0] : make);
                if (model) queryParts.push(model.split(' ')[0]);
                if (year) queryParts.push(year);
                if (category && category !== 'all') queryParts.push(category);

                const finalQuery = encodeURIComponent(queryParts.join(' '));
                window.location.href = `/products?keyword=${finalQuery}`;
            });
        }

        // Direct OEM search button
        const oemBtn = document.getElementById('speero-btn-search-oem');
        const oemInput = document.getElementById('speero-oem-input');
        if (oemBtn && oemInput) {
            const doOemSearch = function () {
                const query = oemInput.value.trim();
                if (!query) {
                    if (window.salla && window.salla.notify) {
                        window.salla.notify.error('يرجى إدخال رقم القطعة');
                    }
                    return;
                }
                window.location.href = `/products?keyword=${encodeURIComponent(query)}`;
            };

            oemBtn.addEventListener('click', doOemSearch);
            oemInput.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') doOemSearch();
            });
        }
    }

    // 5. WhatsApp Direct VIN Quote Builder
    function initVinDirectWhatsApp() {
        const vinBtn = document.getElementById('speero-btn-submit-vin');
        if (!vinBtn) return;

        vinBtn.addEventListener('click', function () {
            const vinInput = document.getElementById('speero_vin_number');
            const brandInput = document.getElementById('speero_vin_brand');
            const partInput = document.getElementById('speero_vin_part');

            const vin = vinInput ? vinInput.value.trim() : '';
            const car = brandInput ? brandInput.value.trim() : '';
            const part = partInput ? partInput.value.trim() : '';

            if (!vin && !car) {
                if (window.salla && window.salla.notify) {
                    window.salla.notify.error('يرجى إدخال رقم الهيكل أو نوع السيارة للتسعير');
                } else {
                    alert('يرجى إدخال رقم الهيكل أو نوع السيارة للتسعير');
                }
                return;
            }

            const phone = this.dataset.whatsapp || '966500000000';
            const cleanPhone = phone.replace(/[^0-9]/g, '');

            const msgLines = [
                'السلام عليكم ورحمة الله،',
                'أود الاستفسار وطلب تسعيرة لقطع غيار بالبيانات التالية:',
                `*رقم الهيكل (VIN):* ${vin || 'غير محدد'}`,
                `*نوع وموديل السيارة:* ${car || 'غير محدد'}`,
                `*القطعة المطلوبة:* ${part || 'استفسار عام'}`,
                '----------------------------',
                'الرجاء إفادتي بالتوافر والتسعير والضمان. شكراً لكم.'
            ];

            const encodedMsg = encodeURIComponent(msgLines.join('\n'));
            window.open(`https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodedMsg}`, '_blank');
        });
    }

    // 5b. Standalone Dedicated VIN Form Quote Handler
    function initStandaloneVinQuote() {
        const btn = document.getElementById('speero-btn-submit-standalone-vin');
        if (!btn) return;

        btn.addEventListener('click', function () {
            const brand = document.getElementById('speero_standalone_vin_brand')?.value.trim() || '';
            const model = document.getElementById('speero_standalone_vin_model')?.value.trim() || '';
            const vin = document.getElementById('speero_standalone_vin_num')?.value.trim() || '';
            const part = document.getElementById('speero_standalone_vin_part')?.value.trim() || '';
            const name = document.getElementById('speero_standalone_vin_name')?.value.trim() || '';
            const phone = document.getElementById('speero_standalone_vin_phone')?.value.trim() || '';
            const notes = document.getElementById('speero_standalone_vin_notes')?.value.trim() || '';

            if (!brand || !model || !part) {
                if (window.salla && window.salla.notify) {
                    window.salla.notify.error('يرجى تعبئة ماركة السيارة والموديل واسم القطعة المطلوبة');
                } else {
                    alert('يرجى تعبئة ماركة السيارة والموديل واسم القطعة المطلوبة');
                }
                return;
            }

            let msg = '*طلب تسعيرة قطعة غيار برقم الهيكل (VIN)* 🚗🔧\n------------------------------------\n';
            msg += '🚗 *السيارة:* ' + brand + ' ' + model + '\n';
            if (vin) msg += '🔢 *رقم الهيكل VIN:* ' + vin + '\n';
            msg += '📦 *القطعة المطلوبة:* ' + part + '\n';
            if (name) msg += '👤 *الاسم:* ' + name + '\n';
            if (phone) msg += '📱 *الجوال:* ' + phone + '\n';
            if (notes) msg += '📝 *ملاحظات:* ' + notes + '\n';
            msg += '------------------------------------\nالرجاء إفادتي بالسعر والتوفر فوراً.';

            const rawPhone = this.getAttribute('data-whatsapp') || '966500000000';
            const cleanPhone = rawPhone.replace(/[^0-9]/g, '');
            window.open('https://api.whatsapp.com/send?phone=' + cleanPhone + '&text=' + encodeURIComponent(msg), '_blank');
        });
    }

    // 6. Active Saved Car Bar State
    function initActiveCarBar() {
        const carBar = document.getElementById('speero-active-car-bar');
        if (!carBar) return;

        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const data = JSON.parse(saved);
                const nameEl = document.getElementById('speero-active-car-name');
                if (nameEl && data.makeName) {
                    const details = [data.makeName, data.model, data.year].filter(Boolean).join(' - ');
                    nameEl.textContent = details;
                    carBar.classList.remove('hidden');
                }
            }
        } catch (e) {
            console.warn(e);
        }

        const resetBtn = document.getElementById('speero-btn-reset-car');
        if (resetBtn) {
            resetBtn.addEventListener('click', function () {
                try {
                    localStorage.removeItem(STORAGE_KEY);
                } catch (e) {}
                carBar.classList.add('hidden');
            });
        }
    }

    // Initialize on DOM load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSpeero);
    } else {
        initSpeero();
    }
})();
