import Link from '../ui/Link';
import Text from '../ui/Text';

export type LinkItem = {
    href: string;
    label: string;
    variant?: 'text' | 'underline' | 'button';
}

export default function Header({ links = [] as LinkItem[] }) {
    return (
        <header className="border-b border-border/50 bg-background-lighter/50 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-5xl 2xl:max-w-7xl mx-auto px-6">
                <nav className="flex items-center justify-between">
                    <Link
                        variant="button"
                        href="/#"
                        className="py-3 gap-1 inline-flex items-center hover:scale-105"
                    >
                        <Text variant="ornament" className='text-xl!'>[</Text>
                        <span className="font-bold text-3xl bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent text-nowrap">Finn Cooper</span>
                        <Text variant="ornament" className='text-xl!'>]</Text>
                    </Link>

                    <div className="ml-6 flex flex-1 overflow-x-auto min-w-0 scroll-smooth hide-scrollbar">
                        <div className="ml-auto flex gap-6 flex-nowrap">
                            {links.map((link, index) =>
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    variant={link.variant}
                                    className="transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-1 py-4"
                                >
                                    <Text variant="ornament">
                                        [{String(index + 1).padStart(2, '0')}]
                                    </Text>
                                    {link.label}
                                </Link>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
