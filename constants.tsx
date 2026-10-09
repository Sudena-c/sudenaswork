import { Project, Interest } from './types';

// The 7 curated projects featured on the scroll:
// 1) MealMate (existing project)
// 2) Publication Design (existing project)
// 3) Immersive Design Studio (with YouTube video support)
// 4) Production Design (with YouTube video support)
// 5) Internship 1st project (with horizontally scrollable/swipeable large OOHs)
// 6) Internship 2nd (scrollable collection of posters & social creatives in pairs / horizontal)
// 7) Calendar design (existing project)
export const PROJECTS: Project[] = [
  // 1) MealMate (existing project)
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

  // 2) Publication Design (existing project)
  {
    id: 'p2',
    title: 'Publication Design — Vinyl: A Timeless Sound',
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

  // 3) Immersive Design Studio (existing project with YouTube video support)
  {
    id: 'p7',
    title: 'Immersive Design Studio — Mirror Mirror',
    category: 'Immersive Design Studio',
    year: '2026',
    role: 'Spatial & Interaction Designer',
    duration: '5 Weeks',
    tools: ['Projection Mapping', 'TouchDesigner', 'Spatial Audio', 'Interactive Sensors', 'Physical Prototyping'],
    coverImage: 'https://i.ibb.co/Fk3z1Jyk/Whats-App-Image-2026-04-07-at-15-43-09-1.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    postcardNote: 'Dispatched from the darkened studio: light, two-way mirrors, and responsive projections dissolving physical boundaries.',
    postcardRotation: -2.1,
    shortDescription: 'An interactive spatial installation blending gothic whimsy, talking projections, and reflective presence.',
    fullDescription: 'By delivering cryptic, light-hearted responses through a talking projection, Mirror Mirror acts as a poetic bridge between the viewer and the universe. An exploration of immersive spatial storytelling and responsive installation art.',
    problemHeadline: 'How can an interactive installation dissolve physical walls to make people feel truly present in an unseen, whimsical world?',
    problemBody: 'In an era of hyper-functional screens, people are starved for enchantment and wonder. The challenge was building an installation where participants communicate with a surreal, living mirror through voice and proximity without feeling alienated by the technology powering it.',
    process: [
      {
        id: 'ps7-1',
        phase: 'The Spark',
        title: 'Conceptualization & Spatial Presence',
        images: ['https://i.ibb.co/Fk3z1Jyk/Whats-App-Image-2026-04-07-at-15-43-09-1.jpg'],
        description: 'Investigating the psychology of reflection, folklore mirrors, and Victorian spirit cabinets. Prototyping two-way beam splitters and micro-projector focal lengths.',
        reflection: 'When people look into a normal mirror, they see themselves. When they look into an enchanted mirror that answers back, their posture shifts from vanity to childlike wonder.',
        decisionNote: 'Decided on a physical gothic gilded frame enclosing a concealed high-lumen projection surface and depth-sensing camera.',
        research: {
          primary: 'Conducted live spatial tests observing how participants approach darkened rooms and mirrors.',
          secondary: 'Researched theatrical Pepper’s Ghost techniques and real-time generative visual nodes in TouchDesigner.',
          insights: [
            'Latency kills magic: any delay over 100ms breaks the illusion of a living entity.',
            'Spatial audio directed from behind the mirror glass creates an eerie feeling of intimacy.',
            'Cryptic, poetic answers resonate far deeper than literal chat responses.'
          ]
        }
      },
      {
        id: 'ps7-2',
        phase: 'Craft',
        title: 'Projection Mapping & Sensor Calibration',
        images: ['https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop'],
        description: 'Calibrating projection luminosity against ambient candlelight, mapping animations onto glass geometry, and fine-tuning ultrasonic proximity triggers.',
        reflection: 'The biggest breakthrough was blending practical vintage objects (antique candelabras, heavy velvet drapes) with razor-sharp digital projection mapping.',
        layout: 'split'
      },
      {
        id: 'ps7-youtube',
        phase: 'Outcome',
        title: 'Interactive Spatial Walkthrough (YouTube Video Showcase)',
        layout: 'featured',
        youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        posterImage: 'https://i.ibb.co/Fk3z1Jyk/Whats-App-Image-2026-04-07-at-15-43-09-1.jpg',
        description: 'Complete documentation of the spatial installation in motion: participant interactions, audio responsive projection, and the ambient environment.',
        reflection: 'Seeing participants gasp and smile when the mirror first whispered back to them was the most fulfilling moment of the studio semester.'
      },
      {
        id: 'ps7-reflection',
        phase: 'Reflection',
        title: 'The Poetics of Interactive Spaces',
        description: 'Technology is at its most powerful when it becomes invisible. Immersive design is not about high-tech gizmos; it is about orchestrating light, sound, and curiosity to awaken the human spirit.',
        reflection: 'Spatial design taught me that the environment itself is the canvas. Every beam of light and shadow carries narrative weight.'
      }
    ]
  },

  // 4) Production Design (existing project with YouTube video support)
  {
    id: 'p8',
    title: 'Production Design — Neon Noir',
    category: 'Production Design',
    year: '2026',
    role: 'Production Designer & Art Director',
    duration: '6 Weeks',
    tools: ['Physical Set Construction', 'Practical Lighting', 'Texture Aging', 'Drafting & Blueprints', 'Color Scripting'],
    coverImage: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=800&auto=format&fit=crop',
    youtubeUrl: 'https://www.youtube.com/watch?v=L_LUpnjgPso',
    postcardNote: 'Dispatched from the studio soundstage: weathered textures, dripping steam, and physical neon tubes built from scratch.',
    postcardRotation: 1.7,
    shortDescription: 'Set design, practical lighting art direction, and worldbuilding for a cyberpunk short film.',
    fullDescription: 'A production design endeavor building an urban dystopian alleyway inside a soundstage. Layered practical weathering, modular steel framing, and custom bent neon tubes to create a gritty, lived-in world for cinema.',
    problemHeadline: 'How can we build a believable, breathing sci-fi future using physical craft, practical illumination, and limited soundstage space?',
    problemBody: 'Too much contemporary sci-fi relies on flat green screens that detach actors from their tactile environment. This project created a 360-degree practical set where physical rust, real steam pipes, and glowing neon provide organic cinematic depth and tangible actor interaction.',
    process: [
      {
        id: 'ps8-1',
        phase: 'The Spark',
        title: 'Architectural Blueprints & Urban Decay Research',
        images: ['https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop'],
        description: 'Drafting 1:20 architectural scale models, sourcing industrial salvage materials, and studying the weathering patterns of Kowloon Walled City and neo-noir cinema classics.',
        reflection: 'A great set tells a story before an actor even enters the frame. Every peeled poster layer and grease stain implies years of forgotten human life.',
        decisionNote: 'Constructed reversible modular timber and corrugated metal wall flats that could be re-arranged into three distinct camera setups.',
        research: {
          primary: 'Explored metal scrap yards and reclaimed vintage fixtures to create authentic textural decay.',
          secondary: 'Analyzed color temperature interplay between warm sodium-vapor amber (2200K) and cold cybernetic cyan/magenta neon.',
          insights: [
            'Wet asphalt doubles light reflectivity and stretches camera depth of field.',
            'Practical lights (in-camera neon, street lamps) must be dimmable to prevent digital camera sensor clipping.',
            'Textural weathering requires multiple layers: base primer, patina wash, spattered grease, and dry-brushed rust.'
          ]
        }
      },
      {
        id: 'ps8-2',
        phase: 'Craft',
        title: 'Set Construction & Practical Lighting Installation',
        images: ['https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=800&auto=format&fit=crop'],
        description: 'Building modular flats, rigging custom neon signage, piping atmospheric steam lines, and hand-distressing typography across weathered shop facades.',
        reflection: 'Spending late nights in the workshop with sawdust, paint fumes, and wiring transformers gave me an enduring respect for physical set craft.',
        layout: 'split'
      },
      {
        id: 'ps8-youtube',
        phase: 'Outcome',
        title: 'Cinematic Reel & Lighting Walkthrough (YouTube Video Showcase)',
        layout: 'featured',
        youtubeUrl: 'https://www.youtube.com/watch?v=L_LUpnjgPso',
        posterImage: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=800&auto=format&fit=crop',
        description: 'Cinematic camera tests demonstrating practical neon reflections, steam diffusion, and dynamic actor framing across the completed set.',
        reflection: 'When the Director of Photography flipped on the practical lights and rolled camera, the soundstage completely vanished—we were standing in a living cyberpunk city.'
      },
      {
        id: 'ps8-reflection',
        phase: 'Reflection',
        title: 'Worldbuilding as Physical Architecture',
        description: 'Production design taught me that visual communication extends far beyond 2D graphics into three-dimensional volume, texture, and light.',
        reflection: 'True cinematic immersion comes from tangible authenticity. Real materials react to camera lenses in ways computer software cannot replicate.'
      }
    ]
  },

  // 5) Internship 1st project (with horizontal scrollable OOHs)
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
    shortDescription: 'Brief: Understanding the brand, understanding what the brand wants, desinging collaterals for them.',
    fullDescription: 'During this project, I worked alongside senior art heads to design digital collaterals for Shaya. The scope spanned brand rebranding, real digital and print collateral.',
    problemHeadline: 'How does a brand rebrand itself and target their audience through digital and print collateral',
    problemBody: 'Shaya by CaratLane is expanding horizons moving from digital to an omni channel business model. This is a defining moment for the brand – we want a creative partner who can translate our brand pitch and give Shaya a sharper, more emotionally resonant place in the consumers mind.',
    process: [
      {
        id: 'ps-int1-1',
        phase: 'The Spark',
        title: 'Brand Brief & Context',
        images: ['https://i.ibb.co/Fb19vPdw/Screenshot-2026-10-07-at-12-50-54-PM.png'],
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
        images: ['https://i.ibb.co/6R65HMgq/Whats-App-Image-2026-09-18-at-13-23-19-2.jpg'],
        description: 'We started off with everyone in the team- the art team and the copywriters thinking what all can be done, and the directions that could be taken.',
        reflection: 'Being a part of the ideation process gave me a real experience on how a brief is broken down, articulated and ideated upon.',
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
            category: '1) Print Ads',
            description: 'Full-page editorial press and magazine print campaign ads developed for Shaya.',
            items: [
              {
                id: 'pa-1',
                title: 'Print Ad 01 — Hero Editorial',
                caption: 'Full-page magazine ad showcasing their jewellery piece.',
                image: 'https://i.ibb.co/fzL8SKqt/Silver-Portrait-Print-03.png',
                aspect: 'portrait'
              },
              {
                id: 'pa-2',
                title: 'Print Ad 02',
                caption: 'Full-page magazine ad showcasing their jewellery piece.',
                image: 'https://i.ibb.co/VYfwjSSv/Silver-Macro-Print-02.png',
                aspect: 'portrait'
              },
              {
                id: 'pa-3',
                title: 'Print Ad 03',
                caption: 'Full-page magazine ad showcasing their jewellery piece.',
                image: 'https://i.ibb.co/Rkct0KqC/Silver-Macro-Print-01.png',
                aspect: 'portrait'
              }
            ]
          },
          {
            id: 'dg-social',
            category: '2) Social Media Grid',
            description: 'Cohesive 6-post visual grid establishing the fresh #SoShaya tone of voice on Instagram.',
            items: [
              {
                id: 'sm-1',
                title: 'Post 01 — The Teaser',
                caption: 'Macro crop teasing the upcoming silver collection.',
                image: 'https://i.ibb.co/99zks5tT/04.png',
                aspect: 'square'
              },
              {
                id: 'sm-2',
                title: 'Post 02 — The Brand Manifesto',
                caption: 'Typographic carousel defining the silver lifestyle.',
                image: 'https://i.ibb.co/yt1wVty/05.png',
                aspect: 'square'
              },
              {
                id: 'sm-3',
                title: 'Post 03 — Product Spotlight',
                caption: 'Close-up of signature 925 silver earrings with diamond accents.',
                image: 'https://i.ibb.co/RkVwgghD/02.png',
                aspect: 'square'
              },
              {
                id: 'sm-4',
                title: 'Post 04 — Editorial Styling Guide',
                caption: 'How to layer delicate silver chains for daily wear.',
                image: 'https://i.ibb.co/MQXDxTM/03.png',
                aspect: 'square'
              },
              {
                id: 'sm-5',
                title: 'Post 05 — Ambassador Quote',
                caption: 'Bold quote graphic tying the campaign to personal expression.',
                image: 'https://i.ibb.co/xS4DScLK/06.png',
                aspect: 'square'
              },
              {
                id: 'sm-6',
                title: 'Post 06 — Call to Explore',
                caption: 'Omni-channel store locator and web boutique invitation.',
                image: 'https://i.ibb.co/NdPnWzsP/01.png',
                aspect: 'square'
              }
            ]
          },
          {
            id: 'dg-ooh',
            category: '3) OOH Collaterals (Horizontal Swipeable)',
            description: 'Horizontal outdoor advertising collaterals for highway billboards, horizontal gantry signage, and wide transit displays. Scroll or swipe horizontally to see each billboard in large scale.',
            displayMode: 'horizontal-scroll',
            items: [
              {
                id: 'ooh-1',
                title: 'OOH 01 — Highway Landscape Billboard',
                caption: 'Horizontal landscape billboard designed for high-speed highway visibility and bold typography.',
                image: 'https://i.ibb.co/DDFgq2nD/Mock-Silver-Macro-OOH-03.png',
                aspect: 'landscape'
              },
              {
                id: 'ooh-2',
                title: 'OOH 02 — Transit Hub Horizontal Display',
                caption: 'Wide horizontal transit display captivating urban commuters with macro jewelry highlights.',
                image: 'https://i.ibb.co/7J4cR1DG/Mock-Silver-Macro-OOH-02.png',
                aspect: 'landscape'
              },
              {
                id: 'ooh-3',
                title: 'OOH 03 — Boulevard Gantry Billboard',
                caption: 'Expansive horizontal boulevard gantry billboard with balanced negative space.',
                image: 'https://i.ibb.co/ynZWxQCs/Mock-Silver-Macro-OOH-01.png',
                aspect: 'landscape'
              },
              {
                id: 'ooh-4',
                title: 'OOH 04 — High-Footfall Avenue Banner',
                caption: 'Wide horizontal roadside banner along bustling commercial avenues.',
                image: 'https://i.ibb.co/9kYsG0Ks/Silver-Macro-OOH-01.png',
                aspect: 'landscape'
              },
              {
                id: 'ooh-5',
                title: 'OOH 05 — Panoramic Brand Skyline Billboard',
                caption: 'Wide horizontal skyline billboard framing silver craft against the cityscape.',
                image: 'https://i.ibb.co/ymPqqBZd/Silver-Macro-OOH-02.png',
                aspect: 'landscape'
              },
              {
                id: 'ooh-6',
                title: 'OOH 06 — Digital Outdoor Screen',
                caption: 'High-impact horizontal panoramic digital screen designed for motion and crisp clarity.',
                image: 'https://i.ibb.co/mVtpR99c/Mock-Silver-Portrait-OOH-04.png',
                aspect: 'landscape'
              }
            ]
          },
          {
            id: 'dg-digital',
            category: '4) Website Banner & Facebook Cover',
            description: 'Digital touchpoint hero graphics calibrated for high click-through engagement.',
            items: [
              {
                id: 'dig-1',
                title: 'Website E-Commerce Hero Banner',
                caption: 'Panoramic desktop landing banner.',
                image: 'https://i.ibb.co/gbJJ3BTT/Silver-Macro-Website-Banners.png',
                aspect: 'banner'
              },
              {
                id: 'dig-2',
                title: 'Facebook Page Brand Cover',
                caption: 'Social header.',
                image: 'https://i.ibb.co/scLxdwT/Silver-Macro-FB-Cover-photo-mock.png',
                aspect: 'banner'
              }
            ]
          },
          {
            id: 'dg-gallery',
            category: '5) Gallery Photos',
            description: 'Tactile, physical gallery images.',
            items: [
              {
                id: 'gal-1',
                title: 'Gallery Photo 01',
                caption: 'This is how it would look put up in a gallery.',
                image: 'https://i.ibb.co/RpX0Nk54/Gallery-01.png',
                aspect: 'wide'
              },
              {
                id: 'gal-2',
                title: 'Gallery Photo 02',
                caption: 'Gallery Images.',
                image: 'https://i.ibb.co/PG0J3pr6/Gallery-02.png',
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

  // 6) Internship 2nd (collation of posters and social media creatives, scrollable in pairs or horizontal)
  {
    id: 'p-internship-2',
    title: 'Posters & Social Media Creatives Collection',
    category: 'Internship Work',
    year: '2026',
    role: 'Graphic & Campaign Design Intern',
    duration: '14 Weeks Internship',
    tools: ['Photoshop', 'Illustrator', 'Figma', 'Art Direction', 'Typography', 'Social Strategy'],
    isInternship: true,
    coverImage: 'https://i.ibb.co/6R65HMgq/Whats-App-Image-2026-09-18-at-13-23-19-2.jpg',
    postcardNote: 'Dispatched from the studio: an expansive collation of typographic posters and punchy social media creatives, created to stop the scroll.',
    postcardRotation: -1.5,
    shortDescription: 'A curated collation of campaign posters and social media creatives created during my internship, viewable in scrollable pairs or horizontally.',
    fullDescription: 'During my internship, I developed a diverse series of promotional posters, typographic collaterals, and high-impact social media creatives for fast-moving client campaigns. This collection showcases how visual rhythm, bold color blocking, and sharp copywriting intersect across digital and physical touchpoints.',
    problemHeadline: 'How do you sustain distinctive visual energy and typographic authority across high-frequency daily posters and social campaigns?',
    problemBody: 'In fast-paced advertising and social storytelling, creatives must communicate instantly. Each poster and post in this collation was engineered to balance rapid readability with refined editorial elegance, turning routine announcements into memorable visual statements.',
    process: [
      {
        id: 'ps-int2-1',
        phase: 'The Spark',
        title: 'The Campaign Pulse & Rapid Turnaround',
        images: ['https://i.ibb.co/Fb19vPdw/Screenshot-2026-10-07-at-12-50-54-PM.png'],
        description: 'Working within 24-to-48-hour sprint cycles to pitch, iterate, and finalize poster layouts and social media sets for various brand activations.',
        reflection: 'Speed forces you to trust your instinct. When you only have hours to craft a poster, you learn which elements are essential and which are merely decorative clutter.',
        decisionNote: 'Established modular typographic templates with expressive display titles and clean informational hierarchies.',
        research: {
          primary: 'Analyzed eye-tracking data across mobile feeds and poster streetboards to optimize focal landing points.',
          secondary: 'Curated inspiration from Swiss International Style, brutalist gig posters, and modern editorial digital carousels.',
          insights: [
            'Posters paired side-by-side create a compelling visual dialogue, encouraging viewers to compare details.',
            'High-contrast typography paired with raw photographic textures generates the highest feed retention.',
            'Consistency in color temperature gives disparate campaign posts a unified signature.'
          ]
        }
      },
      {
        id: 'ps-int2-2',
        phase: 'Craft',
        title: 'Typographic Tension & Color Dynamics',
        images: ['https://i.ibb.co/6R65HMgq/Whats-App-Image-2026-09-18-at-13-23-19-2.jpg'],
        description: 'Pairing tight negative space with exaggerated kerning, vibrant gradient maps, and custom distressed texture overlays.',
        reflection: 'The beauty of poster design is total creative autonomy within a single rectangular canvas. Every millimeter of bleed and margin serves the message.',
        layout: 'split'
      },
      {
        id: 'ps-int2-collection',
        phase: 'Outcome',
        title: 'The Scrollable Collection: Posters & Social Creatives',
        layout: 'featured',
        description: 'A rich collation of posters and social media creatives created during the internship. Experience them scrolling in pairs side-by-side or horizontally.',
        deliverableGroups: [
          {
            id: 'dg-posters-collection',
            category: 'Posters & Social Media Creatives Collation',
            description: 'Scroll through the collection in curated pairs or toggle horizontal scroll to swipe through them seamlessly.',
            displayMode: 'pairs',
            items: [
              {
                id: 'post-1',
                title: 'Poster 01 — Modernist Typographic Statement',
                caption: 'High-contrast typography exploration playing with letterform scale and brutalist margins.',
                image: 'https://i.ibb.co/fzL8SKqt/Silver-Portrait-Print-03.png',
                aspect: 'portrait'
              },
              {
                id: 'post-2',
                title: 'Poster 02 — Macro Form & Texture Study',
                caption: 'Close-up macro study capturing metallic reflection, delicate shadows, and sculptural shape.',
                image: 'https://i.ibb.co/VYfwjSSv/Silver-Macro-Print-02.png',
                aspect: 'portrait'
              },
              {
                id: 'post-3',
                title: 'Creative 03 — Editorial Brand Teaser',
                caption: 'Square campaign creative engineered to hook attention on Instagram and mobile feeds.',
                image: 'https://i.ibb.co/99zks5tT/04.png',
                aspect: 'square'
              },
              {
                id: 'post-4',
                title: 'Creative 04 — Typographic Manifesto Post',
                caption: 'Carousel title creative featuring bold typographic hierarchy and confident negative space.',
                image: 'https://i.ibb.co/yt1wVty/05.png',
                aspect: 'square'
              },
              {
                id: 'post-5',
                title: 'Poster 05 — Minimalist Product Architecture',
                caption: 'Full-page campaign poster emphasizing subtle elegance and refined lighting.',
                image: 'https://i.ibb.co/Rkct0KqC/Silver-Macro-Print-01.png',
                aspect: 'portrait'
              },
              {
                id: 'post-6',
                title: 'Creative 06 — Spotlight Social Asset',
                caption: 'Dynamic product highlight combining clean studio photography with minimal badge accents.',
                image: 'https://i.ibb.co/RkVwgghD/02.png',
                aspect: 'square'
              },
              {
                id: 'post-7',
                title: 'Creative 07 — Editorial Style Guide Asset',
                caption: 'Visual storytelling post demonstrating wearable layering and tactile everyday styling.',
                image: 'https://i.ibb.co/MQXDxTM/03.png',
                aspect: 'square'
              },
              {
                id: 'post-8',
                title: 'Poster 08 — Brand Ambassador Quote Poster',
                caption: 'Bold typographic statement poster combining voice, identity, and editorial photography.',
                image: 'https://i.ibb.co/xS4DScLK/06.png',
                aspect: 'portrait'
              }
            ]
          }
        ]
      },
      {
        id: 'ps-int2-reflection',
        phase: 'Reflection',
        title: 'Speed, Adaptability & Creative Stamina',
        description: 'Producing high volumes of posters and social assets under real studio deadlines taught me that consistency is born from rigorous systems, not luck.',
        reflection: 'Every creative asset you build is an opportunity to experiment with a new typeface, grid, or color harmony. Never treat small formats as small opportunities.'
      }
    ]
  },

  // 7) Calendar design (existing project)
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
  }
];

// Archived Explorations kept safe
export const ARCHIVED_PROJECTS: Project[] = [
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

export const CV_URL = '/Sudena_Chandnani_CV.pdf';
export const RESUME_URL = CV_URL;
