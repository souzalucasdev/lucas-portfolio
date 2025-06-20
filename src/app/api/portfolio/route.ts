type Technology = {
  tech: string;
};

type Portfolio = {
  id: number;
  projectName: string;
  url: string;
  image: string;
  projectDetail: string;
  technologiesUsed: Technology[];
};

const recommendationCard: Portfolio[] = [
  {
    id: 0,
    projectName: 'Football Stats',
    url: 'https://football-stats-dusky.vercel.app/',
    image: '/football-stats-logo.png',
    projectDetail:
      'Football Stats app helps fans effortlessly explore national and international leagues, stay up to date with upcoming matches, and access team-specific schedules with just a few clicks. With intuitive filters by league and favorite team, users can focus on what truly matters — supporting their club and never missing a game.',
    technologiesUsed: [
      {
        tech: 'ReactJS',
      },
      {
        tech: 'Typescript',
      },
      {
        tech: 'Next.js',
      },
      {
        tech: 'TailwindCSS',
      },
    ],
  },
];

export async function GET() {
  try {
    return new Response(JSON.stringify(recommendationCard), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
