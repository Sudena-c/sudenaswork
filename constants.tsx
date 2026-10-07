import { Project, Interest } from './types';

// The 5 curated projects featured in the Postcard Stack:
// 3 core projects + 2 internship projects
export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'MealMate',
    category: 'UI/UX',
    year: '2026',
    role: 'Product & UX Designer',
    duration: '6 Weeks',
    tools: ['Figma', 'Protopie', 'User Interviews', 'Systems Mapping'],
    coverImage: 'https://i.ibb.co/MkDmBbxP/Screenshot-2026-02-12-at-5-10-17-PM.png',
    heroVideo: 'https://res.cloudinary.com/dmtbtydp5/video/upload/v1775484102/mealmate_app_recording_vhx2tt.mp4',
    postcardNote: 'To anyone who has stood in front of an open fridge at 6 PM feeling that familiar dread: this one is for you.',
    postcardRotation: -1.8,
    shortDescription: 'A collaborative meal-planning platform that turns shared pantry anxiety into a playful collective ritual.',
    fullDescription: 'MealMate is a collaborative meal-planning platform designed for people sharing a household. Users create individual profiles by adding food preferences, dietary choices, and commonly available groceries at home.',
    problemHeadline: 'Every day, millions of people ask one small question: "What should I cook today?" That question sounds simple — but it creates stress, wasted food, and unhealthy choices.',
    problemBody: 'People living alone or in shared households often struggle to decide what to cook each day. Limited awareness of available groceries, differing food preferences, and lack of coordination between household members make daily meal decisions mentally exhausting and inefficient.',
    process: [
      {
        id: 'ps1-1',
        phase: 'The Spark',
        title: 'Empathy & The 5 PM Panic',
        images: [
          'https://i.ibb.co/gMZx1rGT/UX-Research-1.png',
          'https://i.ibb.co/mKBp4MN/UX-Research.png'
        ],
        description: 'Diving deep into daily kitchen routines and household dynamics. I wanted to understand not just what people cook, but why the simple act of choosing becomes a source of social friction.',
        reflection: 'I spent three days quietly observing how my own roommates interacted with the kitchen fridge. The problem was never "cooking skill" — it was the mental burden of unshared visibility and silent decision negotiations.',
        decisionNote: 'Decided to focus on collective household synchronization rather than solo recipe discovery.',
        research: {
          primary: 'Conducted in-depth surveys and diary studies with 24 young adults sharing apartments across urban hubs.',
          secondary: 'Evaluated 12 competitor apps (recipe aggregators, grocery trackers) finding that 90% treat meal planning as an isolated individual chore.',
          insights: [
            'Decision fatigue is daily and compounding: by 5 PM, decision tolerance drops by 60%.',
            'Lack of real-time visibility into shared ingredients leads directly to duplicate grocery purchases.',
            'The "Paradox of Choice": presenting 50 recipes paralyzes users; presenting 3 contextual choices liberates them.',
            'Nobody wants to be the household dictator who decides every night, creating an awkward standoff.'
          ]
        }
      },
      {
        id: 'ps1-mapping',
        phase: 'Exploration',
        title: 'Mapping the Friction Points',
        images: [
          'https://i.ibb.co/mKBp4MN/UX-Research.png',
          'https://i.ibb.co/gMZx1rGT/UX-Research-1.png'
        ],
        description: 'Mapping the end-to-end emotional trajectory: from the first pang of midday hunger through opening the pantry, coordinating with flatmates, to the final hot meal.',
        reflection: 'The biggest design pivot occurred during flow testing: users resented filling out elaborate ingredient forms. If logging groceries takes more than 10 seconds, the whole system collapses.',
        decisionNote: 'Introduced quick-swipe pantry toggles (In Stock / Expiring Soon / Out) with zero typing required.',
        layout: 'split'
      },
      {
        id: 'ps1-2',
        phase: 'The Pivot',
        title: 'From Recipe Catalog to "Quick Pick"',
        images: ['https://i.ibb.co/Q3WLdt4S/Chat-GPT-Image-Jan-30-2026-12-18-21-PM.png'],
        description: 'Testing low-fidelity prototypes against our core hypothesis: what if the app made the decision easy by narrowing the universe to 3 hyper-personalized suggestions?',
        reflection: 'My first iteration looked like a standard grocery spreadsheet. It felt clinical and chore-like. I tore it down and rebuilt it with tactile card gestures that felt more like a social game.',
        decisionNote: 'Scrapped infinite scrolling recipe feeds in favor of a 3-card daily roulette deck based on ingredients expiring soon.',
        iterations: [
          {
            label: 'Iteration 01 (Spreadsheet Style)',
            description: 'Too quantitative. Users felt overwhelmed by lists of weights and calorie counters.',
            image: 'https://i.ibb.co/Q3WLdt4S/Chat-GPT-Image-Jan-30-2026-12-18-21-PM.png'
          },
          {
            label: 'Iteration 02 (Gamified Roulette)',
            description: 'Card-based rapid vote where housemates swipe right on 2 daily ideas.',
            image: 'https://i.ibb.co/MkDmBbxP/Screenshot-2026-02-12-at-5-10-17-PM.png'
          }
        ]
      },
      {
        id: 'ps1-style',
        phase: 'Craft',
        title: 'Warmth, Kitchen Hues & Tactile Micro-Interactions',
        images: [
          'https://i.ibb.co/MkDmBbxP/Screenshot-2026-02-12-at-5-10-17-PM.png'
        ],
        description: 'Crafting a visual language steeped in home warmth: soft sage herbals, terracotta pots, rounded typography, and buttery micro-animations that make kitchen coordination joyful.',
        reflection: 'I deliberately rejected sterile "tech blues" and aggressive reds. Meal prep should feel like comfort, not an administrative task.',
        layout: 'gallery'
      },
      {
        id: 'ps1-3',
        phase: 'Outcome',
        title: 'Final UI Prototype in Motion',
        layout: 'featured',
        video: 'https://res.cloudinary.com/dmtbtydp5/video/upload/v1775484102/mealmate_app_recording_vhx2tt.mp4',
        posterImage: 'https://i.ibb.co/MkDmBbxP/Screenshot-2026-02-12-at-5-10-17-PM.png',
        description: 'An interactive high-fidelity prototype demonstrating seamless pantry synchronization, collaborative housemate voting, and smart ingredient depletion notices.',
        reflection: 'Seeing users test the final prototype in their real kitchens confirmed our hunch: when choice overload is removed, people actually enjoy cooking together.'
      },
      {
        id: 'ps1-reflection',
        phase: 'Reflection',
        title: 'What I Learned & What Comes Next',
        description: 'Designing for interpersonal relationships is vastly different from designing for a solitary user. Every interface decision either creates friction between housemates or dissolves it. Next steps: exploring voice-assisted hands-free kitchen check-ins.',
        reflection: 'Good UX in domestic spaces must respect human imperfection. People will forget to log an onion; the software must remain helpful even when data is incomplete.'
      }
    ]
  },
  {
    id: 'p2',
    title: 'Vinyl — A Timeless Sound',
    category: 'Editorial Design',
    year: '2026',
    role: 'Editorial Designer & Art Director',
    duration: '4 Weeks',
    tools: ['Adobe InDesign', 'Print Production', 'Typography', 'Book Binding'],
    coverImage: 'https://i.ibb.co/kpV5gbD/cover-page.jpg',
    postcardNote: 'Dispatched from the world of 33 RPM grooves, sleeve dust, and the sensory ritual of slowing down.',
    postcardRotation: 1.5,
    shortDescription: 'A tactile minimalist coffee table publication exploring the cultural gravity and sensory intimacy of vinyl.',
    fullDescription: 'This publication explores the cultural legacy of vinyl records as both a physical medium of sound and a cultural counter-weight to transient streaming playlists.',
    problemHeadline: 'In a world dominated by compressed audio files and algorithmic playlists, we have traded the physical, tactile intimacy of sound for frictionless disposable convenience.',
    problemBody: 'The physical ritual of music consumption has been replaced by algorithmic speed. This project bridges that chasm by celebrating the tactile craftsmanship of vinyl—from the physical lacquer cut to gatefold typographic hierarchy—reminding us why we fall in love with physical sound.',
    process: [
      {
        id: 'ps2-1',
        phase: 'The Spark',
        title: 'Visual Research & The Analog Ritual',
        images: ['https://i.ibb.co/yFTV158d/Screenshot-2026-02-18-at-12-22-18-PM.png'],
        description: 'Analyzing the visual language of 70s and 80s underground print publications, Japanese jazz kissa culture, and record pressing plant archives.',
        reflection: 'I spent weeks flipping through vintage Rolling Stone and Blue Note jackets. There is an unmistakable warmth and texture in physical ink and paper grain that screens simply flatten.',
        decisionNote: 'Committed to uncoated heavy stock and an asymmetrical layout rhythm that echoes the needle tracking across a vinyl groove.',
        research: {
          primary: 'Surveyed vinyl collectors, audio engineers, and first-time analog listeners spanning Gen Z and veteran audiophiles.',
          secondary: 'Documented the industrial pressing process: lacquer master, metal stamper, and hydraulic steam press.',
          insights: [
            'Younger listeners do not buy vinyl for sound quality alone; they buy it for the mindfulness of intentional listening.',
            'Gatefold artwork and liner notes turn an album into a tangible world you can hold in your hands.',
            'The tactile imperfections (subtle surface crackle, sleeve seam wear) are perceived as character, not flaws.'
          ]
        }
      },
      {
        id: 'ps2-2',
        phase: 'Craft',
        title: 'Typographic Grid & Tactile Contrast',
        images: [
          'https://i.ibb.co/VptnNDHy/Screenshot-2026-02-18-at-12-19-32-PM.png', 
          'https://i.ibb.co/21g6zP2M/Screenshot-2026-02-18-at-12-19-54-PM.png'
        ],
        description: 'Developing a dual-layer grid: rigorous modernist baseline grids for body text juxtaposed against expressive, oversized serif titling that wraps around archival photography.',
        reflection: 'Pairing high-contrast display serif typography with ample negative space mirrors the dynamic range of an uncompressed master tape.',
        layout: 'split'
      },
      {
        id: 'ps2-3',
        phase: 'Outcome',
        title: 'The Printed Publication & Cinematic Showcase',
        layout: 'featured',
        video: 'https://res.cloudinary.com/dmtbtydp5/video/upload/v1771396647/famous_records_yukgbu.mp4',
        posterImage: 'https://i.ibb.co/kpV5gbD/cover-page.jpg',
        description: 'A cinematic walkthrough of the finished publication: physical paper weight, gatefold spreads, and typography designed to be experienced at 33 RPM.',
        reflection: 'Print has a permanence that digital cannot match. When you design for paper, every millimeter of margin and ink density must be intentional.'
      },
      {
        id: 'ps2-4',
        phase: 'Reflection',
        title: 'Echoes & Editorial Takeaways',
        description: 'This project deepened my obsession with editorial rhythm. The pacing between dense analytical essays and silent, full-bleed photographic spreads taught me that white space is the visual equivalent of musical rest notes.',
        reflection: 'Tactility is not nostalgia; it is an active human necessity in an increasingly disembodied digital landscape.'
      }
    ]
  },
  {
    id: 'p3',
    title: 'Calendar Design — Warli Art',
    category: 'Illustration',
    year: '2026',
    role: 'Illustrator & Cultural Researcher',
    duration: '4 Weeks',
    tools: ['Adobe Illustrator', 'Vector Geometry', 'Ethnographic Studies', 'Print Production'],
    coverImage: 'https://i.ibb.co/zVS4zwpV/Screenshot-2026-01-29-at-11-07-33-AM.png',
    postcardNote: 'Sent with love from Maharashtra’s tribal lands: sacred geometric circles, harvest dances, and living folklore.',
    postcardRotation: -1.2,
    shortDescription: 'A functional 12-month calendar system translating indigenous Warli tribal geometry into contemporary vector art.',
    fullDescription: 'This series explores the profound geometric syntax of Warli tribal art, translating ancient wall narratives into a functional, year-long daily art calendar.',
    problemHeadline: 'Ancient indigenous art forms are too frequently treated as static museum relics, isolated from modern functional daily objects.',
    problemBody: 'The challenge was to honor the sacred geometric vocabulary of Warli art (the circle of the sun, the triangle of mountains and bodies) without reducing it to decorative caricature. This calendar acts as a daily living narrative celebrating indigenous ecology.',
    process: [
      {
        id: 'ps3-1',
        phase: 'The Spark',
        title: 'Ethnographic Research & Tribal Syntax',
        images: [
          'https://i.ibb.co/kgqbcqmL/Whats-App-Image-2026-02-19-at-12-50-46.jpg', 
          'https://i.ibb.co/5pFz6r0/Whats-App-Image-2026-02-19-at-12-51-03.jpg'
        ],
        description: 'Studying the symbolic vocabulary of the Warli community: two triangles joined at the tip symbolizing the balance of the universe, rhythmic circles representing social unity.',
        reflection: 'I was humbled by the minimalism of Warli art. With just white pigment on red ochre mud, they communicate community, harvest, and ecology with unmatched clarity.',
        research: {
          primary: 'Explored folk art archives and practiced raw brushwork on handmade textured paper.',
          secondary: 'Researched the 12 seasonal rhythms of rural agrarian communities to pair each month with an authentic cultural ceremony.',
          insights: [
            'Warli art never features straight linear timelines; it portrays cyclical life in concentric circles.',
            'Vectorization requires precision without losing the warm organic tremor of human hand-drawn strokes.',
            'Functional dates and typographic numbers must harmonize with the raw rhythmic figures.'
          ]
        }
      },
      {
        id: 'ps3-2',
        phase: 'Craft',
        title: 'Vector Precision & 12 Months of Folklore',
        images: [
          'https://i.ibb.co/DPg8yPnd/jan.jpg',
          'https://i.ibb.co/d0DykQgX/feb.jpg',
          'https://i.ibb.co/mFhJLz6F/march.jpg',
          'https://i.ibb.co/XrP8Yr9c/april.jpg'
        ],
        description: 'Crafting 12 unique compositions reflecting the agricultural calendar: monsoon sowing, harvest festivals, village weddings, and starlit night storytelling.',
        reflection: 'Translating mud-wall strokes into mathematical Bézier curves took days of calibration. I kept microscopic asymmetries so each figure retained its lively pulse.',
        layout: 'gallery'
      },
      {
        id: 'ps3-gallery',
        phase: 'Outcome',
        title: 'The Complete 12-Month Calendar Collection',
        layout: 'featured',
        description: 'All twelve months illustrated in high-resolution vector precision, printed on recycled unbleached kraft paper.',
        images: [
          'https://i.ibb.co/DPg8yPnd/jan.jpg',
          'https://i.ibb.co/d0DykQgX/feb.jpg',
          'https://i.ibb.co/mFhJLz6F/march.jpg',
          'https://i.ibb.co/XrP8Yr9c/april.jpg',
          'https://i.ibb.co/PdK5s4V/may.jpg',
          'https://i.ibb.co/8nJnhQFn/june.jpg',
          'https://i.ibb.co/d4xjfP4X/july.jpg',
          'https://i.ibb.co/PGRGZw86/august.jpg',
          'https://i.ibb.co/twM5FHvY/sep.jpg',
          'https://i.ibb.co/0RBn5LS7/oct.jpg',
          'https://i.ibb.co/zhj1NHSB/nov.jpg',
          'https://i.ibb.co/mrmgk1jG/dec.jpg'
        ]
      },
      {
        id: 'ps3-reflection',
        phase: 'Reflection',
        title: 'Preserving Heritage Through Daily Utility',
        description: 'Art isn’t meant to sit behind glass. By embedding indigenous storytelling into a daily desk calendar, users reconnect with ancient rhythms every time they check the date.',
        reflection: 'Modern design often overcomplicates. Warli taught me that the simplest geometric shapes carry the deepest emotional resonance.'
      }
    ]
  },
  {
    id: 'p-internship-1',
    title: 'New Brand Launch and Pitch work',
    category: 'Internship Work',
    year: '2026',
    role: 'Communication Design Intern',
    duration: '14 Weeks Internship',
    tools: ['Brand Strategy', 'Digital Collateral', 'Brand Guidelines', 'Print Collateral'],
    isInternship: true,
    coverImage: 'https://i.ibb.co/RpX0Nk54/Gallery-01.png',
    postcardNote: 'From my Internship: understanding what a brand wants, how they want to show their brand, where all we need to be displaying the brand, and the perfect people for the brand.',
    postcardRotation: 1.8,
    shortDescription: 'Internship Brief: Environmental graphics, tactile brand touchpoints, and spatial identity systems.',
    fullDescription: 'During my design studio internship, I worked alongside senior art directors to craft an end-to-end spatial brand experience for an experiential cultural space. The scope spanned brand guidelines, tactile environmental wayfinding, and print collateral.',
    problemHeadline: 'How does a brand step out of digital screens and command physical presence in an architectural space?',
    problemBody: 'Shaya by CaratLane is expanding horizons moving from digital to an omni channel business model. This is a defining moment for the brand – we want a creative partner who can translate our brand pitch and give Shaya a sharper, more emotionally resonant place in the consumers mind.',
    process: [
      {
        id: 'ps-int1-1',
        phase: 'The Spark',
        title: 'Brand Brief & Context',
        images: ['https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'],
        description: 'We Understood from the brand, what they stand for, their current guidelines and what they are expecting from us.',
        reflection: 'Sitting for a brief with a brand helped me understand how brands give their briefs, and how to understand their expectations out of us.',
        decisionNote: 'We noted down their guidelines, their expectations, and what they would like from us.',
        research: {
          primary: 'Shaya is CaratLanes contemporary silver jewellery brand – handcrafted in 925 Silver, design led, at an accessible price point – for a style-first consumer who wants jewellery that keeps pace with her wardrobe, not just her milestones. We’re an Omni-channel brand with a strong digital-first presence with a growing retail footprint..',
          secondary: 'We are your ultimate silver destination. From ethnic and minimal styles to our pioneering range of silver jewellery with natural diamonds and a bespoke range of articles — we have it all.',
          insights: [
            'Reintroduce Shaya in a way that makes the brand more desired, more talked-about, and more top-of-mind for our consumer. We will also be onboarding someone as our brand ambassador as a part of this campaign.',
            'What all is expected: A distinctive idea, A voice thats #SoShaya, A story that travels, A 360 degree approach.',
            'Also Indicative scope, timelines and team structure for execution are expected.'
          ]
        }
      },
      {
        id: 'ps-int1-2',
        phase: 'Ideation',
        title: 'Ideation and Brainstorming',
        images: ['https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'],
        description: 'We started off with everyone in the team- the art team and the copywriters thinking what all can be done, and the directions that could be taken.',
        reflection: 'Being a part of the ideation process gave me a real experience on how a brief is broken down and articulated and ideateed upon.',
        layout: 'split'
      },
      {
        id: 'ps-int1-3',
        phase: 'Outcome',
        title: 'The Final Outcome and Deliverables',
        layout: 'featured',
        description: 'We played around with the brand guidelines and fonts, crafting a comprehensive 360-degree campaign across print ads, an editorial social grid, high-impact out-of-home (OOH) collaterals, digital banners, and presentation boards.',
        reflection: 'Presenting this pitch was another way to get feedback on the work done. We worked on this pitch in under a week, and I think we produced some really great, cohesive work.',
        deliverableGroups: [
          {
            id: 'dg-print',
            category: '1) Print Ads (3)',
            description: 'Full-page editorial press and magazine print campaign ads developed for Shaya.',
            items: [
              {
                id: 'pa-1',
                title: 'Print Ad 01 — Hero Editorial',
                caption: 'Full-page magazine ad focusing on handcrafted 925 silver and style-first wardrobe integration.',
                image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
                aspect: 'portrait'
              },
              {
                id: 'pa-2',
                title: 'Print Ad 02 — Minimal & Ethnic',
                caption: 'Dual showcase juxtaposing minimal workday elegance against ethnic celebration pieces.',
                image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800',
                aspect: 'portrait'
              },
              {
                id: 'pa-3',
                title: 'Print Ad 03 — The #SoShaya Statement',
                caption: 'Brand ambassador feature with bold typography and conversational copy.',
                image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800',
                aspect: 'portrait'
              }
            ]
          },
          {
            id: 'dg-social',
            category: '2) Social Media Grid (6 Posts)',
            description: 'Cohesive 6-post visual grid establishing the fresh #SoShaya tone of voice on Instagram.',
            items: [
              {
                id: 'sm-1',
                title: 'Post 01 — The Teaser',
                caption: 'Macro crop teasing the upcoming silver collection.',
                image: 'https://images.unsplash.com/photo-1611591475870-8b15ca9fe195?auto=format&fit=crop&q=80&w=800',
                aspect: 'square'
              },
              {
                id: 'sm-2',
                title: 'Post 02 — The Brand Manifesto',
                caption: 'Typographic carousel defining the silver lifestyle.',
                image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=800',
                aspect: 'square'
              },
              {
                id: 'sm-3',
                title: 'Post 03 — Product Spotlight',
                caption: 'Close-up of signature 925 silver earrings with diamond accents.',
                image: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&q=80&w=800',
                aspect: 'square'
              },
              {
                id: 'sm-4',
                title: 'Post 04 — Editorial Styling Guide',
                caption: 'How to layer delicate silver chains for daily wear.',
                image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&q=80&w=800',
                aspect: 'square'
              },
              {
                id: 'sm-5',
                title: 'Post 05 — Ambassador Quote',
                caption: 'Bold quote graphic tying the campaign to personal expression.',
                image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
                aspect: 'square'
              },
              {
                id: 'sm-6',
                title: 'Post 06 — Call to Explore',
                caption: 'Omni-channel store locator and web boutique invitation.',
                image: 'https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?auto=format&fit=crop&q=80&w=800',
                aspect: 'square'
              }
            ]
          },
          {
            id: 'dg-ooh',
            category: '3) 6 — OOH Collaterals (Horizontal)',
            description: 'Horizontal outdoor advertising collaterals for highway billboards, horizontal gantry signage, and wide transit displays.',
            items: [
              {
                id: 'ooh-1',
                title: 'OOH 01 — Prime Highway Billboard',
                caption: 'Horizontal landscape billboard designed for long-distance readability.',
                image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200',
                aspect: 'landscape'
              },
              {
                id: 'ooh-2',
                title: 'OOH 02 — Metro Horizontal Gantry',
                caption: 'Wide horizontal transit display engaging commuters.',
                image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&q=80&w=1200',
                aspect: 'landscape'
              },
              {
                id: 'ooh-3',
                title: 'OOH 03 — Mall Atrium Horizontal Screen',
                caption: 'Panoramic digital screen at luxury retail destinations.',
                image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200',
                aspect: 'landscape'
              },
              {
                id: 'ooh-4',
                title: 'OOH 04 — Street Horizontal Billboard',
                caption: 'Wide horizontal roadside banner along high-footfall avenues.',
                image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200',
                aspect: 'landscape'
              },
              {
                id: 'ooh-5',
                title: 'OOH 05 — Retail Flagship Horizontal Hoarding',
                caption: 'Wide storefront architectural banner announcing the omni-channel launch.',
                image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
                aspect: 'landscape'
              },
              {
                id: 'ooh-6',
                title: 'OOH 06 — Airport Terminal Horizontal Display',
                caption: 'High-impact horizontal panoramic digital screen at airport departure gates.',
                image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
                aspect: 'landscape'
              }
            ]
          },
          {
            id: 'dg-digital',
            category: '4) 1 Website Banner & 1 Facebook Cover',
            description: 'Digital touchpoint hero graphics calibrated for high click-through engagement.',
            items: [
              {
                id: 'dig-1',
                title: 'Website E-Commerce Hero Banner',
                caption: 'Panoramic desktop landing banner showcasing the new collection and omni-channel locator.',
                image: 'https://i.ibb.co/gbJJ3BTT/Silver-Macro-Website-Banners.png',
                aspect: 'banner'
              },
              {
                id: 'dig-2',
                title: 'Facebook Page Brand Cover',
                caption: 'Social header tying together the pitch messaging, campaign hashtag, and ambassadors.',
                image: 'https://ibb.co/vf2y6PN',
                aspect: 'banner'
              }
            ]
          },
          {
            id: 'dg-gallery',
            category: '5) 2 Gallery Photos',
            description: 'Tactile behind-the-scenes and brand presentation photography from the pitch session.',
            items: [
              {
                id: 'gal-1',
                title: 'Gallery Photo 01',
                caption: 'Primary pitch presentation board showcasing brand color theory and product styling.',
                image: 'https://i.ibb.co/RpX0Nk54/Gallery-01.png',
                aspect: 'wide'
              },
              {
                id: 'gal-2',
                title: 'Gallery Photo 02',
                caption: 'Secondary pitch deliverable board featuring typographic scale and collateral mockups.',
                image: 'https://ibb.co/F4CcNvhD',
                aspect: 'wide'
              }
            ]
          }
        ]
      },
      {
        id: 'ps-int1-reflection',
        phase: 'Reflection',
        title: 'Internship Learnings & Team Collaboration',
        description: 'Collaborating across multidisciplinary teams—architects, Copywrites, and brand strategists—taught me that communication is the most while doing anything, good communication ties everything.',
        reflection: 'I feel like you should always put your ideas forward. It gives you the freedom to think more, explore different possibilities, and push yourself to think outside the box without limiting yourself.'
      }
    ]
  },
  {
    id: 'p-internship-2',
    title: 'Digital Interfaces',
    category: 'Internship Work',
    year: '2026',
    role: 'Graphic Design',
    duration: '14 Weeks Internship',
    tools: ['Figma', 'Photoshop', 'Illustrator', 'AI Image Generation'],
    isInternship: true,
    coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
    postcardNote: 'Dispatched from the digital product frontline: tokens, typography scales, and human-first interactions built for scale.',
    postcardRotation: -1.5,
    shortDescription: 'Internship Case Study: Building modular component libraries, responsive design systems, and inclusive UI states.',
    fullDescription: 'During my product design internship, I led the audit and restructuring of an internal component library. I established accessible color token systems, typographic scales, and micro-interaction states that accelerated cross-platform handoff.',
    problemHeadline: 'Inconsistent design debt and disjointed component variations were slowing down engineering delivery and degrading user trust.',
    problemBody: 'The product suite had accumulated over 40 bespoke button variants, conflicting color contrasts, and zero accessibility documentation. My mandate as an intern was to audit the entire interface ecosystem, eliminate redundancy, and engineer a rock-solid, cohesive token architecture.',
    process: [
      {
        id: 'ps-int2-1',
        phase: 'The Spark',
        title: 'System Audit & Component Inventory',
        images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'],
        description: 'Documenting every button, modal, form input, and dropdown state across 8 core product modules. Uncovering hundreds of visual discrepancies and contrast failures.',
        reflection: 'Design systems are not about policing creativity; they are about freeing designers to solve actual human problems instead of arguing about button border radiuses.',
        decisionNote: 'Adopted an atomic design hierarchy (Tokens -> Atoms -> Molecules -> Organisms) with strict WCAG AA color ratios.',
        research: {
          primary: 'Interviewed 8 front-end developers and 5 product designers to understand their daily friction points in design handoff.',
          secondary: 'Analyzed leading industry systems (Material 3, Polaris, Apple HIG) for token naming conventions and state management.',
          insights: [
            'Developers spent 30% of their sprint time guessing padding and color values because documentation was absent.',
            'Accessibility was previously treated as an afterthought rather than a foundation.',
            'A unified token system cuts down UI regression bugs drastically.'
          ]
        }
      },
      {
        id: 'ps-int2-2',
        phase: 'Craft',
        title: 'Token Architecture & Micro-Interactions',
        images: ['https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800'],
        description: 'Building semantic design tokens for light and dark modes, hover/active/focus/disabled states, and motion curves that make interactions feel responsive and tactile.',
        reflection: 'The biggest breakthrough was introducing interactive component playgrounds in Figma with autolayout and variable modes, making adoption by other designers effortless.',
        layout: 'split'
      },
      {
        id: 'ps-int2-3',
        phase: 'Outcome',
        title: 'The Production-Ready Component Library',
        layout: 'featured',
        images: [
          'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
        ],
        description: 'Over 60 scalable components with zero contrast errors, integrated seamlessly into the engineering codebase and adopted by the entire design team.',
        reflection: 'Hearing developers say "this made building our sprint features twice as fast" was the ultimate validation of systemic craft.'
      },
      {
        id: 'ps-int2-reflection',
        phase: 'Reflection',
        title: 'Growth as a Systems Thinker',
        description: 'This internship taught me to look at digital products not as static screens, but as living, breathing interactive systems. Good design is as much about scalability and clarity as it is about visual beauty.',
        reflection: 'Clarity is kindness. The clearer your system is, the more delight you can deliver to end users.'
      }
    ]
  }
];

