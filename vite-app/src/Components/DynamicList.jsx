import { Fragment } from "react";

const DynamicList = ({list}) => {

    return (
        <Fragment>
            <h2>Dynamic List</h2>
            {
                list.map((v, i)=> (
                    <li key={v}>{v}</li>
                ))
            }
        </Fragment>
    )
};

export default DynamicList;
