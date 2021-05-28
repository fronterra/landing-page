import { FaArrowRight } from "react-icons/fa";
import { urlObjectKeys } from "next/dist/next-server/lib/utils";

/** holds data about the menu bar, including display names, ids, and href properties */
export const menuData = {
    keys: ['github'],
    values: {
        documentation: {
            display: "Documentation",
            id: "documentation",
            href: "/documentation"
        },
        fronterra: {
            display: "FronTERRA",
            id: "fronterra",
            href: "/fronterra"
        },
        digest: {
            display: "Digest",
            id: "digest",
            href: "/digest"
        },
        contact: {
            display: "Contact",
            id: "contact",
            href: "/contact"
        },
        github: {
            display: "GitHub",
            id: "github",
            href: "https://github.com/pollution-project",
            isExternal: true
        }
    }
};

export const homePageData = {
    id: "home",
    heading: "Crowdsourced Solutions to Pollution Reporting",
    subheading: "A free, open-source software aimed at helping communities fight industrial pollution from the local level.",
    cta: "Check out our San Diego - Tijuana pilot program!",
    ctaButton: {
        content: "Binational Pilot",
        href: "/fronterra"
    },
    images: {
        image1: require('../public/images/hero/image1.svg'),
    }
};

export const generalPageData = {
    keys: ["fronterra", "digest", "documentation", "contact"],
    values: {}
};

// export const heroSectionData = {
//     id: 'hero',
//     lightBg: true,
//     lightText: false,
//     lightTextDesc: false,
//     topLine: 'Pollution Reporting',
//     headline: 'Crowdsourced Pollution Reporting',
//     description:
//       'To capture your swing, just scan the QR code featured on selected tee-boxes at our partner golf courses, and follow the instructions. In a matter of seconds, a professional recording of your shot will be sent directly to your inbox.',
//     buttonLabel: 'Get Started',
//     imgStart: false,
//     img: require('../../public/images/.svg'),
//     alt: 'Car',
//     dark: false,
//     primary: false,
//     darkText: true,
//     formElement: false
// };