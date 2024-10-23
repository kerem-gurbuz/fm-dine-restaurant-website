import { RESTAURANT_FEATURES } from '@/lib/constants/home-page/about-section';
import { FeatureHighlight } from './feature-highlight';

export function AboutSection() {
  return (
    <section id="about-section">
      <div className="container max-w-[1110px] px-6 md:px-[97.5px] xl:px-0">
        <div className="space-y-[101px] md:space-y-[118px]">
          {RESTAURANT_FEATURES.map((feature, index) => (
            <FeatureHighlight key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
