import Card from "../ui/Card";
import Subtitle from "../ui/Subtitle";
import Text from "../ui/Text";

export default function Award({ name, description, svg }: { name: string; description: string; svg: string }) {
    return (
        <Card variant="highlight" className="flex justify-between items-center w-full">
            <div>
                <Subtitle variant="small">{name}</Subtitle>
                <Text variant="small">{description}</Text>
            </div>
            <span className="z-10 transition-transform duration-300 group-hover:scale-110 text-accent">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-8 w-8 inline"
                    aria-hidden="true"
                    focusable="false"
                >
                    <path d={svg} fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
            </span>
        </Card>
    );
}