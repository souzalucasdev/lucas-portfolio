import { NextApiRequest } from 'next';

type Recommendation = {
  id: number;
  name: string;
  image: string;
  designation: string;
  view: string;
  linkednURL: string;
};

type ResponseData = Recommendation[];

const recommendationCard: Recommendation[] = [
  {
    id: 0,
    name: 'Mattia Raffaelli',
    image: '/mattia-raffaelli.jpeg',
    designation:
      'Former Startup Founder | Tech Entrepreneur | B2B SaaS Expert | Stubborn Optimist',
    view: 'I had the opportunity to indirectly collaborate with Lucas Souza during his time at Joivy, where he played a relevant role in the development of our corporate website joivy.com, as well as contributing overall to the front-end development team. Lucas brought enthusiasm in the workplace, together with a strong sense of ownership to the front-end work. Whether it was implementing UI components, fine-tuning responsiveness, or iterating based on feedback, Lucas showed reliability, speed, and genuine curiosity in growing his skills. He was also a great team player (and an early riser like me!): he has been truly responsive, open to feedback, and always ready to contribute when the team needed support. Lucas has all the right ingredients to grow into a standout front-end developer: technical talent, a strong work ethic, and a great attitude. I fully recommend him to any company looking for a capable and committed developer.',
    linkednURL: 'https://www.linkedin.com/in/mattiaraffaelli/',
  },
  {
    id: 1,
    name: 'Marco Gianni',
    image: '/marco-gianni.jpeg',
    designation: 'Frontend Engineer | React | Next.js | TypeScript | UI/UX',
    view: 'I had the pleasure of collaborating with Lucas at Joivy. As a senior developer, I appreciated his positive attitude and strong work ethic. He learns quickly, always ready to support the team, and his work is consistently high quality. I strongly believe he will be a valuable asset to any frontend team.',
    linkednURL: 'https://www.linkedin.com/in/marco-gianni/',
  },
];

export async function GET(req: NextApiRequest) {
  try {
    return new Response(JSON.stringify(recommendationCard), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
