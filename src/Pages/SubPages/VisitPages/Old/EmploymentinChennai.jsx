import React from 'react'
import Marquee from "react-fast-marquee";
import "../Css/CostLivinginChennai.css"

export default function EmploymentinChennai() {

const single = [
    {
      id: 1,
      title: 'Automotive and Engineering Leadership',
      para: 'Chennai, frequently referred to as the "Detroit of Asia," offers substantial job opportunities in the automotive and engineering fields, hosting many manufacturing facilities and support industries.',
      imgs: '/images/costofliving/AccomodationIcon.svg',
    },
    {
      id: 2,
      title: ' Electronics and Hardware Production',
      para: 'The city has developed into a significant center for electronics and hardware production, generating employment in manufacturing, assembly, and associated sectors. ',
      imgs: '/images/costofliving/GroceriesIcon.svg',
    },
];
const couple = [
    {
      id: 1,
      title: 'Information Technology and Software Services',
      para: 'Chennai serves as a prominent IT center, accommodating various local and global software firms, resulting in significant job opportunities in software creation, IT assistance, and associated positions.',
      imgs: '/images/costofliving/AccomodationIcon.svg',
    },
    {
      id: 2,
      title: 'Banking, Finance, and Insurance',
      para: "The financial services industry is a major employer in Chennai, with numerous banks, financial entities, and insurance firms well-established in the area.",
      imgs: '/images/costofliving/GroceriesIcon.svg',
    },
];
const family = [
    {
      id: 1,
      title: 'Healthcare and Medical Tourism',
      para: "Chennai's status as a healthcare hub promotes job opportunities in hospitals, clinics, and associated medical services.",
      imgs: '/images/costofliving/AccomodationIcon.svg',
    },
    {
      id: 2,
      title: 'Varied and Expanding Industries',
      para: "There are also prospects in areas such as petrochemicals, textiles, entertainment, and logistics, showcasing the city's diverse economy.",
      imgs: '/images/costofliving/GroceriesIcon.svg',
    },
    {
      id: 3,
      title: 'Find some IT parks in Chennai here',
      para: "OMR (Old Mahabalipuram Road) – Commonly referred to as the IT Corridor, it hosts leading tech parks, software firms, and startups",
      imgs: '/images/costofliving/CommuteIcon.svg',
    },
    {
      id: 4,
      title: 'Tidel Park & Ramanujan IT City ',
      para: 'Hub for multinational companies, fintech enterprises, and research labs. ',
      imgs: '/images/costofliving/UtilitiesIcon.svg',
    },
    {
      id: 5,
      title: 'Porur & DLF IT Park',
      para: ' Fast-expanding technology center for IT/ITES firms',
      imgs: '/images/costofliving/UtilitiesIcon.svg',
    },
    {
      id: 6,
      title: 'Guindy & Taramani',
      para: 'A combination of IT parks, governmental agencies, and industrial facilities with superb metro connectivity.',
      imgs: '/images/costofliving/UtilitiesIcon.svg',
    },
    {
      id: 7,
      title: 'Ambattur Industrial Estate',
      para: 'A vital area for production, engineering, and industrial assistance positions.',
      imgs: '/images/costofliving/UtilitiesIcon.svg',
    },
    {
      id: 8,
      title: 'Chennai Central Business District (CBD)',
      para: 'Comprises Nungambakkam, T. Nagar, and Mount Road – ideal for careers in finance, consulting, and retail.',
      imgs: '/images/costofliving/UtilitiesIcon.svg',
    },
    {
      id: 8,
      title: 'Sriperumbudur and Oragadam',
      para: 'Key centers for automotive, electronics, and large-scale manufacturing.',
      imgs: '/images/costofliving/UtilitiesIcon.svg',
    },
];

  return (
    <>
        <section className='inpageBan'>
            <img src="/images/clcbanimg.jpg" alt=""/>
        </section>
        <section className='costlcIntrosec Secpadblock bg-white'>
            <div className='container max-w-7xl mx-auto'>
                <div className='SecTitletb text-center mb-[8vh]'>
                    <h2>A Center for Various Job Prospects</h2>
                    <p>Chennai's strong economy provides a diverse array of job opportunities in <br/>
                    multiple sectors, drawing skilled individuals from the surrounding area and further <br/>
                    afield. The vibrant job market in the city accommodates both experienced <br/>
                    professionals and individuals looking for beginner roles. </p>
                </div>
            </div>
            <div className='marqueetag'>
                 <Marquee>
                    Employment in chennai
                    Employment in chennai
                    Employment in chennai
                </Marquee>                
            </div>
        </section>
        <section className='clcSecscrl flex'>
            <div className='clcscrlCol clcscrlLft relative'>
                <div className='clcscrlinLBox sticky top-0'>
                    <img src="/images/clcscrlImg.jpg" alt=""/>
                    <div className='clcscrLtitle bg-[#7d377c] relative'>
                        <h2 className='flex flex-col'><small> A Robust Industrial and Manufacturing Foundation</small></h2>
                        <p>Providing essential sector employment opportunities.</p>
                    </div>
                </div>
            </div>
            <div className='clcscrlCol clcscrlRight padbtm'>
                <div className='clcscrlinRBox'>
                    {single.map((user) => (
                        <div key={user.id} className='clcboxItemss flex'>
                            <div className='clcboxIImg'>
                                <img src={user.imgs} alt={user.title}/>
                            </div>
                            <div className='clcboxICont'>
                                <h3>{user.title}</h3>
                                <p>{user.para}</p>
                                <p className='linkpara'><a href="#"><img src='/images/costofliving/LinkArrowRightIcon.svg' alt=''/></a></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <section className='clcSecscrl clcSecscrlTwo bg-[#7d377c] flex'>
            <div className='clcscrlCol clcscrlLft relative'>
                <div className='clcscrlinLBox sticky top-0'>
                    <img src="/images/clcscrCoplImg.jpg" alt=""/>
                    <div className='clcscrLtitle bg-[#672866] relative'>
                        <h2 className='flex flex-col'><small>An Expanding IT and Services Industry</small> </h2>
                        <p>Fueling contemporary employment opportunities. </p>
                        <div className='boxttlsec'> Couple</div>
                    </div>
                </div>
            </div>
            <div className='clcscrlCol clcscrlRight padbtm'>
                <div className='clcscrlinRBox'>
                    {couple.map((user) => (
                        <div key={user.id} className='clcboxItemss flex'>
                            <div className='clcboxIImg'>
                                <img src={user.imgs} alt={user.title}/>
                            </div>
                            <div className='clcboxICont'>
                                <h3>{user.title}</h3>
                                <p>{user.para}</p>
                                <p className='linkpara'><a href="#"><img src='/images/costofliving/LinkArrowRightIcon.svg' alt=''/></a></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <section className='clcSecscrl clcSecscrlThree bg-[#ffffff] flex'>
            <div className='clcscrlCol clcscrlLft relative'>
                <div className='clcscrlinLBox sticky top-0'>
                    <img src="/images/clcscrfamilylImg.jpg" alt=""/>
                    <div className='clcscrLtitle bg-[#672866] relative'>
                        <h2 className='flex flex-col'><small>Emerging and Varied Opportunities</small> </h2>
                        <p>ABroadening the Job Market.</p>
                        <div className='boxttlsec'> Family</div>
                    </div>
                </div>
            </div>
            <div className='clcscrlCol clcscrlRight padbtm'>
                <div className='clcscrlinRBox'>
                    {family.map((user) => (
                        <div key={user.id} className='clcboxItemss flex'>
                            <div className='clcboxIImg'>
                                <img src={user.imgs} alt={user.title}/>
                            </div>
                            <div className='clcboxICont'>
                                <h3>{user.title}</h3>
                                <p>{user.para}</p>
                                <p className='linkpara'><a href="#"><img src='/images/costofliving/LinkArrowRightIcon.svg' alt=''/></a></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}