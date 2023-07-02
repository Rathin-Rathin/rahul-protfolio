import Card from "../../../components/Card";
import SectionTitle from "../../../components/SectionTitle";
import useTitle from "../../../hooks/Title/useTitle";
import img1 from "../../../assets/website/img1.png";
import img2 from "../../../assets/website/img2.png";
import img3 from "../../../assets/website/img3.png";
import img4 from "../../../assets/website/img4.png";

const MyProjects = () => {
    useTitle('Projects');
    return (
        <div className="mb-12">
            <SectionTitle heading="My Projects" />
            <div className="mt-12 pt-12 ">
                <p className="">From last 1 year I am learning web-development.During this time i have learned many technologies.Some of them i got expertise ,and some of them ,i am familiar with. All the technologies ,that i know are listed below.Day by day i am learning ,and making my skills stronger.</p>
                <p className="">Hope my knowledge will help you to improve your business and will help you to solve your problem.</p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card bg={img1} liveLink="https://music-master-27cfe.web.app/" name="Music Master" info="The music master is an music course selling website.In this application have a dashboard system.The dashboard have 3 role Admin,Instructor and Student.Student can payment by there cardit card." />
                <Card bg={img2} liveLink="https://baby-stoy.web.app/" name="baby's toy" info="Baby's toy is a ecommerce web-application.The user can buy all kind of baby doll.The user also can add a doll for sale. This web application is fully responsive for mobile,desktop and large devise ." />
                <Card bg={img3} liveLink="https://the-thai-master-client.web.app/" name="the Thai master" info="The Thai Master web application is about thai chef.If any one want to here a thai chef ,he can visit this site.A user can see the menu thai make the chef he choose.The application is also responsive." />
                <Card bg={img4} liveLink="https://tranquil-choux-a0ab02.netlify.app/" name="job bazar" info="This is a job hunting web-site.Using this site any one can search the job market and apply the job." />

            </div>
        </div>
    );
};

export default MyProjects;