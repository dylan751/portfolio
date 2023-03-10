import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services, basicInfo, skillProgressBar } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a student at Hanoi University of Science and Technology (HUST) and a
        software developer with experience in TypeScript and JavaScript, and
        expertise in frameworks like React and Node.js. I'm a quick learner and
        always eager to improve my skills to build efficient, scalable, and
        user-friendly websites that solve real-world problems!
      </motion.p>

      <motion.div
        variants={fadeIn('', '', 0.1, 1)}
        className="flex md:flex-row flex-col gap-10 mt-14 text-secondary"
      >
        <div className="flex flex-col gap-2 h-full">
          {basicInfo.slice(0, 4).map((info, index) => (
            <p className="border-b border-secondary py-2 w-full" key={index}>
              <span className="font-medium text-white">{info.name}:</span>{' '}
              {info.value}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-2 h-full">
          {basicInfo.slice(4, 8).map((info, index) => (
            <p className="border-b border-secondary py-2 w-full" key={index}>
              <span className="font-medium text-white">{info.name}:</span>{' '}
              {info.value}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-2 md:w-1/3 w-full h-full">
          {skillProgressBar.map((skill, index) => (
            <div className="flex flex-col gap-2 my-2" key={index}>
              <div className="flex justify-between">
                <span className="font-medium text-white">{skill.name}</span>
                <span className="text-white">{skill.percentage}%</span>
              </div>
              <div className="h-[10px] bg-white-100 rounded-md">
                <div
                  className={`h-full bg-secondary rounded-md`}
                  style={{ width: `${skill.percentage}%` }}
                >
                  <span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
