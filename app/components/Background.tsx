export default function Background() {
    return (
        <div className="absolute inset-0 -z-10 pointer-events-none bg-background w-full h-full overflow-hidden">
            {Array.from({ length: 20 }).map((_, index) => {
                const size = 1 + Math.random() * 10;
                const colours = ['accent', 'accent-secondary', 'accent-tertiary', 'accent-quaterniary'];
                const colour = colours[Math.floor(Math.random() * colours.length)];
                return (
                    <div
                        key={index}
                        className={`absolute rounded-full`}
                        style={{
                            outline: `color-mix(in oklab, var(--${colour}), transparent) 1px solid`,
                            width: `${size}rem`,
                            height: `${size}rem`,
                            top: `${10 + Math.random() * 80}%`,
                            left: `${5 + Math.random() * 90}%`,
                        }}
                    />
                );
            })}
        </div>
    );
}
