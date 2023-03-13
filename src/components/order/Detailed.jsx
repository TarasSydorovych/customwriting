

import { AiOutlinePlus,AiOutlineLine } from "react-icons/ai";


export default function Detailed({setTextArea, setPaperFormat, setCountReference, countReference, setFile}) {
    const arrTypePaper = [
        'MLA',
'APA 6',
'APA 7',
'Chacago / Turabian',
'Not applicable',
'Other',


    ];
const textAreaChange = (e) => {

    setTextArea(e.target.value);
}
const paperFormat = (e) => {
    setPaperFormat(e.target.value)
}
const changeFile = (e) => {
   
    setFile(e.currentTarget.files)
    
}

    return(
        <div className="detailWraper">
<div className="detailWraperHeader">
    <p className="standartP">Instructions</p>
    <p className="onClickP">How to fill this?</p>
</div>
<div className="textAreaBlock">
    <div className="wrapArea">
<textarea id="story" name="story" className="textAreaR" onChange={textAreaChange}
          rows="5" cols="33" placeholder="Type anything you feel important for the writer to consider or attach files with details">
</textarea>
<div className="uploadFile">
<label class="label">
         <input type="file" onChange={changeFile}
         id="inputFilesId"
   accept=".doc,.docx,.xml,.jpeg,.png,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"/>
         <span>Select a file</span>
       </label>
</div>
</div>
<div className="optionTypePaper">
    <h2 className="optionTypePaperH2">Paper format</h2>
    <select name="user_profile_color_1" className="calkSelectPaperFormat" onChange={paperFormat}>

    {arrTypePaper.map((el,index)=>{
        return <option value={el}>{el}</option>
    })}
</select>
</div>
<div className="optionTypePaper">
    <h2 className="optionTypePaperH2">References to be used</h2>
    <p className="paragrafRef">The minimum number of sources for the writer to use and list on the reference page.</p>
   
    <div className="coutnWWrap">
        <AiOutlineLine className="countPlusMinus"/>
    <input type='text' className="inputWordCount" onChange={(e) => setCountReference(e.target.value)} value={countReference}></input>
    <AiOutlinePlus className="countPlusMinus"/>
    </div>
    
  

</div>
</div>
        </div>
    )
}