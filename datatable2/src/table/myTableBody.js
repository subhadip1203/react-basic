import React from 'react'
import TableBody from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';



function MyTableHead({data,arrange}) {


    const body_style= {
        fontSize: 14,
    }

    
    return (
        <TableBody>
           
                {data.map( (value,i) =>{
                    return(
                        <TableRow key={i+'row'}> 
                            { arrange.map( (arng ,idx) =>{
                                return(
                                    <TableCell key={idx} style={body_style} >{ value[arng.dataHeading] ? value[arng.dataHeading] :'-' }</TableCell>
                                )
                                
                            })}
                            
                        </TableRow>
                    )
                    
                })}
            
                {/* <TableCell style={body_style} >abcd</TableCell>
                <TableCell style={body_style} align="right">efgh</TableCell>
                <TableCell style={body_style} align="right">ijkl</TableCell>
                <TableCell style={body_style} align="right">mnop</TableCell>
                <TableCell style={body_style} align="right">qrs&nbsp;(t)</TableCell> */}
            
        </TableBody>
    )
}

export default MyTableHead
