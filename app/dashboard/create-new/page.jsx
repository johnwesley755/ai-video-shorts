"use client"
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';

const CreateNew = () => {
    const[formData,setFormData] = useState([]);
    const onHandleInputChange=(fieldname,fieldValue)=>{
        console.log(fieldname,fieldValue);
    
        setFormData(prev=>({...prev,[fieldname]:fieldValue}))

    }
    const OnCreateclickHandler=()=>{
      GetVideoScript();
    }
    //Get Video Script
    const GetVideoScript=async()=>{
      const prompt = 'Write a script to generate '+formData.duration+' on topic: '+formData.topic+' along with AI Image prompt in '+formData.imageStyle+' format for each scene and give result in JSON format with imagePrompt and ContentText as field'
      console.log(prompt)
      const result = await axios.post('/api/get-video-script',{prompt:prompt}).then(resp=>{
        console.log(resp.data);
      })

    }
  return (
    <div className="md:px-20">
      <h2 className="font-bold text-4xl text-primary text-center">
        Create New
      </h2>
      <div className="mt-10 shadow-md p-10">
        {/*Select Topic */}
        <SelectTopic onUserSelect={onHandleInputChange} />
        {/*Select Style */}
        <SelectStyle onUserSelect={onHandleInputChange} />
        {/*Duration */}
        <SelectDuration onUserSelect={onHandleInputChange} />
        {/*Create Button*/}
        <Button className='mt-10 w-full' onClick={OnCreateclickHandler}>Create Short Video</Button>
      </div>
    </div>
  );
}

export default CreateNew