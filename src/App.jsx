import { useState } from 'react'
import './App.css'
import GeneralInfo from "@/components/GeneralInfo"
import Education from "@/components/Education"
// import Experience from "@/components/Experience"

function App() {
  const [generalInfo, setGeneralInfo] = useState({name: '', email: '', phone: ''});
  const [isEditingGeneral, setIsEditingGeneral] = useState(true);

  const [education, setEducation] = useState({school: '', title: '', date: ''});
  const [isEditingEducation, setIsEditingEducation] = useState(true);

  const handleGeneralSubmit = (data) => {
    setGeneralInfo(data);
    setIsEditingGeneral(false);
  }

  const handleEducationSubmit = (data) => {
    setEducation(data);
    setIsEditingEducation(false);
  }


  const handleGeneralEdit = () => setIsEditingGeneral(true);
  const handleEducationEdit = () => setIsEditingEducation(true);

  return (
    <div className='max-w-4xl p-4 text-left'>
      <h1 className='text-3xl font-bold mb-6'>CV Application</h1>
      <GeneralInfo
        data={generalInfo}
        isEditing={isEditingGeneral}
        onSubmit={handleGeneralSubmit}
        onEdit={handleGeneralEdit}
      />
      <Education
        data={education}
        isEditing={isEditingEducation}
        onSubmit={handleEducationSubmit}
        onEdit={handleEducationEdit}
      />
    </div>
  )
}

export default App;