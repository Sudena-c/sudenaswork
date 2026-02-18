
import { Project, Interest } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'MealMate',
    category: 'UI/UX',
    coverImage: 'https://i.ibb.co/MkDmBbxP/Screenshot-2026-02-12-at-5-10-17-PM.png',
    shortDescription: 'A collaborative meal-planning platform for shared households.',
    fullDescription: 'MealMate is a collaborative meal-planning platform designed for people sharing a household. Users create individual profiles by adding food preferences, dietary choices, and commonly available groceries at home.',
    problemHeadline: 'Every day, millions of people ask one small question: "What should I cook today?" That question sounds simple - but it creates stress, wasted food, and unhealthy choices.',
    problemBody: 'People living alone or in shared households often struggle to decide what to cook each day. Limited awareness of available groceries, differing food preferences, and lack of coordination between household members make daily meal decisions mentally exhausting and inefficient.',
    process: [
      {
        id: 'ps1-1',
        title: 'User Research',
        images: [
          'https://i.ibb.co/gMZx1rGT/UX-Research-1.png',
          'https://i.ibb.co/mKBp4MN/UX-Research.png'
        ],
        description: 'Diving deep into the daily routines, the habits and the user journeys of the users.',
        research: {
          primary: 'Conducted surveys and sent out a questionnaire to understand the users and their daily problems.',
          secondary: 'Analyzed the causes of problems faced by users, also what existing applications/websites are doing about this, did competitor analysis and understood the users and market better.',
          insights: [
            'Decision fatigue is not occasional — it is a daily burden.',
            'Lack of visibility into available groceries intensifies decision fatigue.',
            'More choices do not reduce confusion — they increase it.',
            'Shared households add a social layer to meal decisions.',
            'Users want guidance, not control.',
            'Health intentions often break down under decision pressure.',
            'Transparency and inclusion reduce friction in shared decisions.',
          ]
        }
      },
      {
        id: 'ps1-2',
        title: 'Wireframing',
        images: ['https://i.ibb.co/Q3WLdt4S/Chat-GPT-Image-Jan-30-2026-12-18-21-PM.png'],
        description: 'Iterative low-fidelity wireframes focusing on the user journey from starting to think to making the meal.'
      },
      {
        id: 'ps1-3',
        title: 'Final UI Design',
        layout: 'featured',
        images: ['https://i.ibb.co/vx9dxxy5/Screenshot-2026-01-29-at-10-40-52-AM.png'],
        description: 'Based on the research and the learnings, the design focused on reducing choice overload, supporting shared decision-making, and increasing visibility into available groceries. The prototype features a shared household pantry sync and a "Quick Pick" recommendation engine.'
      }
    ]
  },
  {
    id: 'p2',
    title: 'Vinyl- a timeless sound',
    category: 'Editorial Design',
    coverImage: 'https://i.ibb.co/kpV5gbD/cover-page.jpg',
    shortDescription: 'A minimalist print publication talking about the Vinyl, the importance, history, making and some famous records.',
    fullDescription: 'This coffee table book explores the cultural legacy of vinyl records as both a medium of sound and a symbol of timeless music.',
    problemHeadline: 'In a world dominated by digital compression and transient playlists, we have lost the tactile intimacy of music.',
    problemBody: 'The physical ritual of music consumption has been replaced by algorithm-driven convenience. This project aims to bridge the gap by documenting the tangible beauty of vinyl—from the groove in the wax to the art on the sleeve—reminding us why we fell in love with sound in the first place.',
    process: [
      {
        id: 'ps2-1',
        title: 'Visual Research',
        images: ['https://i.ibb.co/yFTV158d/Screenshot-2026-02-18-at-12-22-18-PM.png'],
        description: 'Analyzing the visual language of 70s and 80s music magazines.',
        research: {
          primary: 'Talked to people about their understanding of vinyl, how much knowledge they have about the vinyl, and if they have used it or not.',
          secondary: 'Read about the history of vinyl, what makes them so unique and allows them to give the experience they give, how they are made and what are some records famous from all time.',
          insights: [
            'People do know the evolution of music however do not have much knowledge of the making and history of vinyl.',
            'The making process of vinyl is very unique and fun.',
            'The current generation is fascinated by the physical ritual of analog sound.'
          ]
        }
      },
      {
        id: 'ps2-2',
        title: 'Layout & Imagery',
        images: [
          'https://i.ibb.co/VptnNDHy/Screenshot-2026-02-18-at-12-19-32-PM.png', 
          'https://i.ibb.co/21g6zP2M/Screenshot-2026-02-18-at-12-19-54-PM.png'
        ],
        description: 'Developing a visual language that mirrors the analog nature of vinyl—bold, textured, and slightly nostalgic yet modern.'
      },
      {
        id: 'ps2-3',
        title: 'Final Outcome & Cinematic Showcase',
        layout: 'featured',
        video: 'https://res.cloudinary.com/dmtbtydp5/video/upload/v1771396647/famous_records_yukgbu.mp4',
        description: 'A cinematic look at the tactile experience of Vinyl. The motion reflects the rhythmic nature of the record spinning, bridging the gap between print design and the sound it represents.'
      }
    ]
  },
  {
    id: 'p3',
    title: 'Creating a Website from scratch',
    category: 'Web Development',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    shortDescription: 'A custom portfolio experience built with React and node.js',
    fullDescription: 'A web platform designed to showcase myself and my work.',
    problemHeadline: 'Standard and basic coding helps a lot with developing something completely new using AI.',
    problemBody: 'Initially I depended on a basic layout and simple structure on other platforms. By building from scratch, I tackled the challenge of balancing complex layouting with high-speed performance, ensuring the tech serves the vision, not the other way around.',
    process: [
      {
        id: 'ps3-0',
        title: 'Redesigned an existing website to understand the system better',
        images: ['https://i.ibb.co/Zpbzcyfq/Screenshot-2026-01-30-at-6-28-27-PM.png'],
        description: 'Learning how to make a website- the basics of uploading images, connecting them to the code and the website.',
      },
      {
        id: 'ps3-1',
        title: 'Final Implementation- making my own Website',
        layout: 'featured',
        images: [
          'https://i.ibb.co/573YHr9/Screenshot-2026-02-18-at-12-49-36-PM.png', 
          'https://i.ibb.co/svL34Cm3/Screenshot-2026-02-18-at-1-16-51-PM.png'
        ],
        description: 'A fully responsive, custom-built digital home for creative expression.'
      }
    ]
  },
  {
    id: 'p4',
    title: 'Rayve- an electric car brand',
    category: 'Branding',
    coverImage: 'https://i.ibb.co/DHRYgS77/Free-Billboard-Mockup-2nd-draft-blue-copy.jpg',
    shortDescription: 'Visual identity for a forward-thinking EV startup.',
    fullDescription: 'RAYVE is a solar-powered electric vehicle brand designed for modern urban commuters who value sustainability without compromising on style.',
    problemHeadline: 'The current perception of electric vehicles is either too clinical and cold or aggressively futuristic, alienating the everyday driver.',
    problemBody: 'Rayve needed to find a "human" angle for sustainable technology. The challenge was to create a visual identity that felt as warm as sunlight but as precise as a high-performance engine, making the transition to green energy feel like a natural evolution rather than a lifestyle sacrifice.',
    process: [
      {
        id: 'ps4-1',
        title: 'Brand Research',
        images: ['https://images.unsplash.com/photo-1572044162444-ad60f128bde2?auto=format&fit=crop&q=80&w=800'],
        description: 'Exploring the intersection of automotive precision and organic solar energy.',
        research: {
          primary: 'Focused groups with young urban professionals about their hesitations regarding EV adoption.',
          secondary: 'Trend analysis of solar-tech visual language and luxury sustainable branding.',
          insights: [
            'Sustainability needs to look "premium" not "recycled".',
            'Blue is overused in tech; yellow/amber represents warmth and power.',
            'Typography needs to feel solid and reliable.'
          ]
        }
      },
      {
        id: 'ps4-2',
        title: 'The Visual Identity',
        layout: 'featured',
        images: ['https://i.ibb.co/DHRYgS77/Free-Billboard-Mockup-2nd-draft-blue-copy.jpg'],
        description: 'A brand that balances precision with the warmth of natural energy.'
      }
    ]
  },
  {
    id: 'p5',
    title: 'Rebranding and Marketing an existing brand',
    category: 'Digital Marketing',
    coverImage: 'https://i.ibb.co/v4hF73HL/Screenshot-2026-01-29-at-11-05-53-AM.png',
    shortDescription: 'Campaign design and market positioning for an existing business.',
    fullDescription: 'Built a social media campaign for an existing brand- Tea Better after doing some in depth research on the brand.',
    problemHeadline: 'A brand with a great product but a disconnected story is invisible in the modern attention economy.',
    problemBody: 'Tea Better had high quality, but low cultural resonance. The problem was an outdated digital presence that didn\'t reflect the wellness and energy values of its younger target audience. I had to redefine their narrative to move from "just tea" to "a ritual for the focused mind."',
    process: [
      {
        id: 'ps5-1',
        title: 'Market Research',
        images: ['https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=800'],
        description: 'Analyzing the competitive landscape of the wellness beverage industry.',
        research: {
          primary: 'Consumer sentiment analysis via social listening on Instagram and Twitter.',
          secondary: 'Competitive audit of 5 major tea brands and 3 wellness startups.',
          insights: [
            'Gen Z views tea as a "focus tool", not just a relaxant.',
            'Transparency about source is a mandatory brand pillar.',
            'Minimalist packaging performs 40% better on social media platforms.'
          ]
        }
      },
      {
        id: 'ps5-2',
        title: 'Campaign Launch',
        layout: 'featured',
        images: ['https://i.ibb.co/v4hF73HL/Screenshot-2026-01-29-at-11-05-53-AM.png'],
        description: 'A multi-platform digital campaign that repositioned Tea Better as a premium lifestyle choice.'
      }
    ]
  },
  {
    id: 'p6',
    title: 'Calendar design- based on Warli art',
    category: 'Illustration',
    coverImage: 'https://i.ibb.co/zVS4zwpV/Screenshot-2026-01-29-at-11-07-33-AM.png',
    shortDescription: 'A series of vector illustrations inspired by traditional folk art',
    fullDescription: 'This series explores the intricate patterns found in Warli tribal art and translates them into a modern calendar format.',
    problemHeadline: 'Indigenous art forms are often relegated to museums, losing their vibrancy and relevance in our daily lives.',
    problemBody: 'The challenge was to take the rigid geometric language of Warli art and adapt it for a functional, modern object without stripping it of its cultural soul. This calendar acts as a daily reminder of traditional storytelling in a high-speed digital world.',
    process: [
      {
        id: 'ps6-1',
        title: 'Ethnographic Research',
        images: ['https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800'],
        description: 'Studying the history and visual syntax of the Warli community.',
        research: {
          primary: 'Interaction with tribal art curators to understand the meaning behind specific geometric motifs.',
          secondary: 'Analysis of contemporary applications of traditional Indian folk art in industrial design.',
          insights: [
            'The circle represents sun and moon, the triangle mountains/trees.',
            'Rhythm is more important than anatomical accuracy.',
            'Earthly tones can be modernized using high-contrast digital vectors.'
          ]
        }
      },
      {
        id: 'ps6-2',
        title: 'The Final Calendar',
        layout: 'featured',
        images: ['https://i.ibb.co/zVS4zwpV/Screenshot-2026-01-29-at-11-07-33-AM.png'],
        description: 'Bridging tribal history with modern utility through vector precision.'
      }
    ]
  }
];

export const INTERESTS: Interest[] = [
  {
    id: 'i1',
    name: 'Aerial',
    image: 'https://i.ibb.co/tTh3XwyJ/Whats-App-Image-2026-02-02-at-19-57-05.jpg',
    description: 'Defying gravity through silks and hoops. Aerial art is my moving meditation.'
  },
  {
    id: 'i2',
    name: 'Sketching',
    image: 'https://i.ibb.co/whzp4x8V/Chat-GPT-Image-Jan-29-2026-04-36-14-PM.png',
    description: 'The rawest form of communication. I carry a sketchbook everywhere.'
  },
  {
    id: 'i3',
    name: 'Cooking',
    image: 'https://i.ibb.co/4wKn8ZCW/Whats-App-Image-2026-02-12-at-16-48-23.jpg',
    description: 'Experimenting with flavors and textures. My kitchen is a laboratory.'
  },
  {
    id: 'i4',
    name: 'Fine Arts',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=800',
    description: 'Oil paintings and charcoal studies. Where traditional techniques meet modern concepts.'
  },
  {
    id: 'i5',
    name: 'Photography',
    image: 'https://i.ibb.co/75DDPZH/DSC08094.jpg',
    description: 'Capturing the fleeting moments between shadows and light.'
  }
];
