import Image from 'next/image';
import Link from 'next/link';

interface NormalHeroButtonProps {
  href: string;
  imageUrl: string;
  title: string;
  description: string;
}

const NormalHeroButton = ({ href, imageUrl, title, description }: NormalHeroButtonProps) => {
  return (
    <Link href={href} className="relative flex items-center px-3 py-4 bg-white text-gray-800 rounded-[30px] shadow-lg border border-gray-300 space-x-4 hover:bg-gray-100 transition-all">
      <div className="flex-shrink-0">
        <Image
          src={imageUrl}
          alt={title}
          width={40}
          height={40}
        />
      </div>
      <div className="text-left">
        <h3 className="text-xs font-semibold">{title}</h3>
        <p className="text-xs">{description}</p>
      </div>
      <span className="absolute top-2 right-4 bg-blue-700 text-white text-xs font-bold rounded-full px-2 py-1 transform translate-x-1/2 -translate-y-1/2">
        New
      </span>
    </Link>
  );
};

export default NormalHeroButton;
