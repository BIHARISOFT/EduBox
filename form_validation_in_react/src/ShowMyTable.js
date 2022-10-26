import React from 'react';

const ShowMyTable = (props) => {

    const { data } = props;
    return (<>
        <div className='ShowTable'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mobile No</th>
                        <th>Email Address</th>
                        <th>Gender</th>
                        <th>Date Of Birth</th>
                        <th>Language</th>
                        <th>State</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.Name}</td>
                        <td>{data.MobileNo}</td>
                        <td>{data.EmailAddress}</td>
                        <td>{data.Gender}</td>
                        <td>{data.DateOfBirth}</td>
                        <td>{data.Language.toString()}</td>
                        <td>{data.State}</td>
                    </tr>

                </tbody>
            </table>
        </div>

    </>);
};
export default ShowMyTable;