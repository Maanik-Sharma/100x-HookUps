import Link from 'next/link';

const AttackModeButton = () => {
  return (
    <Link href="https://gangstaphilosophy.com/attack-mode" passHref>
      <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
        Get Attack Mode
      </button>
    </Link>
  );
};

export default AttackModeButton;
