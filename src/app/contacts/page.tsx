import { useRouter } from 'next/router';
export default function Contacts() {
  const router = useRouter();
  return (
    <>
      <div className='p-12'>
        <div className='mb-6'>Oooops...</div>
        <div> CONTACTS SESSION WILL BE AVAILABLE SOON...</div>
      </div>
      <div className='flex justify-center items-center'>
        <button
          className='bg-green-500 rounded-xl text-black font-bold p-6'
          onClick={() => router.back()}
        >
          Go Back
        </button>
      </div>
    </>
  );
}
