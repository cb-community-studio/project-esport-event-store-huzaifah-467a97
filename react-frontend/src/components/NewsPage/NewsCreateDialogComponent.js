
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';


 
const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = [];
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const NewsCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        set_entity({})
    },[props.show])
    const onSave = async () => {
        let _data = {
            desc: _entity.desc,
            team1: _entity.team1,
            team2: _entity.team2,
            img1: _entity.img1,
            img2: _entity.img2,
            score1: _entity.score1,
            score2: _entity.score2,
            status: _entity.status

        };

        setLoading(true);
        try {
            const result = await client.service("news").create(_data);
            props.onHide();
            props.alert({ type: "success", title: "Create", message: "Created successfully" });
            props.onCreateResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create" });
        }
        setLoading(false);
    };

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError("");
    };

    return (
        <Dialog header="Create" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div role="news-create-dialog-component">
                <div>
                    <p className="m-0" >Description:</p>
                    <InputText className="w-full mb-3" value={_entity?.desc} onChange={(e) => setValByKey("desc", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Team 1:</p>
                    <InputText className="w-full mb-3" value={_entity?.team1} onChange={(e) => setValByKey("team1", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Team 2:</p>
                    <InputText className="w-full mb-3" value={_entity?.team2} onChange={(e) => setValByKey("team2", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Image 1:</p>
                    <InputText className="w-full mb-3" value={_entity?.img1} onChange={(e) => setValByKey("img1", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Image 2:</p>
                    <InputText className="w-full mb-3" value={_entity?.img2} onChange={(e) => setValByKey("img2", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Score 1:</p>
                    <InputText className="w-full mb-3" value={_entity?.score1} onChange={(e) => setValByKey("score1", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Score 2:</p>
                    <InputText className="w-full mb-3" value={_entity?.score2} onChange={(e) => setValByKey("score2", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Status:</p>
                    <InputText className="w-full mb-3" value={_entity?.status} onChange={(e) => setValByKey("status", e.target.value)}  />
                </div>


                <small className="p-error">
                    {Array.isArray(error)
                        ? error.map((e, i) => (
                              <p className="m-0" key={i}>
                                  {e}
                              </p>
                          ))
                        : error}
                </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    //
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(null, mapDispatch)(NewsCreateDialogComponent);
// createDialog_code.template
