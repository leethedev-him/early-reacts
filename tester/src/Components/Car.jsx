import { useState } from "react"



function Car(){
    const styles = {
        div: {
            padding: "20px",
        },
        but:{
            marginTop: "20px",
        },
    }
    
    const notEmpty = (x) => x.trim() !== "";

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    const addCar = () => {
        let newCar = {
            year: carYear,
            // make: carMake,
            // model: carModel,
        }
        if(notEmpty(carMake))
            newCar.make = carMake
        else
            alert("Make Cannot be empty")

        if(notEmpty(carModel))
            newCar.model = carModel
        else
            alert("Model Cannot be empty")


        if (notEmpty(carModel) && notEmpty(carMake)){


            setCars((cars) => [...cars, newCar])

            
            setCarYear(new Date().getFullYear())
            setCarMake("")
            setCarModel("")

        }
    };

    const removeCar = (index) => {
        setCars(c => c.filter((_, i) => i !== index))
    } ;
    const changeYear = (event) => setCarYear(event.target.value < (new Date().getFullYear() + 1) && event.target.value > 1999 ? event.target.value: new Date().getFullYear());
    const changeMake = (event) => setCarMake(event.target.value) ;
    const changeModel = (event) => setCarModel(event.target.value);

    return (
        <>
            <div style={styles.div}>
                <h2>List of Car Properties</h2>
                    
                <ul>
                     {cars.map((car, index) =>
                    <li key={index} onDoubleClick={() => removeCar(index)}>{car.year} {car.make} {car.model}</li>
                    )}
                </ul>
                
                <input type="number" value={carYear} onChange={changeYear}/> <br/>
                
                <input type="text" value={carMake} onChange={changeMake} placeholder="Enter The Car Make"/> <br/>
                
                <input type="text" value={carModel} onChange={changeModel} placeholder="Enter The Car Model"/> <br/>
                <button onClick={addCar} style={styles.but}>Add Car</button> <br/>

                <h5 style={{marginTop: "20px"}}>Enter Car properties and click  add car. <br/> Double click on existing car to remove.</h5>
            </div>

        </>
    )
}


export default Car