interface ExpertiseProps {
  title: string;
  description: string;
}

const Expertise: React.FC<ExpertiseProps> = ({ title, description }) => {
  return (
    <div className='cursor-default p-4 bg-white/10 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-green-500/50 border-b-2 border-l-2 border-r-2 border-transparent hover:border-green-500'>
      <div className='font-bold text-left text-white'>{title}</div>
      <div className='text-sm mt-2 text-gray-400 text-left'>{description}</div>
    </div>
  );
};

export default Expertise;
