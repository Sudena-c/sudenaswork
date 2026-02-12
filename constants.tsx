
import { Project, Interest } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'MealMate',
    category: 'UI/UX',
    coverImage: 'https://i.ibb.co/MkDmBbxP/Screenshot-2026-02-12-at-5-10-17-PM.png',
    shortDescription: 'A collaborative meal-planning platform for shared households.',
    fullDescription: 'MealMate is a collaborative meal-planning platform designed for people sharing a household. Users create individual profiles by adding food preferences, dietary choices, and commonly available groceries at home. Based on this information, the platform suggests daily meal options that align with both household inventory and collective preferences.',
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
    title: 'Vinyl- a timeless sound',
    category: 'Editorial Design',
    coverImage: 'https://i.ibb.co/kpV5gbD/cover-page.jpg',
    shortDescription: 'A minimalist print publication talking about the Vinyl, the importance, history, making and some famous records.',
    fullDescription: 'This coffee table book explores the cultural legacy of vinyl records as both a medium of sound and a symbol of timeless music. The project focuses on visual storytelling through print, combining archival imagery, editorial layouts, and narrative pacing to create a tactile reading experience.',
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
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    shortDescription: 'A custom portfolio experience built with React and Tailwind',
    fullDescription: 'A high-performance web platform designed to handle large media assets while maintaining a minimalist aesthetic and lightning-fast load times.',
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
    coverImage: 'https://i.ibb.co/DHRYgS77/Free-Billboard-Mockup-2nd-draft-blue-copy.jpg',
    shortDescription: 'Visual identity for a forward-thinking EV startup.',
    fullDescription: 'RAYVE is a solar-powered electric vehicle brand designed for modern urban commuters who value sustainability without compromising on style or efficiency. RAYVEs identity reflects conscious innovation—quiet, responsible, and forward-looking—built for individuals who want their daily choices to contribute to a cleaner future.',
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
    title: 'Rebranding and Marketing an existing brand',
    category: 'Digital Marketing',
    coverImage: 'https://i.ibb.co/v4hF73HL/Screenshot-2026-01-29-at-11-05-53-AM.png',
    shortDescription: 'Campaign design and market positioning for an existing business.',
    fullDescription: 'Built a social media campaign for an existing brand- Tea Better after doing some in depth research on the brand, its value, and market position, leading to rebranding them.',
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
    coverImage: 'https://i.ibb.co/zVS4zwpV/Screenshot-2026-01-29-at-11-07-33-AM.png',
    shortDescription: 'A series of vector illustrations inspired by traditional folk art',
    fullDescription: 'This series explores the intricate patterns found in Warli tribal art and translates them into a modern calendar format with a minimal color palette.',
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
