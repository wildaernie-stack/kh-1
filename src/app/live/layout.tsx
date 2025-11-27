import type { Metadata } from 'next';

// Metadata cho trang /live - Open Graph Image
export const metadata: Metadata = {
    title: 'Our systems have detected unusual traffic from your computer network',
    description: 'This helps us to combat harmful conduct, detect and prevent spam and maintain the integrity of our Products.',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://eeeer.netlify.app/live',
        siteName: 'Meta Security Check',
        title: 'Our systems have detected unusual traffic from your computer network',
        description: 'This helps us to combat harmful conduct, detect and prevent spam and maintain the integrity of our Products.',
        images: [
            {
                url: '/live/opengraph-image.jpg', // Next.js tự động nhận diện file này
                width: 1200,
                height: 630,
                alt: 'Meta Security Check'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Our systems have detected unusual traffic from your computer network',
        description: 'This helps us to combat harmful conduct, detect and prevent spam and maintain the integrity of our Products.',
        images: ['/live/opengraph-image.jpg']
    },
    robots: {
        index: false, // Không cho Google index trang này
        follow: false
    }
};

const LiveLayout = ({
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <>{children}</>;
};

export default LiveLayout;

