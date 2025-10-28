import SectionHeading from './ui/SectionHeading';
import Section from './ui/Section';
import Card from './ui/Card';
import Link from './ui/Link';
import Text from './ui/Text';

export default function Contact() {
    return (
        <Section id="contact">
            <SectionHeading number="06">Get In Touch</SectionHeading>
            <Card variant="glow" className="max-w-2xl mx-auto text-center space-y-6">
                <Text variant="medium">
                    Contact me...
                </Text>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
                    <div className="flex gap-4">
                        <Link href="mailto:finlay.j.cooper137@gmail.com" variant="text" className="flex items-center gap-1">
                            <Text variant='ornament-alt'>[em]</Text>
                            Email
                        </Link>
                        <Link href="https://github.com/sd22404" variant="text" className="flex items-center gap-1">
                            <Text variant='ornament-alt'>[git]</Text>
                            GitHub
                        </Link>
                        <Link href="https://linkedin.com/in/finlay-cooper" variant="text" className="flex items-center gap-1">
                            <Text variant='ornament-alt'>[in]</Text>
                            LinkedIn
                        </Link>
                    </div>
                </div>
            </Card>
        </Section>
    );
}
