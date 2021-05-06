type Props = {
  href: string;
  label: string;
};
const DownloadButton: React.FC<Props> = ({ href, label }) => {
  return (
    <a
      className="bg-red-500 w-32 rounded-xl py-2 px-2 m-2 text-white inline-block flex justify-center items-center"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
          clipRule="evenodd"
        />
      </svg>
      {label}
    </a>
  );
};

export default DownloadButton;
