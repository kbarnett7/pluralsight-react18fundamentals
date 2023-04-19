import React from "react";
import currencyFormatter from "@components/helpers/currencyFormatter";

const HouseRow = ({house}) => {
    return (
        <tr>
            <td>{house.address}</td>
            <td>{house.country}</td>
            <td>{currencyFormatter.format(house.price)}</td>
        </tr>
    );
};

const HouseRowMem = React.memo(HouseRow);

export default HouseRow;
export {HouseRowMem};