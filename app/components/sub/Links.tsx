import Button from '../ui/Button';
import Link from '../ui/Link';
import Text from '../ui/Text';
import { githubIcon, linkedinIcon, emailIcon } from '../ui/Icons';

export default function Links({className = '', variant = 'text'}: {className?: string, variant?: 'text' | 'button'}) {

    return (
        variant === 'text' ? (
            <div className={className}>
                <Link href="mailto:finlay.j.cooper137@gmail.com" external variant="text" className="flex items-center gap-1">
                    <Text variant='ornament-alt'>[em]</Text>
                    Email
                </Link>
                <Link href="https://github.com/sd22404" external variant="text" className="flex items-center gap-1">
                    <Text variant='ornament-alt'>[git]</Text>
                    GitHub
                </Link>
                <Link href="https://linkedin.com/in/finlay-cooper" external variant="text" className="flex items-center gap-1">
                    <Text variant='ornament-alt'>[in]</Text>
                    LinkedIn
                </Link>
            </div>
        ) : (
            <div className={className}>
                <Button href="https://linkedin.com/in/finlay-cooper" external variant="ghost">
                    {linkedinIcon}
                </Button>
                <Button href="https://github.com/sd22404" external variant="ghost">
                    {githubIcon}
                </Button>
                <Button href="mailto:finlay.j.cooper137@gmail.com" external variant="ghost">
                    {emailIcon}
                </Button>
            </div>
        )
    )
}
