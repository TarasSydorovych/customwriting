import Header from '../header'
import Footer from '../mainPage/footer'
import './pageError.css'



export default function PageError() {




    return(
        <>
        <Header/>
        <div className='errorWrap'>
            <h1 className='errorWrapH1'>
                404 Page not found
            </h1>
        </div>
        <Footer/>
        </>
    )
}