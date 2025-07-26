import React from 'react'
import TemplateOne from '../components/TemplateOne'
import TemplateTwo from '../components/TemplateTwo'
import TemplateThree from '../components/TemplateThree'

const RenderResume = ({
    templateId,
    resumeData,
    containerWidth,
}) => {
    // Render the resume based on the selected template and data
    switch (templateId) {
        case '01':
            return (
                <TemplateOne resumeData={resumeData} containerWidth={containerWidth} />
            )
        
        case '02':
            return (
                <TemplateTwo resumeData={resumeData} containerWidth={containerWidth} />
            )

        case '03':
            return (
                <TemplateThree resumeData={resumeData} containerWidth={containerWidth} />
            )

        default:
            return(
                <TemplateOne resumeData={resumeData} containerWidth={containerWidth} />
            )

    }
};

export default RenderResume
