import LinearProgressWithLabel from './LinearProgressWithLabel';

const ExpertiseCompetencies = () => {
  return (
    <div className='p-4'>
      <div className='text-white'>Expertise and Competencies</div>
      <LinearProgressWithLabel label='React Developer' value={70} />
      <LinearProgressWithLabel label='Backend' value={50} />
      <LinearProgressWithLabel label='Tailwind' value={65} />
      <LinearProgressWithLabel label='Typescript' value={75} />
    </div>
  );
};

export default ExpertiseCompetencies;
