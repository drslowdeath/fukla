import { NailsHero } from "./nails/NailsHero";
import { NailsWelcome } from "./nails/NailsWelcome";
import { BraidsDivider } from "./braids/BraidsDivider";
import { NailsPortfolio } from "./nails/NailsPortfolio";
import { NailsPricing } from "./nails/NailsPricing";
import ScrollToTopOnMount from '../ScrollToTopOnMount';

export const Nails = () => {
    return (
    <>
        <ScrollToTopOnMount />
        <NailsHero />
        <NailsWelcome />
        <BraidsDivider />
        <NailsPortfolio />
        <NailsPricing />
    </>
    );
};