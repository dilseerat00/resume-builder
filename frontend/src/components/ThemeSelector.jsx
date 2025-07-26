import React, { use, useEffect, useRef, useState } from 'react'
import {DUMMY_RESUME_DATA, resumeTemplates} from '../utils/data'
import Tabs from './Tabs';
import { TemplateCard } from './Cards';
import RenderResume from './RenderResume';
import { Check } from 'lucide-react';

const TAB_DATA =[{label:'Templates '}]
const ThemeSelector = ({selectedTheme,setSelectedTheme,resumeData,onClose}) => {
    const resumeRef= useRef(null);
    const [baseWidth, setBaseWidth] = useState(800);

    //Select theme template using id
    const initialIndex = resumeTemplates.findIndex(template => template.id === selectedTheme);
    const [selectedTemplate, setSelectedTemplate] = useState({
        theme: selectedTheme || resumeTemplates[0]?.id || "",
        index: initialIndex >= 0 ? initialIndex : 0
    });

    const [tabValue, setTabValue] = useState('Templates');
    const handleThemeSelection = () => {
        setSelectedTheme(selectedTemplate.theme);
        onClose();
    };

    const updateBaseWidth = () => {
        if(resumeRef.current) {
            const width = resumeRef.current.offsetWidth;
            setBaseWidth(width);
        }
    }

    useEffect(() => {
        updateBaseWidth();
        window.addEventListener('resize', updateBaseWidth);
        return () => {
            window.removeEventListener('resize', updateBaseWidth);
        }
    }, []);
  return (
    <div className=' max-w-7xl mx-auto p-4 bg-white shadow-md rounded-lg'>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8
        p-4 bg-gray-50 rounded-lg shadow-sm'>
            <Tabs tabs= {TAB_DATA} activeTab={tabValue} setActiveTab={setTabValue} />

            <button className='w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 
                bg-emerald-500 hover:bg-emerald-600 
                text-white font-medium 
                rounded-md shadow-sm transition-colors duration-200'
                onClick={handleThemeSelection}>
                    <Check size={17}/>Apply Changes

            </button>
             </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
              <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-4 sm:p-6 max-h-[70vh] overflow-hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full overflow-y-auto p-2 pr-3">
                        {resumeTemplates.map((template, index) => (
                            <TemplateCard key={`template_${index}`}
                            thumbnailImg={template.thumbnailImg}
                            isSelected={selectedTemplate.index === index}
                            onSelect={() => setSelectedTemplate({ theme: template.id, index })} />
        
      ))}
     
                    </div>
                </div>

            {/*Right Section */}
            <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 p-4 sm:p-6" ref={resumeRef}>
                <RenderResume templateId={selectedTemplate.theme || ""}
                key={`template-${selectedTemplate.theme}`} 
                resumeData={resumeData || DUMMY_RESUME_DATA}
                containerWidth={baseWidth} />


            </div>
        </div>
    </div>
  )
}

export default ThemeSelector
