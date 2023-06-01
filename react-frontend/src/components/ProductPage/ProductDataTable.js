
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { Rating } from 'primereact/rating';


const ProductDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.name}</p>
    const imageTemplate1 = (rowData, { rowIndex }) => <Image src={rowData.img}  alt="Image" height="60px" />
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.desc}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.sku}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.type}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.location}</p>
    const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.time}</p>
    const ratingTemplate7 = (rowData, { rowIndex }) => <Rating stars={5} style={{width:"20rem"}} value={rowData.rating} cancel={false}  />

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="name" header="Name" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="img" header="Image" body={imageTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="desc" header="Description" body={pTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="sku" header="Ticket No." body={pTemplate3} sortable style={{ minWidth: "8rem" }} />
            <Column field="type" header="Seat Type" body={pTemplate4} sortable style={{ minWidth: "8rem" }} />
            <Column field="location" header="Venue" body={pTemplate5} sortable style={{ minWidth: "8rem" }} />
            <Column field="time" header="Date and Time" body={pTemplate6} sortable style={{ minWidth: "8rem" }} />
            <Column field="rating" header="Rating" body={ratingTemplate7} sortable style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default ProductDataTable;