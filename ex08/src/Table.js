import React, {Component} from 'react';

class Table extends Component {
    render(){
      const {characterData}=this.props; 
        return (
            <table>
              <TableHeater />
              <TableBody characterData= {characterData} />   
            </table>
        )
    }
}
 
const TableBody =(props)=> {
  const rows = props.characterData.map ((row, index)=>{
    return (
      <tr key= {index}>
        <td>{row.firstName}</td>
        <td>{row.lastName}</td>
      </tr>
    );
    });

    export default Table;

   return <tbody>{rows}</tbody>;
 }

