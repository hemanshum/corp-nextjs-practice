import scaleImg from 'public/images/scale.jpg';
import Hero from '@/components/hero';

export default function ReliabilityPage() {
  return (
    <Hero
      imageData={scaleImg}
      imgAlt='steel factory'
      title='Scale your app to infinity'
    />
  );
}
