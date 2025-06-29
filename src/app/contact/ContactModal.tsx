import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useRef } from 'react';
import { Button } from '@mui/material';
import { createPortal } from 'react-dom';
interface ContactModalProps {
  status: boolean;
  setIsModalOpen: (open: boolean) => void;
}
const ContactModal: React.FC<ContactModalProps> = ({
  status,
  setIsModalOpen,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsModalOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return createPortal(
    <div
      className='absolute h-100 w-100 rounded-xl bg-second-dark border flex flex-col items-center p-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'
      ref={modalRef}
    >
      <button className='flex w-full justify-end items-start mb-4'>
        <CloseIcon
          className='cursor-pointer'
          onClick={() => setIsModalOpen(false)}
        />
      </button>

      {status ? (
        <>
          <h2 className='text-center font-bold my-4'>Message Sent!</h2>
          <TaskAltIcon
            className='text-primary-green'
            sx={{ fontSize: '8rem', marginBottom: '1rem' }}
          />
          <p className='text-sm text-center mb-6'>
            Thanks for your message. I will get back to you as fast as possible!
          </p>
        </>
      ) : (
        <>
          <h2 className='text-center font-bold mb-4'>Something went wrong!</h2>
          <ErrorOutlineIcon
            className='text-red-600'
            sx={{ fontSize: '8rem', marginBottom: '1rem' }}
          />
          <p className='text-sm text-center mb-6'>
            You can still reach me out on Linkedin by hitting the button below
          </p>
          <Button href='https://linkedin.com/in/devlucassouza' target='_blank'>
            Linkedin
          </Button>
        </>
      )}
    </div>,
    document.body
  );
};

export default ContactModal;
