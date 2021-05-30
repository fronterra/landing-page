import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog = ({ data }) => {
    return (
        <>
            <Navbar />
                <h1>
                    {data.title}
                </h1>

                <p>
                    {data.text}
                </p>
            <Footer />
        </>
    );
};

export const getStaticProps = async () => {
    const request = await fetch('http://localhost:3000/api/digest')
    const json = await request.json()
  
    return {
      props: {
        data: json.data
      }
    }
}

export default Blog;
