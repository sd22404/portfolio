import GoLBackground from "@/app/components/sub/GoLBackground";

export default function Background({variant = 'default'}: {variant?: 'default' | 'gol'}) {
    return (
        <>
            {variant == 'gol' ? <GoLBackground /> :
            <div className={`absolute inset-0 -z-10 bg-background w-full h-full overflow-hidden`}></div>}
        </>
    );
}