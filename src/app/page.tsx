import Main from '@/components/Main';
import NavBar from '@/components/NavBar';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className='bg-red-500 flex grid grid-cols-12 h-screen'>
      <Header />
      <Main />
      <NavBar />
    </div>
  );
}
