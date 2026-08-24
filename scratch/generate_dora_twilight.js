const fs = require('fs');
const crypto = require('crypto');

function genUUID() {
    const bytes = crypto.randomBytes(16);
    bytes[6] = (bytes[6] & 0x0f) | 0x40; // version 4
    bytes[8] = (bytes[8] & 0x3f) | 0x80; // variant 10
    const hex = bytes.toString('hex');
    return [
        hex.substring(0, 8),
        hex.substring(8, 12),
        hex.substring(12, 16),
        hex.substring(16, 20),
        hex.substring(20, 32)
    ].join('-');
}

const baseTj = JSON.parse(fs.readFileSync('twilight.json', 'utf8'));

baseTj.name = {
    "ar": "درة السيارة (Dora Cars)",
    "en": "Dora Cars Universal"
};
baseTj.repository = "https://github.com/dortalsiarh-cloud/dora-cars";
baseTj.author_email = "yahya9031@gmail.com";
baseTj.description = {
    "ar": "ثيم عصري فائق الأناقة والسرعة للمتاجر الإلكترونية في سلة، يدعم تخصيص الهوية وركائز الثقة العائمة والبحث التفاعلي الذكي وكافة خيارات الدفع والشحن.",
    "en": "Modern, elegant, high-performance universal theme for Salla stores."
};

// Fix settings[0] keys
const s0_opt0 = genUUID();
const s0_opt1 = genUUID();
baseTj.settings[0].options[0].key = s0_opt0;
baseTj.settings[0].options[1].key = s0_opt1;
baseTj.settings[0].selected = [
    {
        "label": "اظهار الصورة كاملةً في المنتصف (Contain)",
        "value": "contain",
        "key": s0_opt1
    }
];

const cairoUUID = genUUID();

