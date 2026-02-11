import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: 'Smart Upload',
        desc: 'Drag and Drop your assets and let our AI handle the rest.'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Instant Generation',
        desc: 'Optmized model diilivers high quality videos in seconds.'
    },
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'Video Synthesis',
        desc: 'Bring Products shots to life with short-form, social-ready videos.'
    }
];

export const plansData = [
    {
        id: 'starter',
        name: 'Starter',
        price: '$10',
        desc: 'Try Platform at low cost',
        credits: 25,
        features: [
            '25 Credits',
            'Standard Quality',
            'No Watermark',
            'Slower Generation Speed',
            'Email support'
        ]
    },
    {
        id: 'pro',
        name: 'Pro',
        price: '$29',
        desc: 'Creators & Small Teams',
        credits: 80,
        features: [
            '80 Credits',
            'HD quality',
            'No watermark',
            'Video generation',
            'Priority support'
        ],
        popular: true
    },
    {
        id: 'ultra',
        name: 'Ultra',
        price: '$99',
        desc: 'Scale across teams and agencies',
        credits: 300,
        features: [
            '300 Credits',
            'FHD quality',
            'No watermark',
            'Fast generation speed',
            'Chat + Email support'
        ]
    }
];

export const faqData = [
    {
        question: 'How does the AI generation work?',
        answer: 'We leverage state-of-the-art diffusion models trained on millions of product images to blend your product into realistic scenes while preserving details, lighting and reflections.'
    },
    {
        question: 'Do I own the generated images?',
        answer: 'Yes — you receive full commercial rights to any images and videos generated on the platform. Use them for ads, ecommerce, social media and more.'
    },
    {
        question: 'Can I cancel anytime?',
        answer: 'Yes — you can cancel from your dashboard. You will retain access through the end of your billing period.'
    },
    {
        question: 'What input formats do you support?',
        answer: 'We accept JPG, PNG and WEBP. Outputs are high-resolution PNGs and MP4s optimized for social platforms.'
    }
];

export const footerLinks = [
    {
        title: "Quick Links",
        links: [
            { name: "Home", url: "/" },
            { name: "Features", url: "/#features" },
            { name: "Pricing", url: "/#pricing" },
            { name: "FAQ", url: "/#faq" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", url: "https://aradhyakashiv.in/" },
            { name: "Terms of Service", url: "https://aradhyakashiv.in/" }
        ]
    },
    {
        title: "Connect",
        links: [
            { name: "GitHub", url: "https://github.com/ARADHYAKASHIV" },
            { name: "Instagram", url: "https://www.instagram.com/_aradhya_05_" },
            { name: "Mail", url: "mailto:kashiv.aradhya@gmail.com" }
        ]
    }
];