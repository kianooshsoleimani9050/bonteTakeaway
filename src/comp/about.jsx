import { about } from "../utils/about";
const AboutPage = () => {
  console.log(about);
  console.log(about.about_section.header);
  return (
    <div className="p-0 m-0 d-flex flex-row justify-content-center align-items-center">
      <div>door image goes here</div>
      <div className="p-0 m-0 w-75 d-flex flex-column justify-content-center align-items-center">
        <h1 className="about-header p-0 m-0">{about.about_section.header}</h1>
        <strong className="p-0 m-0 w-75">{about.about_section.content}</strong>
      </div>
    </div>
  );
};

export default AboutPage;