// Archived Explorations kept safe in case user wants to view or toggle them:
export const ARCHIVED_PROJECTS: Project[] = [
  {
    id: 'p7',
    title: 'Mirror Mirror',
    category: 'Immersive Design Studio',
    coverImage: 'https://i.ibb.co/Fk3z1Jyk/Whats-App-Image-2026-04-07-at-15-43-09-1.jpg',
    shortDescription: 'In an era of relentless digital certainty, Mirror Mirror offers a whimsical turn into the unknown through interactive space and projection.',
    fullDescription: 'By delivering cryptic, light-hearted responses through a talking projection, the mirror acts as a bridge between us and the universe.',
    problemHeadline: 'How can we create an experience for people to feel present in an unseen space?',
    problemBody: 'What elements allow a person to be immersed in an environment without physical boundaries? A study in gothic whimsy, projection mapping, and spatial presence.',
    process: [
      {
        id: 'ps7-1',
        title: 'Conceptualization',
        images: ['https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop'],
        description: 'Exploring space, reflection, and mystical interaction logic.'
      }
    ]
  },
  {
    id: 'p5',
    title: 'Rebranding & Marketing: Tea Better',
    category: 'Digital Marketing',
    coverImage: 'https://i.ibb.co/v4hF73HL/Screenshot-2026-01-29-at-11-05-53-AM.png',
    shortDescription: 'Repositioning an artisanal tea company with narrative campaigns and community rituals.',
    fullDescription: 'Built a social media campaign for Tea Better after in-depth research into youth wellness habits.',
    problemHeadline: 'A brand with a great product but a disconnected story is invisible in the modern attention economy.',
    problemBody: 'Tea Better had high quality, but low cultural resonance. Redefined their narrative from "just tea" to "a ritual for the focused mind".',
    process: [
      {
        id: 'ps5-1',
        title: 'Market Research',
        images: ['https://i.ibb.co/gZFxTsY1/Screenshot-2026-01-30-at-7-09-12-PM.png'],
        description: 'Analyzing the competitive landscape of the wellness beverage industry.'
      }
    ]
  },
  {
    id: 'p8',
    title: 'Neon Noir',
    category: 'Production Design',
    coverImage: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=800&auto=format&fit=crop',
    shortDescription: 'Set design and practical lighting art direction for a cyberpunk short film.',
    fullDescription: 'A production design project where I built a futuristic urban alleyway from scratch, focusing on practical lighting and weathered textures.',
    problemHeadline: 'How can we create a believable future using limited physical space and budget?',
    problemBody: 'Layering practical textures—rust, neon, steam—to evoke a lived-in futuristic world.',
    process: [
      {
        id: 'ps8-1',
        title: 'Set Construction',
        images: ['https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop'],
        description: 'Building modular studio walls with practical neon glow.'
      }
    ]
  }
];

