import HouseRow, { HouseRowMem } from "./houseRow";
import HouseAdd from "./houseAdd";
import useHouses from "@components/hooks/useHouses";
import LoadingIndicator from "./loadingIndicator";
import loadingStatus from "@components/helpers/loadingStatus";

const HouseList = ({selectHouse}) => {
    const {houses, setHouses, loadingState} = useHouses();

    if (loadingState !== loadingStatus.loaded)
        return <LoadingIndicator loadingState={loadingState} />;

    const addHouse = (newHouse) => {
        setHouses([
            ...houses,
            newHouse
        ]);
    };

    return (
        <>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Houses currently on the market
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Asking Price</th>
                    </tr>
                </thead>
                <tbody>
                    {houses.map(h => <HouseRow key={h.id} house={h} selectHouse={selectHouse} />)}
                </tbody>
            </table>
            <HouseAdd callback={addHouse} />
        </>
    );
};

export default HouseList;