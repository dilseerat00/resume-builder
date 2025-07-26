import React from 'react'

const Tabs = ({tabs,activeTab, setActiveTab}) => {
  return (
    <div className='w-full my-2'>
        <div className='flex flex-wrap gap-2 bg-emerald-100 border border-emerald-300 text-emerald-800 rounded-md px-3 py-1'>
            {tabs.map((tab, index) => (
                <button key= {tab.label }
                className={`relative flex-1 sm:flex-none px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200
                ${activeTab === tab.label ? 'text-emerald-500 bg-white'
                :"text-slate-500 hover:text-emerald-400 hover:bg-white/50" }`}
                onClick={()=>setActiveTab(tab.label)}>
                    <span className='relative z-10'>
                        {tab.label}

                        {activeTab === tab.label && (
                            <div className='absolute inset-0 bg-emerald-200 rounded-md opacity-50 pointer-events-none'>
                            </div>
                        )}
                    </span>
                </button>
            ))}
    </div>
    </div>
  )
}

export default Tabs
