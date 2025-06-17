import Main from '@/components/main/Main';
import NavBar from '@/components/navbar/NavBar';
import Header from '@/components/header/Header';

export default function Home() {
  return (
    <div className='bg-black flex w-full h-screen p-[0.8rem] overflow-hidden'>
      <Header />
      <Main />
      <NavBar />
    </div>
  );
}
