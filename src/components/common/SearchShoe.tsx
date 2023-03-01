import { ISearchCriteria } from "@/interfaces/IShoe";
import { Field } from "formik";
import Link from "next/link";
import { useState } from "react";

const SearchShoe = ({ query }: { query: ISearchCriteria }) => {
    const [form, setform] = useState<ISearchCriteria>(query);
    return (
        <>
            <h1>Search</h1>

            <select name="sex" onChange={(e) => setform({ ...form, sex: e.target.value })}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            {/* <div className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                    </label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" />
                    </div>
                </div>
            </div>
            <div className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                        Password
                    </label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" />
                    </div>
                </div>
            </div> */}

            <Link
                href={{
                    pathname: "/search",
                    query: { sex: form.sex },
                }}>
                Search
            </Link>
            <Link href="/search">Reset</Link>
        </>
    );
};

export default SearchShoe;
