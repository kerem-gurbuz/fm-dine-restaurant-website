import { FeatureHighlight } from './feature-highlight';
import { CurveTopLeft, CurveTopRight } from './patterns';

export function AboutSection() {
  return (
    <section id="about-section" className="relative">
      <div className="container max-w-[1110px] px-6 md:px-[97.5px] xl:px-0">
        <FeatureHighlight />
      </div>
      <CurveTopRight className="absolute left-0 right-1/2 top-[100px] hidden md:flex lg:right-[calc(50%-175px)] lg:top-[250px]" />
      <CurveTopLeft className="absolute bottom-0 left-1/2 right-0 hidden md:flex lg:left-[calc(50%-175px)]" />
    </section>
  );
}
