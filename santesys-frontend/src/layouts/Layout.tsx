import Header from '../components/Header';
import Footer from '../components/Footer';

interface Props {
    children:React.ReactNode;
}
export const Layout = ({ children }: Props) => {
    return(
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
} 