export const INTERESTS: Interest[] = [
  {
    id: 'i1',
    name: 'Aerial Arts',
    image: 'https://i.ibb.co/tTh3XwyJ/Whats-App-Image-2026-02-02-at-19-57-05.jpg',
    description: 'Aerial has always been something I was drawn to, and once I took flight I haven’t been able to let go.',
    personalNote: 'Suspended six meters off the ground, there is no room for overthinking. Aerial silks taught me spatial trust, balance, and the courage to let go—the exact same courage I bring into bold design choices.',
    gallery: [
      'https://i.ibb.co/5hTMLvNB/Whats-App-Image-2026-02-02-at-19-57-51.jpg',
      'https://i.ibb.co/gb29XJJP/Whats-App-Image-2026-02-02-at-19-59-36-2.jpg',
      'https://i.ibb.co/Gf0cCpc2/Whats-App-Image-2026-02-02-at-19-59-36-1.jpg',
    ]
  },
  {
    id: 'i2',
    name: 'Tactile Sketchbooks',
    image: 'https://i.ibb.co/whzp4x8V/Chat-GPT-Image-Jan-29-2026-04-36-14-PM.png',
    description: 'Drawing and sketching on raw paper since I was a little kid—the stack of filled sketchbooks is proof of my earliest obsession.',
    personalNote: 'Before any Figma file opens, it lives as a messy graphite scribble in my pocket notebook. The physical friction of pencil on grain keeps ideas honest and unpolished.',
    gallery: [
      'https://i.ibb.co/gLMp4N8P/vertical-building-white-background-soft-MATCHED.png',
      'https://i.ibb.co/kg0ZSxNL/street-sketch-white-background.png',
      'https://i.ibb.co/qFX99r5V/building-white-background-soft-MATCHED.png',
    ]
  },
  {
    id: 'i3',
    name: 'Sensory Cooking',
    image: 'https://i.ibb.co/4wKn8ZCW/Whats-App-Image-2026-02-12-at-16-48-23.jpg',
    description: 'I love eating and I love cooking for the people I care about. A labor of love and flavor exploration.',
    personalNote: 'Cooking is edible communication design. Balancing acidity, warmth, crisp texture, and plating is the most immediate sensory feedback loop in the world.',
    gallery: [
      'https://i.ibb.co/4wKn8ZCW/Whats-App-Image-2026-02-12-at-16-48-23.jpg',
      'https://i.ibb.co/nNtDFVgd/Whats-App-Image-2026-02-19-at-13-44-44.jpg',
      'https://i.ibb.co/NgVZjB80/Whats-App-Image-2026-02-19-at-13-44-45-1.jpg',
      'https://i.ibb.co/svP67n6H/Whats-App-Image-2026-02-19-at-13-44-44-1.jpg',
      'https://i.ibb.co/1Jzzy8cJ/Whats-App-Image-2026-02-19-at-13-44-45.jpg'
    ]
  },
  {
    id: 'i4',
    name: 'Fine Arts & Charcoal',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=800',
    description: 'Oil paintings, raw charcoal studies, and where traditional classical techniques encounter contemporary thought.',
    personalNote: 'Getting paint on my hands reminds me that art is physical. The smell of linseed oil and turpentine grounds me when digital screens get too sterile.',
    gallery: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'i5',
    name: 'Analog Photography',
    image: 'https://i.ibb.co/75DDPZH/DSC08094.jpg',
    description: 'Capturing fleeting moments between shadows, street corners, and spontaneous light.',
    personalNote: 'A camera gives you permission to pause and study the world. Looking through the viewfinder taught me how light bends around corners and frames human emotion.',
    gallery: [
      'https://i.ibb.co/jvd0mF4B/Whats-App-Image-2026-02-03-at-20-22-57-1.jpg',
      'https://i.ibb.co/tpwpSK69/Whats-App-Image-2026-02-03-at-20-22-57.jpg',
      'https://i.ibb.co/rGvgqTTx/Whats-App-Image-2026-02-03-at-20-22-56.jpg'
    ]
  }
];

export const PERSONAL_PHOTO_URL = 'https://i.ibb.co/NdWK4w4P/Whats-App-Image-2026-02-03-at-12-48-07.jpg';

export const RESUME_URL = '/Sudena_Chandnani_Resume.pdf';
