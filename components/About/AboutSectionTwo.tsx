import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap ">
          <div className="w-full h-full  px-4 lg:w-1/2  flex flex-col justify-center">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center  lg:m-0 flex items-center"
              data-wow-delay=".15s"
            >
              <SectionTitle
                title="Simplified Process for Personalized Learning"
                paragraph="At Stellar, we believe in providing a seamless and personalized learning experience. Our unique process involves form filling and interviews to ensure we match you with the perfect host who will guide you towards achieving your academic goals."
                center
                mb="0"
              />
            </div>
            {/* <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
            
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div> */}
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Form Filling and Interviews
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We have a rigorous selection process that includes form
                  filling and interviews to ensure we hire the most qualified
                  hosts.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Roles of Hosts & Students
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our hosts are dedicated mentors who provide guidance and
                  support to students, helping them manage their client
                  requests, appointments, and calendar.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Personalized Study Plans
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We create personalized study plans tailored to each student's
                  aim, timeline, and mentor, along with useful tools like to-do
                  lists and a monthly planner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
