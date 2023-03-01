import { IShoe } from "@/interfaces/IShoe";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { MyNumberInput, MyTextInput } from "../inputs";

const AddShoe = () => {
    const [shoe, setShoe] = useState<IShoe>();

    return (
        <div>
            <h5>Add Shoe Here</h5>
            <hr />
            <Formik
                initialValues={{
                    name: "",
                    styleNumber: "",
                    datePhotographed: "",
                    cameraUsed: "",
                    brand: "",
                    price: 0.0,
                    length: 0,
                    locationManufactured: "",
                    yearManufactured: "",
                    sex: "",
                    primarySize: 0,
                    secondarySize: 0,
                    sideOfShoe: "",
                    size: 0,
                    age: "",
                    file: "",
                    additionalFiles: "",
                }}
                onSubmit={(values, { setSubmitting }) => {
                    alert(values);
                }}>
                {(formik) => (
                    <Form>
                        <div className="row g-3">
                            <div className="col-md-3">
                                <MyTextInput id="name" name="name" placeholder="Name" type="text" />
                            </div>
                            <div className="col-md-3">
                                <MyTextInput
                                    id="styleNumber"
                                    type="text"
                                    name="styleNumber"
                                    placeholder="Style Number"
                                />
                            </div>
                            <div className="col-md-3">
                                <MyTextInput
                                    id="datePhotographed"
                                    type="text"
                                    name="datePhotographed"
                                    placeholder="MM/DD/YYYY"
                                    label="Date Photographed (format: MM/DD/YYYY)"
                                />
                            </div>
                        </div>
                        <br />

                        <div className="row g-3">
                            <div className="col-md-4">
                                <MyTextInput
                                    id="camera"
                                    type="text"
                                    name="camera"
                                    placeholder="Camera Used"
                                />
                            </div>
                            <div className="col-md-2">
                                <MyTextInput
                                    id="brand"
                                    type="text"
                                    name="brand"
                                    placeholder="Brand"
                                />
                            </div>
                            <div className="col-md-1">
                                <MyNumberInput
                                    id="price"
                                    step="0.01"
                                    name="price"
                                    placeholder="Price"
                                />
                            </div>
                            <div className="col-md-1">
                                <MyNumberInput
                                    id="length"
                                    name="length"
                                    step="0.1"
                                    placeholder="Length (MM)"
                                />
                            </div>
                        </div>
                        <br />

                        <div className="row g-3">
                            <div className="col-md-3">
                                <MyTextInput
                                    id="locationManufactured"
                                    type="text"
                                    name="locationManufactured"
                                    placeholder="Location Manufactured"
                                />
                            </div>
                            <div className="col-md-2">
                                <MyTextInput
                                    id="yearManufactured"
                                    type="number"
                                    name="yearManufactured"
                                    placeholder="Year Manufactured"
                                />
                            </div>
                        </div>
                        <br />

                        <div className="row g-3">
                            <div className="col-md-2">
                                <label className="form-label" htmlFor="sex">
                                    Sex
                                </label>
                                <Field name="sex" id="sex" as="select" className="form-select">
                                    <option selected value="Mens">
                                        Mens
                                    </option>
                                    <option value="Womens">Womens</option>
                                    <option value="Unisex">Unisex</option>
                                </Field>
                                {/* <MySelect name="sex" id="sex" label="Sex">
                                    <option selected value="Male">
                                        Male
                                    </option>
                                    <option value="Female">Female</option>
                                    <option value="Unisex">Unisex</option>
                                </MySelect> */}
                            </div>
                            <div className="col-md-2">
                                <label className="form-label" htmlFor="primarySize">
                                    {formik.values.sex === "Unisex"
                                        ? `Mens Size`
                                        : `${formik.values.sex} Size`}
                                </label>
                                <MyNumberInput id="primarySize" step="0.5" name="primarySize" />
                            </div>

                            {formik.values.sex === "Unisex" && (
                                <div className="col-md-2">
                                    <MyNumberInput
                                        label="Womens Size"
                                        id="secondarySizeInput"
                                        step="0.5"
                                        name="secondarySize"
                                    />
                                </div>
                            )}
                        </div>
                        <br />

                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label" htmlFor="sideOfShoe">
                                Side of Shoe
                            </label>
                            <div className="col-sm-2">
                                <Field
                                    name="sideOfShoe"
                                    id="sideOfShoe"
                                    as="select"
                                    className="form-select">
                                    <option selected value="Left">
                                        Left
                                    </option>
                                    <option value="Right">Right</option>
                                </Field>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label" htmlFor="age">
                                Age
                            </label>
                            <div className="col-md-2">
                                <Field name="age" id="age" as="select" className="form-select">
                                    <option selected value="Adult">
                                        Adult
                                    </option>
                                    <option value="Youth">Youth</option>
                                </Field>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">
                                    Main Image
                                </label>
                                <input
                                    className="form-control"
                                    type="file"
                                    id="formFile"
                                    name="file"
                                />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="mb-3">
                                <label htmlFor="formFileMultiple" className="form-label">
                                    Additional Display Images
                                </label>
                                <input
                                    className="form-control"
                                    type="file"
                                    id="formFileMultiple"
                                    name="additionalFiles"
                                    multiple
                                />
                                <small id="passwordHelpBlock" className="form-text text-muted">
                                    You can select multiple photos by holding down the
                                    &apos;Ctrl&apos; button and clicking the desired photos, in the
                                    prompt box
                                </small>
                            </div>
                        </div>

                        <button className="btn btn-outline-primary" type="submit">
                            Add
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddShoe;
