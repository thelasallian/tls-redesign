import { useRouter } from "next/router";
import Head from "next/head";
import Header from '@/components/HeaderV2/Header';
import Body from '@/components/Body/section/Body';
import Footer from '@/components/Footer/Full/Footer';

export default function SectionPage({sectionName}) {
    const sectionNameCapitalized = sectionName.charAt(0).toUpperCase() + sectionName.slice(1);

    return (
        <>
            <Head>
            <title>{sectionNameCapitalized}</title>
            </Head>
            <div className="wrapper">
                <Header section={sectionNameCapitalized}/>
                <Body/>
                <Footer/>
            </div>
        </>
        
    );
}

export async function getServerSideProps({params}) {
    const sectionName = params.sectionName;

    return {
        props: {
            sectionName: sectionName
        },
    };
}