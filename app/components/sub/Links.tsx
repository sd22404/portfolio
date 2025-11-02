import Button from '../ui/Button';
import Link from '../ui/Link';
import Text from '../ui/Text';
import { Github, Linkedin, Mail } from '../ui/Icons';

export default function Links({className = '', variant = 'text'}: {className?: string, variant?: 'text' | 'button'}) {

    return (
        variant === 'text' ? (
            <div className={className}>
                <Link href="mailto:finlay.j.cooper137@gmail.com" external variant="text" className="flex items-center gap-1">
                    <span className="text-accent-quaternary"><Mail size={20} /></span>
                    <span className="inline-flex"><Text variant='ornament'>[</Text>Email<Text variant='ornament'>]</Text></span>
                </Link>
                <Link href="https://github.com/sd22404" external variant="text" className="flex items-center gap-1">
                    <span className="text-accent-quaternary"><Github size={20} /></span>
                    <span className="inline-flex"><Text variant='ornament'>[</Text>GitHub<Text variant='ornament'>]</Text></span>
                </Link>
                <Link href="https://linkedin.com/in/finlay-cooper" external variant="text" className="flex items-center gap-1">
                    <span className="text-accent-quaternary"><Linkedin size={20} /></span>
                    <span className="inline-flex"><Text variant='ornament'>[</Text>LinkedIn<Text variant='ornament'>]</Text></span>
                </Link>
            </div>
        ) : (
            <div className={className}>
                <Button href="https://linkedin.com/in/finlay-cooper" external variant="ghost">
                    <span className="text-accent-quaternary"><Linkedin size={24} /></span>
                </Button>
                <Button href="https://github.com/sd22404" external variant="ghost">
                    <span className="text-accent-quaternary"><Github size={24} /></span>
                </Button>
                <Button href="mailto:finlay.j.cooper137@gmail.com" external variant="ghost">
                    <span className="text-accent-quaternary"><Mail size={24} /></span>
                </Button>
            </div>
        )
    )
}
