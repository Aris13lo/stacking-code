import SectionOne from '../components/SectionOne/SectionOne';
import Layout from './../components/Layout/Layout'
import SectionTwo from '../components/SectionTwo/SectionTwo';
import SectionThree from '../components/SectionThree/SectionThree';

const Landing = () => {
    return ( 
        <Layout>
            <SectionOne/>           
            <SectionTwo/>
            <SectionThree/>
        </Layout>
     );
}
 
export default Landing;
