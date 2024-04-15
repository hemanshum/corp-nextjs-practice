import homeImg from 'public/images/home.jpg';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <Hero
      imageData={homeImg}
      imgAlt='car factory'
      title='Professional Cloud Hosting'
    />
  );
}
