export function CurveTopLeft() {
  return (
    <div className="absolute bottom-0 left-1/2 right-0 hidden overflow-hidden rounded-tl-[100px] md:flex lg:left-[calc(50%-175px)]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        width="895"
        height="320"
      >
        <path
          fill="#5C6779"
          fillRule="evenodd"
          d="M100 0h795v320H0V100C0 44.772 44.772 0 100 0z"
          opacity=".077"
        />
      </svg>
      <div className="w-full bg-[#5C6779] opacity-[.077]" />
    </div>
  );
}
