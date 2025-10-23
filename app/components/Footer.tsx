import Text from './ui/Text';

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background-lighter/50 py-8">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <Text variant="small">
          Built with Next.js & Tailwind CSS | © 2025
        </Text>
      </div>
    </footer>
  );
}
