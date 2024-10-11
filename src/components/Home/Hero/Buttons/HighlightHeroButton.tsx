import Image from 'next/image';
import Link from 'next/link';

const HighlightHeroButton = () => {
  return (
    <Link href="/highlight-page" className="flex items-center px-3 py-4 bg-blue-600 text-white rounded-[30px] shadow-lg space-x-4 hover:bg-blue-700 transition-all">
      <div className="flex-shrink-0">
        <Image
          src="/images/home/icons/medical-team.png" // replace with your own asset URL
          alt="Doctor Icon"
          width={40}
          height={40}
        />
      </div>
      <div className="text-left">
        <h3 className="text-xs font-semibold">Doctor Channelling</h3>
        <p className="text-xs">Channel a doctor</p>
      </div>
    </Link>
  );
};

export default HighlightHeroButton;
