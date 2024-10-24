export function CurveTopRight() {
  return (
    <div className="absolute left-0 right-1/2 top-[100px] hidden overflow-hidden rounded-tr-[100px] md:flex lg:right-[calc(50%-175px)] lg:top-[250px]">
      <div className="w-full bg-[#5C6779] opacity-[.077]" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        width="895"
        height="320"
      >
        <path
          fill="#5C6779"
          fillRule="evenodd"
          d="M795 0H0v320h895V100C895 44.772 850.228 0 795 0z"
          opacity=".077"
        />
      </svg>
    </div>
  );
}
