import Card from "../ui/Card";
import Subtitle from "../ui/Subtitle";
import Text from "../ui/Text";

export default function Award({ name, description, icon }: { name: string; description: string; icon: React.ReactNode }) {
    return (
        <Card variant="highlight" className="flex justify-between items-center w-full">
            <div>
                <Subtitle variant="small">{name}</Subtitle>
                <Text variant="small">{description}</Text>
            </div>
            <span className="z-10 transition-transform duration-300 group-hover:scale-110">
                {icon}
            </span>
        </Card>
    );
}