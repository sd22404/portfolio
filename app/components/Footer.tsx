import Text from './ui/Text';

export default function Footer() {
  return (
    <footer className="border-t border-slate-700/50 bg-slate-900/50 py-8">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <Text variant="small">
          Built with Next.js & Tailwind CSS | © 2025
        </Text>
      </div>
    </footer>
  );
}
