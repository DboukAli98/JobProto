import React , {Fragment , useEffect , useState} from "react";
import "../../App.css";
import MaterialTable from 'material-table';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";




const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });



 const TableSearch = () => {


    const classes = useStyles();

    const [jobs , setJobs] = useState([]);
    const [search , setSearch] = useState("");

    const getJobs = async () => {
        try {

            const response = await fetch("http://localhost:3001/jobs");
            const jsonData = await response.json();

            setJobs(jsonData);
            console.log(jsonData);
            
        } catch (err) {
            console.error(err.message);
        }
    };
    useEffect(() =>{
        getJobs();
    }, []);

    return(
        <div className="table-search">
          <div className="input-box">
            <input className="search-input"
            type="text" 
            placeholder="Job Title Here"
            onChange={e => {
                setSearch(e.target.value);

            }}

            
            />
            </div>
            
           
            
            {/*jobs.filter(item => {
                if (search == "") {
                    return item
                }
                else if (item.job_title.toLowerCase().includes(search.toLowerCase())){
                    return item;
                }


            }).
            map(item => {
                return <p>{item.job_title} = {item.comp_name}</p>
            })*/}        

<TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Job Title</StyledTableCell>
              <StyledTableCell>Company Name</StyledTableCell>
              <StyledTableCell>Job Location</StyledTableCell>
              <StyledTableCell>Job Type / Skills Required </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobs
              .filter((item) => {
                if (search == "") {
                  return item;
                } else if (
                  item.job_title.toLowerCase().includes(search.toLowerCase())
                  
                ) {
                  return item;
                }
              })
              .map((item) => {
                return (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell component="th" scope="row">
                      {item.job_title}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {item.comp_name}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {item.job_location}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {item.skills}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>


        </div>


    )

    
};
export default TableSearch;

/*<MaterialTable title="JobsSearched"
            
            />*/