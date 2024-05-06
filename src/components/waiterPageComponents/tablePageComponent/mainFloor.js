import TableComponent from "./tableComponent";
import "./mainFloor.css"

const MainFloor =({data})=>{
    return (
        <div className="mainfloor">
            <div className="background-container">
            <div className="grid-container">
      {data.map((item, index) => (
        <TableComponent tableNumber={item} key={item}/>
      ))}
    </div>
        </div>
       <div class="status-row">
       <div class="circle green"></div>
       <div class="status-text">Vacant</div>
       <div class="circle red"></div>
       <div class="status-text">Occupied</div>
     </div>
     
        </div>
    );
}
export default MainFloor;