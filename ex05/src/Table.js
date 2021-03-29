import React, {Component} from 'react';

const TableHeater =()=>{
  return (
    <thead>
       <tr>
         <th>First name</th>
         <th>Last name</th>
       </tr>
    </thead> 
  )
}

const TableBody =() => {
  return (

  <tbody>
     <tr>
        <td>Lary</td>
        <td>Page</td>  
     </tr>
     <tr>
       <td>Ada</td>
       <td>Lovelace</td>
    </tr>
    <tr>
       <td>Alan</td>
       <td>Turing</td>
    </tr>
  </tbody> 

  )
}
class Table extends Component {
    render(){
        return (
            <table>
              <TableHeater />
              <TableBody />   
            </table>
        )
    }
}
 export default Table;
