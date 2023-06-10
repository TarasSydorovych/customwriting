import { AiOutlinePlus,AiOutlineLine } from "react-icons/ai";




export default function TypePaper({setDiscipline, setTypeOfPaper, setTypePaperValue, pageCount, setPageCount, setChartOrSlide}) {

const selectCheckValue = (e) => {
    let numValue = e.target.value;
    if(numValue === "PPT without speaker's notes"){
        setTypePaperValue(0.5);
    }else if(numValue === 'PDF poster'){
        setTypePaperValue(3);
    }else if(numValue === 'Editing'){
        setTypePaperValue(0.3333333333333333);
    }else if(numValue === 'Rewriting'){
        setTypePaperValue(0.5);
    }else{
        setTypePaperValue(1);
    }
    setTypeOfPaper(numValue);
    
}
const selectDiscuplin = (e) => {
    let duscupline = e.target.value;
    setDiscipline(duscupline)
}


const subArray = [
'Classic English Literature',
'Film & Theater studies',
'History',
'Music',
'Philosophy',
'Religious studies',
'Shakespeare',
'Literature',
'English 101',
'Composition',
'Linguistics',
'Poetry',
'Art (Fine arts, Performing arts)',
'Anthropology',
'Economics',
'Political science',
'Psychology',
'Sociology',
"Women's & gender studies",
'Social Work and Human Services',
'Cultural and Ethnic Studies',
'Tourism',
'Ethics',
'Urban Studies',
'Accounting',
'Business Studies',
'Finance',
'Management',
'Marketing',
'International Relations',
'Logistics',
'Human Resources Management (HRM)',
'Public Relations (PR)',
'Chemistry',
'Physics',
'Biology (and other Life Sciences)',
'Zoology',
'Geography',
'Astronomy (and other Space Sciences)',
'Ecology',
'Geology (and other Earth Sciences)',
'Computer science',
'Mathematics',
'Statistics',
'Application Letters',
'Architecture, Building and Planning',
'Communications',
'Education',
'Family and consumer science',
'Law',
'Medicine',
'Technology',
'IT, Web',
'International Trade',
'Nursing',
'Criminal law',
'Environmental studies and Forestry',
'Health Care',
'Sports',
'Agriculture',
'Aviation',
'Civil Engineering',
'Criminal Justice',
'Engineering',
'Leadership Studies',
'Nutrition/Dietary',
'Public Administration',
'Medical Sciences (Anatomy, Physiology, Pharmacology etc.)',

];
    const arrTypePaper = [
        'Annotated bibliography',
        'Article review',
        'Blog',
        'Book/movie review',
        'Business plan',
        'Capstone project',
        'Cover letter',
        'Course work',
        'Creative writing',
        'CV',
        'Discussion post',
        'Dissertation',
        'Editing',
        'Essay (any type)',
        'Lab report',
        'Literature review',
        'Outline',
        "PPT with speaker's notes",
        "PPT without speaker's notes",
        'PDF poster',
        'Question-answer',
        'Reflection paper',
        'Research paper',
        'Research proposal',
        'Response paper',
        'Rewriting',
        'Speech',
        'Term paper',
        'Thesis',
    ];



    return(
        <div className="typePaperWrap">
<div className="optionTypePaper">
    <h2 className="optionTypePaperH2">Type of paper</h2>
    <select name="user_profile_color_1" className="calkSelect" onChange={selectCheckValue}>

    {arrTypePaper.map((el,index)=>{
        return <option value={el}>{el}</option>
    })}
</select>
</div>
<div className="optionTypePaper">
    <h2 className="optionTypePaperH2">Subject or discipline</h2>
    <select name="user_profile_color_1" className="calkSelect" onChange={selectDiscuplin}>

    {subArray.map((el,index)=>{
        return <option value={el}>{el}</option>
    })}
</select>
</div>
<div className="optionTypePaper">
    <h2 className="optionTypePaperH2">Pages</h2>
   <div className="countPageInOrder">
    <div className="coutnWWrap">
        <AiOutlineLine className="countPlusMinus" onClick={() => setPageCount(prev => prev - 1)}/>
    <input type='text' className="inputWordCount" onChange={(e) => setPageCount(e.target.value)} value={pageCount}></input>
    <AiOutlinePlus className="countPlusMinus" onClick={() => setPageCount(prev => prev + 1)}/>
    </div>
    <div className="countWOrds">{300 * pageCount} word</div>
    
   </div>

</div>
        </div>
    )
}