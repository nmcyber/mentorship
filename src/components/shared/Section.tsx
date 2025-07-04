import { cn } from '@/lib/utils'

interface SectionProps {
    children: React.ReactNode
    className?: string
    id?: string
}

export const Section: React.FC<SectionProps> = ({
    children,
    className,
    id
}) => {
    return (
        <section
            id={id}
            className={cn(
                'container mx-auto py-12 md:py-20 relative overflow-hidden',
                className
            )}
        >
            {children}
        </section>
    )
}

export default Section
