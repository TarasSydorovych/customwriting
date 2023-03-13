





export default function SevenBlock({setAdwWriter, setPrintable, setSh1, setSh2, setAdwWriterText, setPrintableText}) {


        const firstCheck = () => {
                let checkBox = document.getElementById("checkOne");
                if (checkBox.checked == true){
                        setAdwWriter(true)
                        setSh1(14.25)
                        setAdwWriterText('Advanced writer')
                } else {
                        setSh1(0)
                        setAdwWriter(false)
                        setAdwWriterText('')
                }
        }
       const secondCheck = () => {
        let checkBox = document.getElementById("checkTwo");
        if (checkBox.checked == true){
                setPrintable(true)
                setSh2(14.95);
                setPrintableText('Printable sources')
        } else {
                setSh2(0);
                setPrintable(false)
                setPrintableText('')
        }  
        }


    return(
        <>
        <div className="blockLikeAcademicCheck">
        <input type="checkbox" onClick={firstCheck}  className="checkBoxSt" id="checkOne" name="scales" />
<div className="recomendedDateCheck">
        <h4 className='blockLikeAcademicH4'>Advanced writer</h4>
        <p className='blockLikeAcademicP'>Expert writer in the chosen field</p>
        </div>
        
                </div>
                <div className="blockLikeAcademicCheck">
                <input type="checkbox" onClick={secondCheck} className="checkBoxSt" id="checkTwo" name="scales" />
<div className="recomendedDateCheck">
        <h4 className='blockLikeAcademicH4'>Printable sources</h4>
        <p className='blockLikeAcademicP'>PDF copies of the articles, extracts from books, and other cited materials</p>
        </div>
       
                </div>
                
                </>
        )
}