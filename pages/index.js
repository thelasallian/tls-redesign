import Head from 'next/head'

import Header from '@/components/HeaderV2/Header';
import Body from '@/components/Body/index/Body';
import Footer from '@/components/Footer/Full/Footer';

export default function Home({sections}) {
  
  return (
    <>
      <Head>
          <title>The LaSallian - The bastion of issue-oriented critical thinking</title>
      </Head>

      <div className="wrapper">
        <Header section={"University"}/>
        <Body sections={sections}/>
        <Footer section={"University"}/>
      </div>
    </>
  )
}

export async function getServerSideProps({req, res}) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1, stale-while-revalidate=59'
  )
  
  const universityResponse = await fetch('https://thelasallian.com/wp-json/wp/v2/posts?_fields=id,authors,date,excerpt,title,slug,categories,jetpack_featured_media_url&per_page=6&categories=4');
  const universityArticles = await universityResponse.json();

  const menagerieResponse = await fetch('https://thelasallian.com/wp-json/wp/v2/posts?_fields=id,authors,date,excerpt,title,slug,categories,jetpack_featured_media_url&per_page=6&categories=8');
  const menagerieArticles = await menagerieResponse.json();

  const sportsResponse = await fetch('https://thelasallian.com/wp-json/wp/v2/posts?_fields=id,authors,date,excerpt,title,slug,categories,jetpack_featured_media_url&per_page=6&categories=6');
  const sportsArticles = await sportsResponse.json();

  const vanguardResponse = await fetch('https://thelasallian.com/wp-json/wp/v2/posts?_fields=id,authors,date,excerpt,title,slug,categories,jetpack_featured_media_url&per_page=6&categories=1883');
  const vanguardArticles = await vanguardResponse.json();

  const opinionResponse = await fetch('https://thelasallian.com/wp-json/wp/v2/posts?_fields=id,authors,date,excerpt,title,slug,categories,jetpack_featured_media_url&per_page=6&categories=5');
  const opinionArticles = await opinionResponse.json();

  return {
      props: {
          sections: [
              {
                  name: 'University',
                  category: 4,
                  articles: universityArticles,
              },
              {
                  name: 'Menagerie',
                  category: 8,
                  articles: menagerieArticles,
              },
              {
                  name: 'Sports',
                  category: 6,
                  articles: sportsArticles,
              },
              {
                  name: 'Vanguard',
                  category: 1883,
                  articles: vanguardArticles,
              },
              {
                  name: 'Opinion',
                  category: 5,
                  articles: opinionArticles,
              },
          ],
      },
  };
}