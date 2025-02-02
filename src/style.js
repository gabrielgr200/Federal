const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2: "font-poppins font-semibold xs:text-[38px] text-[40px] text-white w-full",
  heading3: "font-poppins font-semibold xs:text-[38px] text-[40px] text-[#364594] w-full",
  paragraph: "font-poppins font-normal text-white text-[18px] leading-[30.8px]",
  paragraph1: "font-poppins font-normal text-black text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  input: "w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none",

  button: "h-8 rounded-sm border-0 cursor-pointer bg-[#FFA500] text-lg transition-all duration-800 font-poppins font-semibold xs:text-[18px] text-white hover:bg-[#FFB84D] hover:scale-105"
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
