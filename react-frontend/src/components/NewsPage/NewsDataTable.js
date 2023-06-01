
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const NewsDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.desc}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.team1}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.team2}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.img1}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.img2}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.score1}</p>
    const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.score2}</p>
    const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.status}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="desc" header="Description" body={pTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="team1" header="Team 1" body={pTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="team2" header="Team 2" body={pTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="img1" header="Image 1" body={pTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="img2" header="Image 2" body={pTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="score1" header="Score 1" body={pTemplate5} sortable style={{ minWidth: "8rem" }} />
            <Column field="score2" header="Score 2" body={pTemplate6} sortable style={{ minWidth: "8rem" }} />
            <Column field="status" header="Status" body={pTemplate7} sortable style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default NewsDataTable;