import ErrorPage from "./ErrorPage.tsx";
import { useErrorPage } from "./hooks/useErrorPage.tsx";
import { useHeroData } from "./hooks/useHeroData.tsx";

const AboutMe = () => {
    const { isError, key } = useErrorPage();
    const aboutMe = useHeroData(key);

    if (isError) return <ErrorPage />;

    return (
        <div className="flex justify-between items-start">
            <div className="text-[1.7em] text-justify leading-[1.6]">
                {Object.entries(aboutMe).map(([k, v]) => {
                    if (k === "image") return null;
                    const label = k.replace(/_/g, ' ').replace(/^\w/, c => c.toUpperCase());
                    return <p key={k}>{label}: {v}</p>;
                })}
            </div>
            <img className="w-1/2" src={aboutMe.image} alt={aboutMe.name}/>
        </div>
    );
};

export default AboutMe;