const customComponents = [
    // 1. Store Identity & Slogan Hero Banner
    {
        "key": genUUID(),
        "title": {
            "en": "Store Identity & Trust Banner",
            "ar": "بانر هوية المتجر وركائز الثقة المتطورة"
        },
        "icon": "sicon-image",
        "path": "home.store-identity-banner",
        "image": "https://cdn.salla.network/images/themes/components/home/enhanced-slider.png",
        "is_default": true,
        "fields": [
            {
                "id": "store_title",
                "type": "string",
                "format": "text",
                "label": "اسم المتجر / العنوان الترحيبي",
                "value": "درة السيارة - وجهتك الأولى للأصالة والجودة",
                "multilanguage": true,
                "required": false,
                "key": genUUID()
            },
            {
                "id": "store_specialty",
                "type": "string",
                "format": "text",
                "label": "الشارة العلوية (Badge)",
                "value": "المتجر المعتمد الأول لقطع الغيار ومستلزمات السيارات",
                "multilanguage": true,
                "required": false,
                "key": genUUID()
            },
            {
                "id": "store_slogan",
                "type": "string",
                "format": "textarea",
                "label": "الوصف التعريفي والسلوجان (Slogan & Bio)",
                "value": "نوفر لك تشكيلة متكاملة من أجود قطع الغيار والمنتجات الأصلية والمضمونة بأفضل الأسعار وبخدمة شحن وتوصيل فوري لباب بيتك مع ضمان ذهبي.",
                "multilanguage": true,
                "required": false,
                "key": genUUID()
            },
            {
                "id": "bg_desktop",
                "type": "string",
                "format": "image",
                "label": "صورة خلفية البانر للكمبيوتر (Desktop Background)",
                "value": null,
                "required": false,
                "key": genUUID()
            },
            {
                "id": "bg_mobile",
                "type": "string",
                "format": "image",
                "label": "صورة خلفية البانر للجوال (Mobile Background)",
                "value": null,
                "required": false,
                "key": genUUID()
            },
            {
                "id": "bg_opacity",
                "type": "number",
                "format": "integer",
                "label": "درجة تعتيم الخلفية (0 إلى 100%)",
                "value": 15,
                "required": false,
                "minimum": 0,
                "maximum": 100,
                "key": genUUID()
            },
            {
                "id": "font_family",
                "type": "items",
                "format": "dropdown-list",
                "label": "نوع الخط المستخدم في البانر",
                "selected": [
                    {
                        "label": "خط كايو العصري (Cairo)",
                        "value": "cairo",
                        "key": cairoUUID
                    }
                ],
                "options": [
                    {
                        "label": "خط المتجر الافتراضي",
                        "value": "default",
                        "key": genUUID()
                    },
                    {
                        "label": "خط كايو العصري (Cairo)",
                        "value": "cairo",
                        "key": cairoUUID
                    },
                    {
                        "label": "خط تجوال الأنيق (Tajawal)",
                        "value": "tajawal",
                        "key": genUUID()
                    },
                    {
                        "label": "خط آي بي إم بليكس (IBM Plex Arabic)",
                        "value": "ibm",
                        "key": genUUID()
                    },
                    {
                        "label": "خط المراعي المتميز (Almarai)",
                        "value": "almarai",
                        "key": genUUID()
                    }
                ],
                "source": "Manual",
                "required": false,
                "key": genUUID()
            },
            {
                "id": "btn_text",
                "type": "string",
                "format": "text",
                "label": "نص الزر الرئيسي",
                "value": "تصفح كافة الأقسام والمنتجات",
                "multilanguage": true,
                "required": false,
                "key": genUUID()
            },
            {
                "id": "btn_url",
                "type": "string",
                "format": "text",
                "label": "رابط الزر الرئيسي",
                "value": "/categories",
                "required": false,
                "key": genUUID()
            },
            {
                "id": "shipping_url",
                "type": "string",
                "format": "text",
                "label": "رابط بطاقة الشحن والتوصيل الفوري",
                "value": "/shipping-policy",
                "required": false,
                "key": genUUID()
            },
            {
                "id": "guarantee_url",
                "type": "string",
                "format": "text",
                "label": "رابط بطاقة الأصالة والضمان والتقييمات",
                "value": "/guarantee-reviews",
                "required": false,
                "key": genUUID()
            },
            {
                "id": "returns_url",
                "type": "string",
                "format": "text",
                "label": "رابط بطاقة الإرجاع والاستبدال",
                "value": "/return-policy",
                "required": false,
                "key": genUUID()
            },
            {
                "id": "support_url",
                "type": "string",
                "format": "text",
                "label": "رابط صفحة الدعم الفني (اتركه فارغاً لفتح نافذة طلب القطع الذكية)",
                "value": null,
                "required": false,
                "key": genUUID()
            },
            {
                "id": "hyundai_phone",
                "type": "string",
                "format": "text",
                "label": "رقم واتساب قسم هيونداي (مثال: 9665xxxxxxxx)",
                "value": "966500000000",
                "required": false,
                "key": genUUID()
            },
            {
                "id": "kia_phone",
                "type": "string",
                "format": "text",
                "label": "رقم واتساب قسم كيا (مثال: 9665xxxxxxxx)",
                "value": "966500000000",
                "required": false,
                "key": genUUID()
            },
            {
                "id": "general_phone",
                "type": "string",
                "format": "text",
                "label": "رقم واتساب قسم المبيعات العامة وباقي الماركات",
                "value": "966500000000",
                "required": false,
                "key": genUUID()
            }
        ]
    },
    // 2. Interactive Discovery & Search Launchpad
    {
        "key": genUUID(),
        "title": {
            "en": "Interactive Discovery & Smart Search Hero",
            "ar": "محرك البحث التفاعلي ونافذة الاستفسار الذكية"
        },
        "icon": "sicon-search",
        "path": "home.speero-hero",
        "image": "https://cdn.salla.network/images/themes/components/home/main-links.png",
        "is_default": true,
        "fields": [
            {
                "id": "badge",
                "type": "string",
                "format": "text",
                "label": "الشارة التمهيدية",
                "value": "البحث الذكي والاستفسار الفوري",
                "multilanguage": true,
                "key": genUUID()
            },
            {
                "id": "title",
                "type": "string",
                "format": "text",
                "label": "العنوان الرئيسي",
                "value": "اعثر على قطعة الغيار المتوافقة بدقة",
                "multilanguage": true,
                "key": genUUID()
            },
            {
                "id": "title_highlight",
                "type": "string",
                "format": "text",
                "label": "النص المميز في العنوان",
                "value": "بأسرع وأسهل طريقة",
                "multilanguage": true,
                "key": genUUID()
            },
            {
                "id": "description",
                "type": "string",
                "format": "textarea",
                "label": "الوصف التوضيحي",
                "value": "تصفح آلاف القطع المتوافقة 100% مع سيارتك أو استفسر برقم الهيكل (VIN) مباشرة عبر واتساب مع خبرائنا الفنيين.",
                "multilanguage": true,
                "key": genUUID()
            },
            {
                "id": "bg_image",
                "type": "string",
                "format": "image",
                "label": "صورة خلفية البنر التفاعلي",
                "value": null,
                "key": genUUID()
            },
            {
                "id": "bg_color",
                "type": "string",
                "format": "color",
                "label": "لون الخلفية الأساسي",
                "value": "#061527",
                "key": genUUID()
            },
            {
                "id": "accent_color",
                "type": "string",
                "format": "color",
                "label": "لون التمييز والأزرار",
                "value": "#f59e0b",
                "key": genUUID()
            },
            {
                "id": "text_color",
                "type": "string",
                "format": "color",
                "label": "لون النصوص والعناوين",
                "value": "#ffffff",
                "key": genUUID()
            }
        ]
    },
    // 3. Payment Marquee
    {
        "key": genUUID(),
        "title": {
            "en": "Payment & Installment Methods Marquee",
            "ar": "شريط طرق الدفع والتقسيط المعتمدة"
        },
        "icon": "sicon-credit-card",
        "path": "home.speero-payment-marquee",
        "image": "https://cdn.salla.network/images/themes/components/home/enhanced-square-banners.png",
        "is_default": true,
        "fields": [
            {
                "id": "title",
                "type": "string",
                "format": "text",
                "label": "عنوان الشريط",
                "value": "طرق دفع آمنة 100% وتقسيط ميسر بدون فوائد",
                "multilanguage": true,
                "key": genUUID()
            },
            {
                "id": "bg_color",
                "type": "string",
                "format": "color",
                "label": "لون الخلفية",
                "value": "#0b192c",
                "key": genUUID()
            },
            {
                "id": "payment_methods",
                "type": "collection",
                "format": "collection",
                "label": "وسائل الدفع المعروضة",
                "item_label": "وسيلة دفع",
                "fields": [
                    {
                        "id": "payment_methods.name",
                        "type": "string",
                        "format": "text",
                        "label": "اسم وسيلة الدفع",
                        "value": "مدى Mada",
                        "required": true,
                        "key": genUUID()
                    },
                    {
                        "id": "payment_methods.icon",
                        "type": "string",
                        "format": "image",
                        "label": "أيقونة وسيلة الدفع (SVG أو PNG)",
                        "value": null,
                        "required": false,
                        "key": genUUID()
                    },
                    {
                        "id": "payment_methods.description",
                        "type": "string",
                        "format": "text",
                        "label": "وصف العرض أو الميزة",
                        "value": "دفع آمن ومدعوم",
                        "required": false,
                        "key": genUUID()
                    }
                ],
                "key": genUUID()
            }
        ]
    },
    // 4. Partner Brands Grid
    {
        "key": genUUID(),
        "title": {
            "en": "Brands & Manufacturers Grid",
            "ar": "شبكة الماركات ومصنعي السيارات"
        },
        "icon": "sicon-award-ribbon",
        "path": "home.speero-brands",
        "image": "https://cdn.salla.network/images/themes/components/home/brands.png",
        "is_default": true,
        "fields": [
            {
                "id": "badge",
                "type": "string",
                "format": "text",
                "label": "الشارة التمهيدية",
                "value": "الماركات المعتمدة",
                "multilanguage": true,
                "key": genUUID()
            },
            {
                "id": "title",
                "type": "string",
                "format": "text",
                "label": "العنوان الرئيسي",
                "value": "تسوق قطع الغيار حسب ماركة سيارتك",
                "multilanguage": true,
                "key": genUUID()
            },
            {
                "id": "description",
                "type": "string",
                "format": "textarea",
                "label": "الوصف",
                "value": "نوفر قطع غيار أصلية وتجارية درجة أولى معتمدة لأشهر صانعي السيارات.",
                "multilanguage": true,
                "key": genUUID()
            },
            {
                "id": "bg_image",
                "type": "string",
                "format": "image",
                "label": "صورة خلفية القسم",
                "value": null,
                "key": genUUID()
            },
            {
                "id": "bg_color",
                "type": "string",
                "format": "color",
                "label": "لون خلفية القسم",
                "value": "#061527",
                "key": genUUID()
            },
            {
                "id": "brands",
                "type": "collection",
                "format": "collection",
                "label": "الماركات المعروضة",
                "item_label": "ماركة",
                "fields": [
                    {
                        "id": "brands.name",
                        "type": "string",
                        "format": "text",
                        "label": "اسم الماركة",
                        "value": "تويوتا Toyota",
                        "required": true,
                        "key": genUUID()
                    },
                    {
                        "id": "brands.logo",
                        "type": "string",
                        "format": "image",
                        "label": "شعار الماركة PNG شفاف",
                        "value": null,
                        "required": false,
                        "key": genUUID()
                    },
                    {
                        "id": "brands.url",
                        "type": "string",
                        "format": "text",
                        "label": "رابط قطع الغيار",
                        "value": "/products?brand=toyota",
                        "required": false,
                        "key": genUUID()
                    }
                ],
                "key": genUUID()
            }
        ]
    },
    // 5. Visual Categories
    {
        "key": genUUID(),
        "title": {
            "en": "Visual Categories with Zoom Animation",
            "ar": "تصنيفات وأقسام المتجر المصورة مع تأثير التكبير"
        },
        "icon": "sicon-layout-grid-rearrange",
        "path": "home.speero-categories",
        "image": "https://cdn.salla.network/images/themes/components/home/main-links.png",
        "is_default": true,
        "fields": [
            {
                "id": "badge",
                "type": "string",
                "format": "text",
                "label": "الشارة التمهيدية",
                "value": "أقسام المتجر",
                "multilanguage": true,
                "key": genUUID()
            },
            {
                "id": "title",
                "type": "string",
                "format": "text",
                "label": "العنوان الرئيسي",
                "value": "تصفح قطع الغيار حسب التصنيف الفني",
                "multilanguage": true,
                "key": genUUID()
            },
            {
                "id": "description",
                "type": "string",
                "format": "textarea",
                "label": "الوصف",
                "value": "اختر القسم الفني المطلوب للوصول المباشر إلى قطع الغيار المناسبة.",
                "multilanguage": true,
                "key": genUUID()
            },
            {
                "id": "bg_color",
                "type": "string",
                "format": "color",
                "label": "لون خلفية القسم",
                "value": "#061527",
                "key": genUUID()
            },
            {
                "id": "categories",
                "type": "collection",
                "format": "collection",
                "label": "الأقسام المخصصة",
                "item_label": "قسم",
                "fields": [
                    {
                        "id": "categories.name",
                        "type": "string",
                        "format": "text",
                        "label": "اسم القسم",
                        "value": "فلاتر وزيوت",
                        "required": true,
                        "key": genUUID()
                    },
                    {
                        "id": "categories.image",
                        "type": "string",
                        "format": "image",
                        "label": "صورة / أيقونة القسم PNG",
                        "value": null,
                        "required": false,
                        "key": genUUID()
                    },
                    {
                        "id": "categories.url",
                        "type": "string",
                        "format": "text",
                        "label": "رابط القسم",
                        "value": "/categories",
                        "required": false,
                        "key": genUUID()
                    }
                ],
                "key": genUUID()
            }
        ]
    },
    // 6. Promotional Offers Banner
    {
        "key": genUUID(),
        "title": {
            "en": "Special Offers & Savings Banner",
            "ar": "بنر العروض وباقات الصيانة الدورية"
        },
        "icon": "sicon-discount-calculator",
        "path": "home.speero-offers-banner",
        "image": "https://cdn.salla.network/images/themes/components/home/enhanced-square-banners.png",
        "is_default": true,
        "fields": [
            {
                "id": "badge",
                "type": "string",
                "format": "text",
                "label": "الشارة التمهيدية",
                "value": "عروض لفترة محدودة",
                "multilanguage": true,
                "key": genUUID()
            },
            {
                "id": "title",
                "type": "string",
                "format": "text",
                "label": "العنوان الرئيسي",
                "value": "باقات صيانة موفرة لسيارتك",
                "multilanguage": true,
                "key": genUUID()
            },
            {
                "id": "description",
                "type": "string",
                "format": "textarea",
                "label": "الوصف",
                "value": "احصل على خصومات حصرية عند شراء باقات الزيوت والفلاتر والأقمشة مع ضمان التوافق 100%.",
                "multilanguage": true,
                "key": genUUID()
            },
            {
                "id": "btn_text",
                "type": "string",
                "format": "text",
                "label": "نص الزر",
                "value": "تصفح عروض التوفير",
                "multilanguage": true,
                "key": genUUID()
            },
            {
                "id": "image",
                "type": "string",
                "format": "image",
                "label": "صورة خلفية البنر (اختياري)",
                "value": null,
                "key": genUUID()
            },
            {
                "id": "banner_bg",
                "type": "string",
                "format": "color",
                "label": "لون خلفية بطاقة البنر",
                "value": "#0f233a",
                "key": genUUID()
            },
            {
                "id": "accent_color",
                "type": "string",
                "format": "color",
                "label": "لون زر العرض",
                "value": "#f59e0b",
                "key": genUUID()
            },
            {
                "id": "bg_color",
                "type": "string",
                "format": "color",
                "label": "لون خلفية القسم الخارجي",
                "value": "#061527",
                "key": genUUID()
            }
        ]
    }
];

// Ensure all base components also have is_default: true
baseTj.components.forEach(c => {
    c.is_default = true;
});

baseTj.components = [
    ...customComponents,
    ...baseTj.components
];

fs.writeFileSync('twilight.json', JSON.stringify(baseTj, null, 4), 'utf8');
console.log('Successfully generated clean Dora Cars twilight.json with', baseTj.components.length, 'components.');
