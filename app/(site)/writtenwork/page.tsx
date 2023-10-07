/* 'use client'; */
import React from 'react';
import Image from 'next/image';
import IMG from '/public/images/markuspiano.jpg';
import { getWorks } from '@/sanity/sanity-utils';
import styles from './written.module.scss';
import { WrittenTypes } from '@/sanity/types/WrittenType';
import TextLeftImgRight from '@/components/sections/sectionRow/TextLeftImgRight';
import SingleItem from '@/components/singleitem/SingleItem';
import WrittenWorkItem from '@/components/singleitem/WrittenWorkItem';

export const revalidate = 20;
export const fetchCache = 'force-no-store';
export const dynamic = 'force-dynamic';

const WrittenWork = async () => {
  const works: WrittenTypes[] = await getWorks();

  console.log(works);
  /*   const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((prev) => !prev);
  };
 */
  return (
    <div className={styles.written}>
      <div className={styles.wrapper}>
      <h2>Markus B Almqvist</h2>
      <div className={styles.headline}>
        <h4>Written work</h4>
      </div>
      <div className={styles.img}>
        <Image src={IMG} alt='stage work' fill></Image>
      </div>
      <div className={styles.overlay}></div>
      <button className={styles.fullList} /* onClick={handleShow} */>
        see full list of works for stage
      </button>
      </div>
      <div className={styles.content_wrapper}>
      {works ? (
        works.map((works) => (
          <WrittenWorkItem data={works} key={works._id + works.title} />
        ))
      ) : (
        <div>No Data available</div>
      )}
      </div>
      {/* {show ? <WrittenList /> : <span></span>} */}
    </div>
  );
};

export default WrittenWork;

/* 

*/
{
  /* <TextLeftImgRight
            title={works.title}
            imgSrc={works.image}
            key={works._id + works.title}
          >
            <SingleItem data={works} />
          </TextLeftImgRight> 
        
        */
}
