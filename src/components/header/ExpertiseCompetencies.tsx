import LinearProgressWithLabel from './LinearProgressWithLabel';

const ExpertiseCompetencies = () => {
  return (
    <div className='p-4'>
      <div className='text-white'>Expertise and Competencies</div>
      <div className='border-b border-white pb-8'>
        <LinearProgressWithLabel label='React' value={70} />
        <LinearProgressWithLabel label='Backend' value={50} />
        <LinearProgressWithLabel label='Tailwind' value={65} />
        <LinearProgressWithLabel label='Typescript' value={70} />
      </div>
    </div>
  );
};

export default ExpertiseCompetencies;
