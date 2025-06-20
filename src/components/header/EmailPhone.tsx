import { useState } from 'react';

const EmailPhone = () => {
  const [copied, setCopied] = useState('');

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(text);
      setTimeout(() => setCopied(''), 2000);
    });
  };

  return (
    <div className='p-4'>
      <div className='border-b border-white pb-8'>
        <div className='mb-2'>
          <div className='flex justify-between'>
            <div className='text-white text-sm font-bold'>Email Address</div>
            {copied === 'lucas.lfs.souza@gmail.com' && (
              <span className='text-green-400 text-xs mb-1'>Copied!</span>
            )}
          </div>
          <div className='flex items-center justify-between'>
            <div className='text-white/40 text-xs mr-2'>
              lucas.lfs.souza@gmail.com
            </div>
            <button
              className='text-primary-green text-xs border border-green-500 px-2 py-1 rounded cursor-pointer'
              onClick={() => handleCopy('lucas.lfs.souza@gmail.com')}
            >
              Copy
            </button>
          </div>
        </div>
        <div>
          <div className='flex justify-between'>
            <div className='text-white text-sm font-bold'>Phone Number</div>
            {copied === '+352691624730' && (
              <span className='text-green-400 text-xs mb-1'>Copied!</span>
            )}
          </div>

          <div className='flex items-center justify-between'>
            <div className='text-white/40 text-xs mr-2'>+352691624730</div>
            <button
              className='text-primary-green text-xs border border-green-500 px-2 py-1 rounded cursor-pointer'
              onClick={() => handleCopy('+352691624730')}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailPhone;
