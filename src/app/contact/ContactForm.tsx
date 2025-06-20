import React from 'react';
import { useForm } from 'react-hook-form';
import PersonIcon from '@mui/icons-material/Person';
import { Email } from '@mui/icons-material';
import TextsmsIcon from '@mui/icons-material/Textsms';
import { Button } from '@mui/material';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.success) {
      alert('Message successfully sent!');
    } else {
      alert('Error sending the email.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='bg-black/30 rounded-xl p-4'
    >
      <h3 className='text-white text-left text-lg font-semibold flex-start mb-4'>
        Get In Touch
      </h3>
      <div className='flex flex-col gap-4'>
        <div className='p-2 flex w-full bg-black rounded-xl gap-4 border border-transparent focus-within:border-green-500 group'>
          <PersonIcon className='text-white group-focus-within:text-green-500' />
          <input
            id='name'
            {...register('name', { required: 'Name is required' })}
            placeholder='Name'
            className='w-full bg-transparent text-white border-none focus:outline-none'
            autoComplete='off'
          />
        </div>
        {errors.name && (
          <p className='text-red-500 text-xs'>{errors.name.message}</p>
        )}

        <div className='p-2 flex w-full bg-black rounded-xl gap-4 border border-transparent focus-within:border-green-500 group'>
          <Email className='text-white group-focus-within:text-green-500' />
          <input
            id='email'
            type='email'
            placeholder='Email'
            autoComplete='off'
            className='w-full bg-transparent text-white border-none focus:outline-none'
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            })}
          />
        </div>
        {errors.email && (
          <p className='text-red-500 text-xs'>{errors.email.message}</p>
        )}

        <div className='p-2 flex w-full bg-black rounded-xl border border-transparent focus-within:border-green-500 group gap-4'>
          <TextsmsIcon className='text-white group-focus-within:text-green-500' />
          <textarea
            id='message'
            placeholder='Message'
            className='w-full bg-transparent text-white border-none focus:outline-none'
            {...register('message', { required: 'Message is required' })}
          />
        </div>
        {errors.message && (
          <p className='text-red-500 text-xs'>{errors.message.message}</p>
        )}
        <div>
          <Button type='submit'>Send Message</Button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
