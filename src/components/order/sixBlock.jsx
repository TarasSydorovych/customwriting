





export default function SixBlock({setAdwPaper, setPaperPreffer}) {

const setadw = (id, e, text) => {
        
        e.preventDefault();
        setAdwPaper(id);
        setPaperPreffer(text);
        for(let i = 0; i < document.getElementsByClassName('blockLikeAcademic').length; i++){
                document.getElementsByClassName('blockLikeAcademic')[i].style.background = 'white';
        }
        e.currentTarget.style.background = '#f9fcff';

}


    return(
        <>
        <div className="blockLikeAcademic" onClick={(e) => setadw(1.1, e, 'Advanced paper')}>
<div className="recomendedDate">
        <h4 className='blockLikeAcademicH4'>Advanced paper</h4>
        <p className='blockLikeAcademicP'>A paper done by the writer with high expertise in the field</p>
        </div>
        
                </div>
                <div className="blockLikeAcademic" onClick={(e) => setadw(1.1, e, 'Standard paper')}>
<div className="recomendedDate">
        <h4 className='blockLikeAcademicH4'>Standard paper</h4>
        <p className='blockLikeAcademicP'>Just a regular paper according to your instructions </p>
        </div>
       
                </div>
                <div className="blockLikeAcademic" onClick={(e) => setadw(0.9, e, 'Standard paper in simple English')}>
<div className="recomendedDate">
        <h4 className='blockLikeAcademicH4'>Standard paper in simple English</h4>
        <p className='blockLikeAcademicP'>Recommended for international students</p>
        </div>
       
                </div>
                </>
        )
}