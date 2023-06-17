import GarageCards from "../../components/Cards/cards"
import style from './pick.module.css'
const PickGarage = ()=> {
    return <div className={`${style.container}`}>
        <div className="row" style={{height: 100}}></div>
        <div className="row">
            <div className="col-5">
                <GarageCards />
            </div>
            <div className="col-7"></div>
        </div>
    </div>
}
export default PickGarage;