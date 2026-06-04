import BackgroundSlider from '@/components/BackgroundSlider';
import LoginCard from '@/components/LoginCard';

export default function Home() {
  return (
    <main className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <BackgroundSlider />
      <LoginCard />
    </main>
  );
}