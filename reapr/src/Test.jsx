import fromCymk from 'C:/Users/Lee/Documents/AI Slop/sttt.js'

const  cmyk = [80, 60, 0, 0]
const inp = '#'+ fromCymk(cmyk)

const currentYear = new Date().getFullYear();

const Test = (props) => {

    const mainc = inp; //"#d400ff";

    const styling = {

        card:{
              margin: "30px",
              padding: "40px 20px 40px 20px ",
              border: "none",
              boxShadow : "5px 5px 8px #979797d8",
              borderRadius: "30px",
              maxWidth: "500px",
              maxHeight: "auto",
              background: `linear-gradient(to bottom, #${fromCymk([0, 0, 10, 0])}, #${fromCymk([0, 0, 40, 0])})`,
              textAlign: "center",
              display: "inline-block",
        
              position: "relative",
            },
        
        
        div:{
           
            padding: "40px",
            textAlign: "center",
            align: "center", 

                      
        },

        img:{

            width: "30%",
            height: "auto",
            borderRadius: "200px",
            boxShadow : "8px 8px 10px #807f7fd8",
        },


        head2 :{
            color: mainc,
        },

        table: {
            margin: "0 auto",
            //padding: "20px",
            width: "70%",
            textAlign: "left",
            borderSpacing: "0",
            boxShadow : "8px 8px 5px #807f7fd8",

            th:{
                backgroundColor: mainc,
                color: "white",
                padding: "5px",
            },

            tbody:{
                borderBottom: `2px solid ${inp}`,
                     
            },

            td: {
                backgroundColor: "white",
                padding: "5px",
                borderBottom: `2px solid ${inp}`,
                borderRight: `2px solid ${inp}`,
                borderRadius: "2px",
                borderCollapse: "collapse",
                
            },
        }
    };

    

  return (
    
    <div className="card" style={styling.card}>
        <img style={styling.img} src={props.student.image} alt={props.student.image}>
        </img>
        
        <h2 style={{...styling.head2, textAlign: "centre"}} className="head2">Welcome: "{props.student.name}"</h2>
        <h3>Your Matriculation number is: {props.student.mat_number}</h3>
        <h4>You were born in the year { currentYear - props.student.age }</h4>
        <h3>You are {props.student.gender}</h3>


        <table style={styling.table}>
            <tr >
                <th style={styling.table.th} >Course Code</th>
                <th style={styling.table.th}>Score</th>
                <th style={styling.table.th}>Grade</th>
            </tr>

            <tbody>

            {Object.entries(props.student).map((m, i)=> 
            (<tr key={m}>
                <td style={styling.table.td}>{props.student.courses[i]}</td> 
                <td style={styling.table.td} >{props.student.score[i]}</td> 
                <td style={styling.table.td}>{props.student.grades[i]}</td>
            </tr>
            
        ))}

            </tbody>
            
        </table>

   
    </div>
  )
}



export default Test
