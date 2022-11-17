import {useFormik} from "formik";
import React from "react";

type AddMessageTypeForm = {
    sendMessage: (newMessageBody: string) => void
}

export const AddMessageForm = (props: AddMessageTypeForm) => {
    const formik = useFormik({
        initialValues: {
            newMessageBody: ''
        },

        onSubmit: values => {
            alert(JSON.stringify(values));
            props.sendMessage(values.newMessageBody)
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div style={{display: "block"}}>
                <label style={{color: "gold"}} htmlFor="textarea">Write a message</label>
                <textarea
                    name="newMessageBody"
                    onChange={formik.handleChange}
                    value={formik.values.newMessageBody}
                    onBlur={formik.handleBlur}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};
