import { LinearProgress } from '@mui/material';

interface LinearProgressWithLabelProps {
  label: string;
  value: number;
}
const LinearProgressWithLabel: React.FC<LinearProgressWithLabelProps> = ({
  label,
  value,
}) => {
  return (
    <div className='mt-4'>
      <div className='flex justify-between text-white/40 text-sm mb-1'>
        <div>{label}</div>
        <div>{value}%</div>
      </div>
      <LinearProgress
        variant='determinate'
        value={value}
        sx={{
          height: 10,
        }}
      />
    </div>
  );
};

export default LinearProgressWithLabel;
