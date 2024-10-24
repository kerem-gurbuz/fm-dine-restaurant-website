import { FeatureHighlight } from './feature-highlight';
import { CurveTopLeft, CurveTopRight } from './patterns';

export function AboutSection() {
  return (
    <section id="about-section" className="relative">
      <div className="container max-w-[1110px] px-6 md:px-[97.5px] xl:px-0">
        <FeatureHighlight />
      </div>
      <CurveTopRight />
      <CurveTopLeft />
    </section>
  );
}
