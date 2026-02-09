
import { Project, Interest } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'MealMate',
    category: 'UI/UX',
    coverImage: 'https://i.ibb.co/hJjC4PFV/Screenshot-2026-02-06-at-12-28-27-PM.png',
    shortDescription: 'A mindful fitness tracking application focused on holistic wellness.',
    fullDescription: 'Aura is a revolutionary fitness application designed to bridge the gap between physical health and mental well-being. The project involved extensive user research to understand the friction points in existing fitness trackers.',
    process: [
      {
        id: 'ps1-1',
        title: 'User Research',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
        description: 'Conducted interviews with 50+ fitness enthusiasts to identify core pain points in daily habit tracking.'
      },
      {
        id: 'ps1-2',
        title: 'Wireframing',
        image: 'https://images.unsplash.com/photo-1541462608141-ad4d054c08e9?auto=format&fit=crop&q=80&w=800',
        description: 'Iterative low-fidelity wireframes focusing on the user journey from awakening to sleep.'
      },
      {
        id: 'ps1-3',
        title: 'Final UI Design',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        description: 'The final design utilizes a calming palette of sage and obsidian to reflect mindfulness.'
      }
    ]
  },
  {
    id: 'p2',
    title: 'Vinyl- A timeless sound',
    category: 'Editorial Design',
    coverImage: 'https://i.ibb.co/kpV5gbD/cover-page.jpg',
    shortDescription: 'A minimalist print publication exploring modern typography trends.',
    fullDescription: 'This editorial project focused on the tension between classical serif typefaces and brutalist layout structures.',
    process: [
      {
        id: 'ps2-1',
        title: 'Layout Exploration',
        image: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80&w=800',
        description: 'Experimenting with unconventional grid systems to challenge readability vs. aesthetic.'
      },
      {
        id: 'ps2-2',
        title: 'Paper Selection',
        image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800',
        description: 'Choosing tactile paper stocks to enhance the physical experience of the magazine.'
      }
    ]
  },
  {
    id: 'p3',
    title: 'Creating a Website from scratch',
    category: 'Web Development',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    shortDescription: 'A high-performance portfolio site for an architectural firm.',
    fullDescription: 'Nexus is a fast, responsive web platform built for high-end architects to showcase large-format photography without compromising on load speed.',
    process: [
      {
        id: 'ps3-1',
        title: 'Architecture Strategy',
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
        description: 'Planning the component-based structure to ensure scalability and ease of updates.'
      }
    ]
  },
  {
    id: 'p4',
    title: 'Rayve- an electric car brand',
    category: 'Branding',
    coverImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=1200',
    shortDescription: 'Brand identity for an organic, sustainable skincare line.',
    fullDescription: 'Bloom needed a visual language that communicated both laboratory precision and botanical origins.',
    process: [
      {
        id: 'ps4-1',
        title: 'Logo Iteration',
        image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bde2?auto=format&fit=crop&q=80&w=800',
        description: 'Developing a signature mark that balances organic curves with geometric stability.'
      }
    ]
  },
  {
    id: 'p5',
    title: 'Rebranding and marketing an existing brand',
    category: 'Digital Marketing',
    coverImage: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1200',
    shortDescription: 'Comprehensive social strategy for a global fashion label.',
    fullDescription: 'A data-driven approach to social media storytelling, resulting in a 40% increase in organic engagement.',
    process: [
      {
        id: 'ps5-1',
        title: 'Content Pillar Creation',
        image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=800',
        description: 'Defining the thematic areas for storytelling across Instagram, TikTok, and Pinterest.'
      }
    ]
  },
  {
    id: 'p6',
    title: 'Calendar design- based on Warli art',
    category: 'Illustration',
    coverImage: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=1200',
    shortDescription: 'A series of digital illustrations imagining futuristic urban landscapes.',
    fullDescription: 'Exploration of light and shadow in a fictional mega-city, blending cyberpunk elements with traditional ink styles.',
    process: [
      {
        id: 'ps6-1',
        title: 'Sketching Phase',
        image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800',
        description: 'Initial concept art focusing on scale and silhouette.'
      }
    ]
  }
];

export const INTERESTS: Interest[] = [
  {
    id: 'i1',
    name: 'Aerial',
    image: 'https://images.unsplash.com/photo-1518131394553-c3574189332e?auto=format&fit=crop&q=80&w=800',
    description: 'Defying gravity through silks and hoops. Aerial art is my moving meditation.'
  },
  {
    id: 'i2',
    name: 'Sketching',
    image: 'https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&q=80&w=800',
    description: 'The rawest form of communication. I carry a sketchbook everywhere.'
  },
  {
    id: 'i3',
    name: 'Cooking',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&q=80&w=800',
    description: 'Capturing the fleeting moments between shadows and light.'
  }
];
