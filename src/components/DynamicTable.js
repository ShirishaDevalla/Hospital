import React from 'react'
import ReactTable from 'react-data-table-component'

const DynamicTable = ({column,dataList}) => {
   
    
  return (
    <div className='container'>
        <ReactTable  
           columns={column} 
           data={dataList} 
           className='border rounded m-2' 
           pagination/>

        
    </div>
  )
}

export default DynamicTable